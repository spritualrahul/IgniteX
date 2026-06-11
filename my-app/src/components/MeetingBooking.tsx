'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  CheckCircle2,
  Video,
  Copy,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────
interface BookingForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface BookingResult {
  meetLink: string;
  date: string;
  time: string;
}

const SERVICES = [
  'Web Development',
  'Digital Marketing',
  'SEO Services',
  'UI/UX Design',
  'E-commerce Solutions',
  'Performance Marketing',
  'Brand Strategy',
  'General Consultation',
];

const STEP_LABELS = ['Select Date', 'Select Time', 'Your Details', 'Confirmed'];

// ── Calendar Helpers ───────────────────────────────────────────────────
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function formatDateForDisplay(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });
}

function dateToYMD(date: Date): string {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatTime12(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

// ── Component ──────────────────────────────────────────────────────────
const MeetingBooking: React.FC = () => {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [booking, setBooking] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[SERVICES.length - 1],
    message: '',
  });

  // Calendar navigation
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  // ── Fetch available slots when date is selected ──────────────────────
  const fetchSlots = useCallback(async (date: Date) => {
    setLoadingSlots(true);
    setAvailableSlots([]);
    setError(null);

    try {
      const ymd = dateToYMD(date);
      const res = await fetch(`/api/book-meeting?date=${ymd}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch available slots');
      }

      setAvailableSlots(data.availableSlots || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load time slots');
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate && step === 1) {
      fetchSlots(selectedDate);
    }
  }, [selectedDate, step, fetchSlots]);

  // ── Booking submission ───────────────────────────────────────────────
  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;

    setBooking(true);
    setError(null);

    try {
      const res = await fetch('/api/book-meeting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          date: dateToYMD(selectedDate),
          time: selectedTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to book meeting');
      }

      setBookingResult({
        meetLink: data.meetLink,
        date: data.date,
        time: data.time,
      });
      setStep(3);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book meeting');
    } finally {
      setBooking(false);
    }
  };

  const copyMeetLink = async () => {
    if (!bookingResult?.meetLink) return;
    await navigator.clipboard.writeText(bookingResult.meetLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Calendar Navigation ──────────────────────────────────────────────
  const goToPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const canGoPrev = viewYear > today.getFullYear() || viewMonth > today.getMonth();

  // ── Date selection logic ─────────────────────────────────────────────
  const isDateDisabled = (day: number): boolean => {
    const d = new Date(viewYear, viewMonth, day);
    // Past dates
    if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return true;
    // More than 30 days out
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 30);
    if (d > maxDate) return true;
    return false;
  };

  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) return;
    const d = new Date(viewYear, viewMonth, day);
    setSelectedDate(d);
    setSelectedTime(null);
    setStep(1);
  };

  // ── Render helpers ───────────────────────────────────────────────────
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const monthName = new Date(viewYear, viewMonth).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    const days: React.ReactNode[] = [];
    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 sm:h-12" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isDateDisabled(day);
      const d = new Date(viewYear, viewMonth, day);
      const isToday = isSameDay(d, today);
      const isSelected = selectedDate ? isSameDay(d, selectedDate) : false;

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          disabled={disabled}
          className={`
            h-10 sm:h-12 rounded-lg text-sm font-medium transition-all duration-200
            ${disabled
              ? 'text-gray-300 cursor-not-allowed'
              : 'cursor-pointer hover:bg-red-50 hover:text-red-600 active:scale-95 text-gray-700'
            }
            ${isSelected ? 'bg-red-600 text-white hover:bg-red-700 hover:text-white shadow-md' : ''}
            ${isToday && !isSelected ? 'ring-2 ring-red-300 text-red-600 font-bold' : ''}
          `}
        >
          {day}
        </button>
      );
    }

    return (
      <div>
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4 px-1">
          <button
            onClick={goToPrevMonth}
            disabled={!canGoPrev}
            className={`p-2 rounded-lg transition-colors ${
              canGoPrev
                ? 'hover:bg-gray-100 text-gray-700'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-semibold text-gray-900">{monthName}</h3>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div
              key={d}
              className={`text-center text-xs font-semibold py-2 ${
                d === 'Sun' ? 'text-red-400' : 'text-gray-500'
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  const renderTimeSlots = () => {
    if (loadingSlots) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-3" />
          <p className="text-gray-500 text-sm">Loading available slots...</p>
        </div>
      );
    }

    if (availableSlots.length === 0) {
      return (
        <div className="text-center py-12">
          <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No available slots for this date</p>
          <p className="text-gray-400 text-sm mt-1">Please try another date</p>
          <Button
            onClick={() => setStep(0)}
            variant="outline"
            className="mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Pick another date
          </Button>
        </div>
      );
    }

    // Group by morning / afternoon / evening
    const morning = availableSlots.filter((s) => parseInt(s) < 12);
    const afternoon = availableSlots.filter(
      (s) => parseInt(s) >= 12 && parseInt(s) < 17
    );
    const evening = availableSlots.filter((s) => parseInt(s) >= 17);

    const renderGroup = (label: string, slots: string[], emoji: string) => {
      if (slots.length === 0) return null;
      return (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {emoji} {label}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => {
                  setSelectedTime(slot);
                  setStep(2);
                }}
                className={`
                  px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    selectedTime === slot
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200 hover:border-red-200'
                  }
                `}
              >
                {formatTime12(slot)}
              </button>
            ))}
          </div>
        </div>
      );
    };

    return (
      <div>
        {renderGroup('Morning', morning, '🌅')}
        {renderGroup('Afternoon', afternoon, '☀️')}
        {renderGroup('Evening', evening, '🌆')}
      </div>
    );
  };

  // ── Step content ─────────────────────────────────────────────────────
  const stepContent = [
    // Step 0: Calendar
    <div key="step-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Pick a Date</h3>
          <p className="text-sm text-gray-500">Choose your preferred consultation date</p>
        </div>
      </div>
      {renderCalendar()}
      <p className="text-xs text-gray-400 mt-4 text-center">
        Mon–Sun • 10:00 AM – 10:00 PM IST • 30-min sessions
      </p>
    </div>,

    // Step 1: Time slots
    <div key="step-1">
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => setStep(0)}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <Clock className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Pick a Time</h3>
          <p className="text-sm text-gray-500">
            {selectedDate ? formatDateForDisplay(selectedDate) : ''}
          </p>
        </div>
      </div>
      <div className="mt-4">{renderTimeSlots()}</div>
    </div>,

    // Step 2: Form
    <div key="step-2">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setStep(1)}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
          <User className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Your Details</h3>
          <p className="text-sm text-gray-500">
            {selectedDate ? formatDateForDisplay(selectedDate) : ''} •{' '}
            {selectedTime ? formatTime12(selectedTime) : ''}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full Name *"
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email Address *"
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone Number"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Service */}
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all appearance-none"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your project (optional)"
            rows={3}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all resize-none"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <Button
          onClick={handleBooking}
          disabled={booking || !form.name || !form.email}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {booking ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Scheduling...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Confirm & Schedule Meeting
            </span>
          )}
        </Button>
      </div>
    </div>,

    // Step 3: Confirmation
    <div key="step-3" className="text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Scheduled! 🎉</h3>
      <p className="text-gray-500 text-sm mb-6">
        A confirmation has been sent to your email with the meeting details.
      </p>

      {bookingResult && (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 text-left mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-sm text-gray-700">{bookingResult.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-sm text-gray-700">{bookingResult.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <a
                href={bookingResult.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 hover:text-red-700 underline truncate"
              >
                {bookingResult.meetLink}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {bookingResult && (
          <>
            <a
              href={bookingResult.meetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg">
                <Video className="w-4 h-4 mr-2" />
                Open Google Meet
              </Button>
            </a>
            <Button
              onClick={copyMeetLink}
              variant="outline"
              className="flex-1 border-gray-300 py-3 rounded-lg"
            >
              {copied ? (
                <span className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" /> Copied!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Copy className="w-4 h-4" /> Copy Link
                </span>
              )}
            </Button>
          </>
        )}
      </div>
    </div>,
  ];

  return (
    <div className="w-full">
      {/* Progress Steps */}
      {step < 3 && (
        <div className="flex items-center justify-between mb-8 px-2">
          {STEP_LABELS.slice(0, 3).map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i <= step
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                <span
                  className={`text-xs mt-1 hidden sm:block ${
                    i <= step ? 'text-red-600 font-medium' : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div
                  className={`w-12 sm:w-20 h-0.5 mx-2 transition-all duration-300 ${
                    i < step ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {stepContent[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MeetingBooking;
