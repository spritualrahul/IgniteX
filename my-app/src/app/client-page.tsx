'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

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

const Footer = dynamic(
  () => import('@/components/Footer'),
  { ssr: false }
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative z-10 bg-transparent">
      <Navbar />
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="sr-only">IgniteX - Web Development & Digital Marketing Agency</h1>
              <h1 className="sr-only">IgniteX - Web Development & Digital Marketing Agency</h1>
              <CyclingHeadline
                constant="Igniting"
                contexts={["Your Digital Presence.", "Your Brand Online.", "Your Business Growth."]}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
                fontFamily="'Oswald', Poppins, sans-serif"
              />
              <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-poppins font-medium leading-relaxed tracking-tight">
                We craft exceptional digital experiences that drive growth and engagement for your business. From SEO to app development, we&apos;ve got you covered.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded shadow-lg text-lg"
                  >
                    Connect with us
                  </Button>
                </Link>
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
      <ContactForm />
      <PartnersSection />
      <Footer />
    </div>
  );
}
