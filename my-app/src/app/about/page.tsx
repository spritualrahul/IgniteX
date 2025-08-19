'use client';

import { Navbar } from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
    </main>
  );
}
