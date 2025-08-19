'use client';

import { Navbar } from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <ServicesSection showAll={true} />
      </div>
    </main>
  );
}
