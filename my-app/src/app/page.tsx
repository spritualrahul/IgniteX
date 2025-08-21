'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { CyclingHeadline } from '@/components/CyclingHeadline';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
const PartnersSection = dynamic(() => import('@/components/PartnersSection'), {
  loading: () => <Skeleton className="w-full h-[300px]" />
});

const DeviceShowcase = dynamic(() => import('@/components/DeviceShowcase'), {
  ssr: false
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <Skeleton className="w-full h-[500px]" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <Skeleton className="w-full h-[400px]" />
});

const InteractiveDemo = dynamic(() => import('@/components/InteractiveDemo'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[500px]" />
});

const StatisticsSection = dynamic(() => import('@/components/StatisticsSection'), {
  loading: () => <Skeleton className="w-full h-[300px]" />
});
const WorkSection = dynamic(() => import('@/components/WorkSection'), {
  loading: () => <Skeleton className="w-full h-[500px]" />
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <Skeleton className="w-full h-[600px]" />
});



// import BackgroundAnimation from '@/components/BackgroundAnimation';

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* <BackgroundAnimation /> */}
      
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
                We craft exceptional digital experiences that drive growth and engagement for your business. From SEO to app development, we&apos;ve got you covered.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded shadow-lg text-lg"
                  >
                    Connect with us
                  </Button>
                </a>
              </div>

            </div>
            

            <div className="relative w-full h-full">
              <DeviceShowcase />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <InteractiveDemo />
      <WorkSection />
      <StatisticsSection />
      <TestimonialsSection />

      <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss how we can help your business? Drop us a message and we&apos;ll get back to you soon.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      <PartnersSection />

      <footer className="w-full bg-gray-800 py-4">
        <div className="text-center text-gray-300 text-sm opacity-70">
          All rights reserved 2025 ignitex solutions limited
        </div>
      </footer>
      </div>
    </main>
  );
}
