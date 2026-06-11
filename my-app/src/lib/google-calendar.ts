import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes: SCOPES,
    subject: process.env.GOOGLE_CALENDAR_ID, // Impersonate this Workspace user via domain-wide delegation
  });

  return google.calendar({ version: 'v3', auth });
}

export interface MeetingDetails {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h format, IST)
  duration?: number; // minutes, default 30
}

export interface MeetingResult {
  meetLink: string;
  eventId: string;
  startTime: string;
  endTime: string;
}

export async function createMeetingEvent(
  details: MeetingDetails
): Promise<MeetingResult> {
  const calendar = getCalendarClient();
  const calendarId = 'primary';

  const durationMinutes = details.duration || 30;

  // Build IST datetime strings and convert to ISO with offset
  const startDatetime = `${details.date}T${details.time}:00+05:30`;
  const startDate = new Date(startDatetime);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const adminEmail = process.env.ADMIN_EMAIL || calendarId;

  const event = {
    summary: `IgniteX Consultation — ${details.name}`,
    description: [
      `📋 Meeting with: ${details.name}`,
      `📧 Email: ${details.email}`,
      `📞 Phone: ${details.phone}`,
      `🎯 Service Interest: ${details.service}`,
      `💬 Message: ${details.message || 'No additional message'}`,
      '',
      'This meeting was booked via ignitexsolution.com',
    ].join('\n'),
    start: {
      dateTime: startDate.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: 'Asia/Kolkata',
    },
    attendees: [
      { email: details.email, displayName: details.name },
      { email: adminEmail, displayName: 'IgniteX Team' },
    ],
    conferenceData: {
      createRequest: {
        requestId: `ignitex-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 60 },
        { method: 'popup', minutes: 15 },
      ],
    },
  };

  let response;
  try {
    response = await calendar.events.insert({
      calendarId,
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all',
    });
  } catch (err: unknown) {
    // Log detailed Google API error
    const gaxiosError = err as {
      code?: number;
      message?: string;
      response?: { data?: { error?: { message?: string; errors?: unknown[] } } };
    };
    console.error('Google Calendar API Error Details:', {
      code: gaxiosError.code,
      message: gaxiosError.message,
      calendarId,
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      apiErrorMessage: gaxiosError.response?.data?.error?.message,
      apiErrors: gaxiosError.response?.data?.error?.errors,
    });
    throw err;
  }

  const meetLink =
    response.data.conferenceData?.entryPoints?.find(
      (ep) => ep.entryPointType === 'video'
    )?.uri || '';

  if (!meetLink) {
    throw new Error('Failed to generate Google Meet link');
  }

  return {
    meetLink,
    eventId: response.data.id || '',
    startTime: startDate.toISOString(),
    endTime: endDate.toISOString(),
  };
}

/**
 * Fetch busy slots for a given date range to prevent double-booking.
 * Returns an array of { start, end } ISO strings.
 */
export async function getBusySlots(
  dateMin: string,
  dateMax: string
): Promise<Array<{ start: string; end: string }>> {
  const calendar = getCalendarClient();
  const calendarId = 'primary';

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: dateMin,
      timeMax: dateMax,
      timeZone: 'Asia/Kolkata',
      items: [{ id: calendarId }],
    },
  });

  const busy = response.data.calendars?.[calendarId]?.busy || [];
  return busy.map((slot) => ({
    start: slot.start || '',
    end: slot.end || '',
  }));
}
