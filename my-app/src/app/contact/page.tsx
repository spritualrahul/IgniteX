import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Contact Us | IgniteX - Get in Touch for Digital Solutions',
  description: 'Contact IgniteX for web development, digital marketing, and creative solutions. Reach out to our team in Jamshedpur for a free consultation and transform your digital presence.',
  keywords: 'contact IgniteX, web development inquiry, digital marketing consultation, get a quote, Jamshedpur digital agency',
  alternates: {
    canonical: 'https://www.ignitexsolution.com/contact',
  },
  openGraph: {
    title: 'Contact IgniteX | Get Your Free Consultation',
    description: 'Ready to transform your digital presence? Contact our expert team today.',
    url: 'https://www.ignitexsolution.com/contact',
    siteName: 'IgniteX',
    type: 'website',
  },
};

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <Skeleton className="w-full h-[600px]" />
});

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
