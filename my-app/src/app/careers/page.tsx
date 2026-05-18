import { Metadata } from 'next';
import { BreadcrumbListSchema } from '@/components/JsonLd';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers — Join Our Growing Team',
  description: 'Explore exciting career opportunities at IgniteX. We are hiring Full Stack Interns, Frontend Next.js Interns, Backend FastAPI Python Interns, and Sales professionals. Apply now!',
  keywords: [
    'IgniteX careers',
    'internship Jamshedpur',
    'full stack intern',
    'frontend developer intern',
    'backend developer intern',
    'sales job Jamshedpur',
    'tech internship India',
    'Next.js internship',
    'FastAPI Python internship',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/careers',
  },
  openGraph: {
    title: 'Careers at IgniteX | Join Our Growing Team',
    description: 'We are hiring! Explore internship and full-time opportunities at IgniteX — a leading digital agency in Jamshedpur.',
    url: 'https://www.ignitexsolution.com/careers',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers at IgniteX - Join Our Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at IgniteX | Join Our Team',
    description: 'We are hiring interns and full-time professionals. Apply now at IgniteX!',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Careers', url: 'https://www.ignitexsolution.com/careers' },
        ]}
      />
      <CareersClient />
    </>
  );
}
