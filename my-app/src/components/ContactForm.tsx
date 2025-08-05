'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { FaFlag } from 'react-icons/fa';

const countries = [
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  // Add more countries as needed
];

export const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find(c => c.name === e.target.value);
    if (country) setSelectedCountry(country);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here
    alert('Form submitted!');
    onClose();
  };

  return (
    <div className="relative w-full flex items-center justify-center overflow-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-full md:max-w-7xl p-0 flex flex-wrap min-w-0 overflow-hidden">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 min-w-0">

          <div className="mb-8">
  <h2 className="text-4xl font-bold text-red-700 mb-6">Get in touch with us</h2>
</div>
<form onSubmit={handleSubmit} className="space-y-5">
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-1"></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder='Full Name'
                className="w-full max-w-md rounded px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-1"></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder='Email'
                className="w-full max-w-md rounded px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-1"></label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder='Subject'
                required
                className="w-full max-w-md rounded px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="mb-2">
              <label  className="block text-gray-700 font-semibold mb-1"></label>
              <div className="flex gap-2">
                <select
                  value={selectedCountry.name}
                  onChange={handleCountryChange}
                  
                  className="w-20 rounded-l px-1 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                >
                  {countries.map(country => (
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
                  className="w-92 rounded-r px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full max-w-md rounded px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                placeholder="Type your message here..."
              />
            </div>
            <Button
              type="submit"
              className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors duration-200"
            >
              Submit
            </Button>
          </form>
        </div>
        {/* Right: Contact Info */}
        <div className="hidden md:flex flex-col justify-center items-start bg-white w-1/2 p-8 min-w-0">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-red-700 mb-2">Contact Sales</h3>
            <div className="text-lg font-semibold text-gray-800">8969156933</div>
            <div className="text-base text-gray-700 mt-2">rahulkrmahato027@gmail.com</div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-red-600 mb-1">Office Locations - India</h4>
            <div className="text-base text-gray-800">Jamshedpur - 831005</div>
            <div className="text-base text-gray-800">Bistupur</div>
          </div>
        </div>
      </div>
    </div>
  );
};
