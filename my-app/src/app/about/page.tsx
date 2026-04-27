import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us | IgniteX - Leading Digital Agency in Jamshedpur',
  description: 'Learn about IgniteX, a premier digital agency in Jamshedpur. We specialize in web development, digital marketing, and creative solutions. 50+ projects delivered, 80% average ROI for clients.',
  keywords: [
    'about IgniteX',
    'digital agency Jamshedpur',
    'web development company',
    'digital marketing agency',
    'creative solutions Jamshedpur',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/about',
  },
  openGraph: {
    title: 'About IgniteX | Premium Digital Agency in Jamshedpur',
    description: 'Discover how IgniteX transforms businesses with cutting-edge web development and digital marketing solutions. 50+ projects, 98% client satisfaction.',
    url: 'https://www.ignitexsolution.com/about',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About IgniteX - Premium Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About IgniteX | Premium Digital Agency',
    description: 'Discover how IgniteX transforms businesses with premium web development and digital marketing.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <Skeleton className="w-full h-[800px]" />
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'About', url: 'https://www.ignitexsolution.com/about' },
        ]}
      />
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24">
          <AboutSection />
        </div>
      </main>
    </>
  );
}
