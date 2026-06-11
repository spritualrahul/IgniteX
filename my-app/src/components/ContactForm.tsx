'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa';
import { MessageSquare, Video } from 'lucide-react';
import countries from './countries.json';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const LottieAnimation = dynamic(() => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact), {
  ssr: false,
  loading: () => <div className="w-full h-40 sm:h-64 bg-gray-100 rounded-lg" />,
});

const MeetingBooking = dynamic(() => import('./MeetingBooking'), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-50 rounded-lg animate-pulse" />,
});

interface Country {
  name: string;
  code: string;
  flag: string;
}

const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'message' | 'meeting'>('message');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  // Auto-switch to meeting tab if ?tab=meeting is in URL
  useEffect(() => {
    if (searchParams.get('tab') === 'meeting') {
      setActiveTab('meeting');
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.name === e.target.value);
    if (country) setSelectedCountry(country);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: `${selectedCountry.code} ${form.phone}`,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(() => {
        alert("Your enquiry has been sent successfully!");
        setForm({ name: '', phone: '', email: '', subject: '', message: '' });
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("EmailJS Error:", error.message);
          alert(`Oops! Something went wrong: ${error.message}`);
        } else {
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
        setLoading(false);
      });
  };

  return (
    <div className="w-full flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Left: Form / Booking */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-white">
          {/* Tab Toggle */}
          <div className="flex rounded-xl bg-gray-100 p-1 mb-6 sm:mb-8">
            <button
              onClick={() => setActiveTab('message')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'message'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Send a Message</span>
              <span className="sm:hidden">Message</span>
            </button>
            <button
              onClick={() => setActiveTab('meeting')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'meeting'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Video className="w-4 h-4" />
              <span className="hidden sm:inline">Schedule a Meeting</span>
              <span className="sm:hidden">Meeting</span>
            </button>
          </div>

          {activeTab === 'message' ? (
            /* ── Message Form ── */
            <>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6 text-center md:text-left">
                  Reach Out to Us
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full rounded px-4 py-3 bg-gray-50 text-gray-900"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full rounded px-4 py-3 bg-gray-50 text-gray-900"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full rounded px-4 py-3 bg-gray-50 text-gray-900"
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={selectedCountry.name}
                    onChange={handleCountryChange}
                    className="sm:w-28 w-full rounded px-2 py-3 bg-gray-50 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {countries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded px-4 py-3 bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Phone number"
                  />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded px-4 py-3 bg-gray-50 text-gray-900"
                  placeholder="Type your message here..."
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors duration-200"
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </>
          ) : (
            /* ── Meeting Booking ── */
            <>
              <div className="mb-6">
                <h2 className="text-2xl sm:text-4xl font-bold text-red-600 mb-2 text-center md:text-left">
                  Book a Free Consultation
                </h2>
                <p className="text-sm text-gray-500 text-center md:text-left">
                  Schedule a Google Meet call with our team — no obligation, no pressure.
                </p>
              </div>
              <MeetingBooking />
            </>
          )}
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">Reach Out</h3>
              <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-950">
  <MdCall className="text-blue-600 text-xl sm:text-2xl shrink-0" />
  <a 
    href="tel:+918935860306" 
    className="break-words hover:underline"
  >
    +91 8935860306
  </a>
</div>
              <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-950 mt-3">
  <FaWhatsapp className="text-[#25D366] text-xl sm:text-2xl shrink-0" />
  <a 
    href="https://wa.me/918935860306?text=Hi%20IgniteX%20Solutions!%20I'd%20love%20to%20connect%20and%20know%20more%20about%20your%20services." 
    target="_blank"
    rel="noopener noreferrer"
    className="break-words hover:underline hover:text-[#25D366] transition-colors"
  >
    Chat on WhatsApp
  </a>
</div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-900 mt-3">
  <MdEmail className="text-red-600 text-xl sm:text-2xl shrink-0" />
  <a 
    href="mailto:contact@ignitexsolution.com" 
    className="break-words hover:underline"
  >
    contact@ignitexsolution.com
  </a>
</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-600 mb-3">Office Locations - India</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-950">
                    <MdLocationOn className="text-blue-600 text-xl sm:text-2xl shrink-0" />
                    <span>Jamshedpur, Jharkhand</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 ml-8">Bistupur, Jamshedpur - 831005</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-950">
                    <MdLocationOn className="text-blue-600 text-xl sm:text-2xl shrink-0" />
                    <span>Noida, Uttar Pradesh</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 ml-8">Aims green avenue, C-1705 - 201318</p>
                </div>
              </div>
            </div>
          </div>
          {/* Animation (small on mobile, expands on bigger screens) */}
          <div className="mt-6 sm:mt-8 h-40 sm:h-64 md:h-80 lg:h-full">
            <LottieAnimation
              src="9ecEztTJS9.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
