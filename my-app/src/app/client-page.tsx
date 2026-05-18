'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components — these hydrate below the SSR content
const DeviceShowcase = dynamic(
  () => import('@/components/DeviceShowcase'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

const InteractiveDemo = dynamic(
  () => import('@/components/InteractiveDemo'),
  { ssr: false, loading: () => <Skeleton className="w-full h-[500px]" /> }
);

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

/**
 * ClientHomeSections — Interactive, JS-powered sections that load
 * BELOW the server-rendered hero + services overview.
 *
 * The critical above-the-fold content (H1, hero text, CTA, services overview)
 * is rendered server-side in page.tsx for Googlebot visibility.
 *
 * This component adds:
 * - Navbar (client-side for scroll/menu interactivity)
 * - CyclingHeadline overlay (animated text that replaces static SSR text)
 * - Interactive demos, portfolio, testimonials, statistics, contact form
 */
export default function ClientHomeSections() {
  return (
    <div className="relative z-10 bg-transparent">
      {/* Client-side Navbar mounts on top for interactivity */}
      <Navbar />

      {/* Animated headline overlay — this replaces the static SSR h1 visually via JS */}
      <section className="relative -mt-[calc(100vh-8rem)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left pointer-events-auto">
              <CyclingHeadline
                constant="Igniting"
                contexts={["Your Digital Presence.", "Your Brand Online.", "Your Business Growth."]}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                fontFamily="'Oswald', Poppins, sans-serif"
              />
            </div>
            <DeviceShowcase />
          </div>
        </div>
      </section>

      {/* Rich interactive sections */}
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <InteractiveDemo />
      <StatisticsSection />
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>
      <PartnersSection />
    </div>
  );
}
