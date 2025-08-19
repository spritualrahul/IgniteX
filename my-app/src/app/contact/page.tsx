import React from 'react';
import { Navbar } from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex items-center justify-center py-12 px-2 flex-1">
          <div className="w-full max-w-7xl mt-10">
            
            <ContactForm />
          </div>
        </div>
        <footer className="w-full bg-gray-800 py-4 mt-12">
          <div className="text-center text-gray-300 text-sm opacity-70">
            All rights reserved © 2025 ignitex solutions limited
          </div>
        </footer>
      </div>
    </main>
  );
}
