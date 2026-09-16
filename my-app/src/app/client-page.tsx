'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ServicesSection from '@/components/ServicesSection';
import { HomeMotion } from '@/components/HomeMotion';
import { DeferredSection } from '@/components/DeferredSection';

// Lazy load heavy components with client-side only rendering
const DeviceShowcase = dynamic(
  () => import('@/components/DeviceShowcase'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

// Below-fold components — dynamic import is fine
const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[400px]" /> }
);

const InteractiveDemo = dynamic(
  () => import('@/components/InteractiveDemo'),
  { loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const StatisticsSection = dynamic(
  () => import('@/components/StatisticsSection'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[300px]" /> }
);

const ContactForm = dynamic(
  () => import('@/components/ContactForm'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[600px]" /> }
);

const PartnersSection = dynamic(
  () => import('@/components/PartnersSection'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[300px]" /> }
);

const WorkSection = dynamic(
  () => import('@/components/WorkSection'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[720px]" /> }
);

export default function ClientPage() {
  return (
    <HomeMotion>
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <section id="home" data-gsap-section className="relative pt-20 sm:pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div data-gsap-parallax className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-500/[0.07] blur-3xl" />
        <div data-gsap-parallax className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-400/[0.07] blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div data-gsap-hero>
              <CyclingHeadline
                constant="Igniting"
                contexts={["Your Digital Presence.", "Your Brand Online.", "Your Business Growth."]}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                fontFamily="'Oswald', Poppins, sans-serif"
              />
              </div>
              <p data-gsap-hero className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-poppins font-medium leading-relaxed tracking-tight">
                Transform your digital presence with results that truly matter. From beautifully crafted websites to intelligent, AI-driven solutions, we bring your ideas to life with care, precision, and purpose one detail at a time.
              </p>
              <div data-gsap-hero className="mt-6 flex w-full max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap xl:flex-nowrap xl:w-max xl:max-w-none items-stretch justify-center lg:justify-start mx-auto lg:mx-0">
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full sm:w-[228px] justify-between gap-4 rounded-xl bg-red-600 px-5 text-sm font-bold text-white whitespace-nowrap shadow-[0_16px_32px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_20px_38px_rgba(220,38,38,0.34)]"
                >
                  <Link data-gsap-magnetic href="/contact">
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
                  <Link data-gsap-magnetic href="/contact?tab=meeting">
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
                    data-gsap-magnetic
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
            <div data-gsap-hero data-gsap-float><DeviceShowcase /></div>
          </div>
        </div>
      </section>

      <section data-gsap-home-signal className="relative border-y border-gray-200/80 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-3 text-center sm:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">Built around outcomes</p>
            <p className="mt-1 text-sm text-gray-500">Strategy, design, and engineering in one team.</p>
          </div>
          <div className="px-5 py-3 text-center sm:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">Made to scale</p>
            <p className="mt-1 text-sm text-gray-500">A clear foundation for your next stage of growth.</p>
          </div>
          <div className="px-5 py-3 text-center sm:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">Clear collaboration</p>
            <p className="mt-1 text-sm text-gray-500">A thoughtful process, from first brief to launch.</p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <DeferredSection minHeight={720} fallback={<Skeleton className="w-full h-[720px]" />}>
        <WorkSection />
      </DeferredSection>
      <DeferredSection minHeight={400} fallback={<Skeleton className="w-full h-[400px]" />}>
        <TestimonialsSection />
      </DeferredSection>
      {/* <InteractiveDemo /> */}
      <DeferredSection minHeight={300} fallback={<Skeleton className="w-full h-[300px]" />}>
        <StatisticsSection />
      </DeferredSection>
      <section id="contact" data-gsap-section className="scroll-mt-20">
        <DeferredSection minHeight={600} fallback={<Skeleton className="w-full h-[600px]" />}>
          <ContactForm />
        </DeferredSection>
      </section>
      <DeferredSection minHeight={300} fallback={<Skeleton className="w-full h-[300px]" />}>
        <PartnersSection />
      </DeferredSection>
    </div>
    </HomeMotion>
  );
}
