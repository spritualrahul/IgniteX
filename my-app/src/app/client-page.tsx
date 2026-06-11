'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Lazy load heavy components with client-side only rendering
const DeviceShowcase = dynamic(
  () => import('@/components/DeviceShowcase'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const InteractiveDemo = dynamic(
  () => import('@/components/InteractiveDemo'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

// Other components with regular dynamic imports
const PartnersSection = dynamic(
  () => import('@/components/PartnersSection'),
  { loading: () => <Skeleton className="w-full h-[300px]" /> }
);

const ServicesSection = dynamic(
  () => import('@/components/ServicesSection'),
  { loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { loading: () => <Skeleton className="w-full h-[400px]" /> }
);

const StatisticsSection = dynamic(
  () => import('@/components/StatisticsSection'),
  { loading: () => <Skeleton className="w-full h-[300px]" /> }
);

const WorkSection = dynamic(
  () => import('@/components/WorkSection'),
  { loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const ContactForm = dynamic(
  () => import('@/components/ContactForm'),
  { loading: () => <Skeleton className="w-full h-[600px]" /> }
);

export default function ClientPage() {
  return (
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <CyclingHeadline
                constant="Igniting"
                contexts={["Your Digital Presence.", "Your Brand Online.", "Your Business Growth."]}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                fontFamily="'Oswald', Poppins, sans-serif"
              />
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-poppins font-medium leading-relaxed tracking-tight">
                Transform your digital presence with results that truly matter. From beautifully crafted websites to intelligent, AI-driven solutions, we bring your ideas to life with care, precision, and purpose one detail at a time.
              </p>
              <div className="mt-6 flex flex-col gap-4 items-center lg:items-start max-w-xl mx-auto lg:mx-0">
                <Link href="/contact" className="w-full">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded shadow-lg text-lg w-full"
                  >
                    Connect with us
                  </Button>
                </Link>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Link href="/contact?tab=meeting" className="w-full sm:w-1/2">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold px-4 py-3 rounded shadow-sm text-sm lg:text-base flex items-center justify-center w-full h-full"
                    >
                      <Calendar className="w-4 h-4 mr-2 shrink-0" />
                      Book a Free Consultation
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/918935860306?text=Hi%20IgniteX%20Solutions!%20I'd%20love%20to%20connect%20and%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2"
                  >
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-4 py-3 rounded shadow-lg text-sm lg:text-base flex items-center justify-center border-none w-full h-full"
                    >
                      <FaWhatsapp className="w-4 h-4 mr-2 shrink-0" />
                      Connect on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <DeviceShowcase />
          </div>
        </div>
      </section>

      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <InteractiveDemo />
      <StatisticsSection />
      <section id="contact" className="scroll-mt-20">
        <Suspense fallback={<Skeleton className="w-full h-[600px]" />}>
          <ContactForm />
        </Suspense>
      </section>
      <PartnersSection />
    </div>
  );
}
