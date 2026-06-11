import { NextRequest, NextResponse } from 'next/server';
import { createMeetingEvent, getBusySlots } from '@/lib/google-calendar';
import {
  sendClientConfirmation,
  sendAdminNotification,
  formatDate,
  formatTime,
} from '@/lib/email';

// ── Simple rate limiting ───────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max bookings per IP per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// ── Validation ─────────────────────────────────────────────────────────
interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
}

function validatePayload(
  body: unknown
): { valid: true; data: BookingPayload } | { valid: false; error: string } {
  const b = body as Record<string, unknown>;

  if (!b || typeof b !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const required = ['name', 'email', 'date', 'time'] as const;
  for (const field of required) {
    if (!b[field] || typeof b[field] !== 'string' || (b[field] as string).trim() === '') {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(b.email as string)) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Validate date format YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(b.date as string)) {
    return { valid: false, error: 'Invalid date format. Use YYYY-MM-DD' };
  }

  // Validate time format HH:mm
  const timeRegex = /^\d{2}:\d{2}$/;
  if (!timeRegex.test(b.time as string)) {
    return { valid: false, error: 'Invalid time format. Use HH:mm' };
  }

  // Validate date is not in the past
  const bookingDate = new Date(`${b.date}T${b.time}:00+05:30`);
  const now = new Date();
  if (bookingDate <= now) {
    return { valid: false, error: 'Cannot book a meeting in the past' };
  }

  // Validate working hours (10:00 - 22:00 IST, all days)
  const [hour] = (b.time as string).split(':').map(Number);
  if (hour < 10 || hour >= 22) {
    return {
      valid: false,
      error: 'Meetings can only be booked between 10:00 AM and 10:00 PM IST',
    };
  }

  // All days of the week are available (including Sunday)

  return {
    valid: true,
    data: {
      name: (b.name as string).trim(),
      email: (b.email as string).trim().toLowerCase(),
      phone: ((b.phone as string) || '').trim(),
      service: ((b.service as string) || 'General Consultation').trim(),
      message: ((b.message as string) || '').trim(),
      date: (b.date as string).trim(),
      time: (b.time as string).trim(),
    },
  };
}

// ── POST handler ───────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // Rate limit
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse & validate
    const body = await req.json();
    const result = validatePayload(body);

    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { data } = result;

    // Check for conflicts (15-min buffer)
    const slotStart = new Date(`${data.date}T${data.time}:00+05:30`);
    const bufferStart = new Date(slotStart.getTime() - 15 * 60 * 1000);
    const bufferEnd = new Date(slotStart.getTime() + 45 * 60 * 1000); // 30min meeting + 15min buffer

    const busySlots = await getBusySlots(
      bufferStart.toISOString(),
      bufferEnd.toISOString()
    );

    if (busySlots.length > 0) {
      return NextResponse.json(
        { error: 'This time slot is no longer available. Please choose another time.' },
        { status: 409 }
      );
    }

    // Create Google Calendar event with Meet link
    const meeting = await createMeetingEvent({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      date: data.date,
      time: data.time,
      duration: 30,
    });

    // Send emails (don't fail the whole request if email fails)
    const emailDetails = {
      clientName: data.name,
      clientEmail: data.email,
      clientPhone: data.phone,
      service: data.service,
      message: data.message,
      meetLink: meeting.meetLink,
      date: formatDate(data.date),
      time: formatTime(data.time),
    };

    const emailPromises = [
      sendClientConfirmation(emailDetails).catch((err) => {
        console.error('Failed to send client confirmation email:', err);
      }),
      sendAdminNotification(emailDetails).catch((err) => {
        console.error('Failed to send admin notification email:', err);
      }),
    ];

    await Promise.allSettled(emailPromises);

    return NextResponse.json(
      {
        success: true,
        meetLink: meeting.meetLink,
        eventId: meeting.eventId,
        date: formatDate(data.date),
        time: formatTime(data.time),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Book meeting error:', error);

    const message =
      error instanceof Error ? error.message : 'An unexpected error occurred';

    return NextResponse.json(
      { error: `Failed to book meeting: ${message}` },
      { status: 500 }
    );
  }
}

// ── GET handler — fetch available slots ────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: 'Provide a valid date parameter in YYYY-MM-DD format' },
        { status: 400 }
      );
    }

    // Get busy slots for the entire day (10AM - 10PM IST)
    const dayStart = `${date}T04:30:00.000Z`; // 10:00 IST = 04:30 UTC
    const dayEnd = `${date}T16:30:00.000Z`; // 22:00 IST = 16:30 UTC

    let busySlots: Array<{ start: string; end: string }> = [];
    try {
      busySlots = await getBusySlots(dayStart, dayEnd);
    } catch {
      // If Google Calendar isn't configured, return all slots as available
      console.warn('Google Calendar not configured — returning all slots as available');
    }

    // Generate all possible 30-min slots from 10:00 to 21:30
    const allSlots: string[] = [];
    for (let h = 10; h < 22; h++) {
      allSlots.push(`${h.toString().padStart(2, '0')}:00`);
      if (h < 21 || h === 21) {
        allSlots.push(`${h.toString().padStart(2, '0')}:30`);
      }
    }
    // Remove 22:00 slot — last bookable slot is 21:30
    const bookableSlots = allSlots.filter((s) => s !== '22:00');

    // Filter out busy slots (with 15-min buffer)
    const availableSlots = bookableSlots.filter((slot) => {
      const slotStart = new Date(`${date}T${slot}:00+05:30`);
      const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);
      const bufferStart = new Date(slotStart.getTime() - 15 * 60 * 1000);
      const bufferEnd = new Date(slotEnd.getTime() + 15 * 60 * 1000);

      return !busySlots.some((busy) => {
        const busyStart = new Date(busy.start);
        const busyEnd = new Date(busy.end);
        return bufferStart < busyEnd && bufferEnd > busyStart;
      });
    });

    // Don't return past slots for today
    const now = new Date();
    const todayIST = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

    const filteredSlots =
      date === todayIST
        ? availableSlots.filter((slot) => {
            const slotTime = new Date(`${date}T${slot}:00+05:30`);
            return slotTime > now;
          })
        : availableSlots;

    return NextResponse.json({ date, availableSlots: filteredSlots });
  } catch (error) {
    console.error('Get available slots error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}
