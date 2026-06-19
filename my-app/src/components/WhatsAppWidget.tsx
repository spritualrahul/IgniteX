'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/918935860306?text=Hi%20IgniteX%20Solutions!%20I'd%20love%20to%20connect%20and%20know%20more%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse/ripple effect — composited for performance */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-none"
        style={{
          animation: 'whatsapp-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          willChange: 'transform, opacity',
        }}
      />
      
      <FaWhatsapp className="relative z-10 text-3xl" />
      
      {/* Tooltip on hover */}
      <span className="absolute left-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-gray-800">
        Chat with us
      </span>
    </a>
  );
}
