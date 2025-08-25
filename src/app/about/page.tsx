'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <Skeleton className="w-full h-[800px]" />
});

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
