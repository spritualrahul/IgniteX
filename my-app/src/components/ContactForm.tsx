'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import countries from './countries.json';
import dynamic from 'next/dynamic';

const LottieAnimation = dynamic(() => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-100 rounded-lg" />
});

interface Country {
  name: string;
  code: string;
  flag: string;
}

const ContactForm: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

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
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-white">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6 text-center md:text-left">
              Get in touch with us
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
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">Contact Sales</h3>
              <div className="flex items-center gap-3 text-base sm:text-lg font-semibold text-gray-950">
                <MdCall className="text-green-600 text-xl sm:text-2xl shrink-0" />
                <span className="break-words">+91 8969156933</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-900 mt-3">
                <MdEmail className="text-red-600 text-xl sm:text-2xl shrink-0" />
                <span className="break-words">rahulkrmahato027@gmail.com</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-600 mb-2">Office Locations - India</h4>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-950">
                <MdLocationOn className="text-blue-600 text-xl sm:text-2xl shrink-0" />
                <span className="break-words">Jamshedpur - 831005</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-950 mt-2">
                <MdLocationOn className="text-blue-600 text-xl sm:text-2xl shrink-0" />
                <span className="break-words">Bistupur</span>
              </div>
            </div>
          </div>
          <div className="mt-8 h-64 md:h-auto md:flex-1">
            <LottieAnimation
              src="/9ecEztTJS9.lottie"
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
