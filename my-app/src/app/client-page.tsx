'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';

// Lazy load heavy components with client-side only rendering
const DeviceShowcase = dynamic(
  () => import('@/components/DeviceShowcase'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

// Below-fold components — dynamic import is fine
const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { loading: () => <Skeleton className="w-full h-[400px]" /> }
);

const InteractiveDemo = dynamic(
  () => import('@/components/InteractiveDemo'),
  { loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const StatisticsSection = dynamic(
  () => import('@/components/StatisticsSection'),
  { loading: () => <Skeleton className="w-full h-[300px]" /> }
);

const ContactForm = dynamic(
  () => import('@/components/ContactForm'),
  { loading: () => <Skeleton className="w-full h-[600px]" /> }
);

const PartnersSection = dynamic(
  () => import('@/components/PartnersSection'),
  { loading: () => <Skeleton className="w-full h-[300px]" /> }
);

export default function ClientPage() {
  return (
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <section id="home" className="relative pt-20 sm:pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
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
              <div className="mt-6 flex w-full max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap xl:flex-nowrap xl:w-max xl:max-w-none items-stretch justify-center lg:justify-start mx-auto lg:mx-0">
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full sm:w-[228px] justify-between gap-4 rounded-xl bg-red-600 px-5 text-sm font-bold text-white whitespace-nowrap shadow-[0_16px_32px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_20px_38px_rgba(220,38,38,0.34)]"
                >
                  <Link href="/contact">
                    <span className="flex items-center gap-2.5">
                      <Calendar className="h-5 w-5 shrink-0" />
                      Connect with us
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 w-full sm:w-[270px] justify-between gap-4 rounded-xl border border-gray-300 bg-white px-5 text-sm font-bold text-gray-900 whitespace-nowrap shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-white hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
                >
                  <Link href="/contact?tab=meeting">
                    <span className="flex items-center gap-2.5">
                      <Calendar className="h-5 w-5 shrink-0 text-gray-700" />
                      Book a Free Consultation
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-gray-700" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full sm:w-[258px] justify-between gap-4 rounded-xl bg-[#25D366] px-5 text-sm font-bold text-white whitespace-nowrap shadow-[0_16px_32px_rgba(37,211,102,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1da851] hover:shadow-[0_20px_38px_rgba(37,211,102,0.32)]"
                >
                  <a
                    href="https://wa.me/918935860306?text=Hi%20IgniteX%20Solutions!%20I'd%20love%20to%20connect%20and%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2.5">
                      <FaWhatsapp className="h-5 w-5 shrink-0" />
                      Connect on WhatsApp
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </a>
                </Button>
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
