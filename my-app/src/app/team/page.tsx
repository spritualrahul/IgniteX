import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Meet Our Expert Team',
  description: 'Meet the talented team behind IgniteX. Our experts in web development, digital marketing, and creative design are dedicated to delivering exceptional results for your business.',
  keywords: [
    'IgniteX team',
    'web development experts',
    'digital marketing professionals',
    'creative team Jamshedpur',
    'technology experts',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/team',
  },
  openGraph: {
    title: 'Our Team | IgniteX - Meet Our Experts',
    description: 'Meet the talented professionals driving innovation at IgniteX. Experts in web development, digital marketing, and creative design.',
    url: 'https://www.ignitexsolution.com/team',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX Team - Digital Innovation Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | IgniteX',
    description: 'Meet the talented professionals driving innovation at IgniteX.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

export default function TeamPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Team', url: 'https://www.ignitexsolution.com/team' },
        ]}
      />
      <Navbar />
      <TeamSection />
    </>
  );
}
