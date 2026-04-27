import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | IgniteX - Get in Touch for Digital Solutions',
  description: 'Contact IgniteX for web development, digital marketing, and creative solutions. Reach out to our team in Jamshedpur for a free consultation and transform your digital presence.',
  keywords: [
    'contact IgniteX',
    'web development inquiry',
    'digital marketing consultation',
    'get a quote',
    'Jamshedpur digital agency',
    'free consultation',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/contact',
  },
  openGraph: {
    title: 'Contact IgniteX | Get Your Free Consultation',
    description: 'Ready to transform your digital presence? Contact our expert team today for a free consultation.',
    url: 'https://www.ignitexsolution.com/contact',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact IgniteX - Get Your Free Consultation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact IgniteX | Free Consultation',
    description: 'Ready to transform your digital presence? Contact IgniteX for a free consultation.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <Skeleton className="w-full h-[600px]" />
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Contact', url: 'https://www.ignitexsolution.com/contact' },
        ]}
      />
      <main className="min-h-screen" style={{ backgroundColor: 'rgb(247, 247, 247)' }}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center justify-center py-12 px-2 flex-1">
            <div className="w-full max-w-7xl mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
