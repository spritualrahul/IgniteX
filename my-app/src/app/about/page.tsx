import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us — Leading Digital Agency in Jamshedpur',
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
  loading: () => <Skeleton className="w-full h-[800px]" />,
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
          {/* SSR-rendered H1 and intro text for Googlebot */}
          <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                About <span className="text-red-600">IgniteX</span>
              </h1>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                IgniteX was founded in 2025 by Rahul Kumar Mahato with the goal of providing outstanding digital solutions.
                Based in Jamshedpur, Jharkhand, our team is committed to delivering timely services that meet the highest
                standards of quality. Customer satisfaction is our top priority in everything we do.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in building custom web applications using modern technologies like React, Next.js, Node.js,
                and TypeScript. Our expertise spans full-stack development, search engine optimization, performance marketing,
                UI/UX design, and e-commerce solutions — all designed to help businesses grow their digital presence and revenue.
              </p>
            </div>
          </section>

          <AboutSection />
        </div>
      </main>
    </>
  );
}
