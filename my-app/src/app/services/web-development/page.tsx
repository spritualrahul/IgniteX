import type { Metadata } from 'next';
import WebDevContent from './WebDevContent';

export const metadata: Metadata = {
  title: 'Website Development Services — Custom Web Design & Development',
  description: 'Professional website development services to create fast, modern, and high-converting websites that drive business growth. Custom designs, lightning-fast performance, mobile-first UX, and technical SEO optimization.',
  keywords: [
    'website development services',
    'custom web design',
    'web development company',
    'responsive website design',
    'e-commerce website development',
    'CMS integration',
    'mobile-first web design',
    'website performance optimization',
    'technical SEO',
    'custom website development',
    'professional web development',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/web-development',
  },
  openGraph: {
    title: 'Website Development Services | IgniteX',
    description: 'Professional website development services for modern, high-converting websites. Custom designs, lightning-fast performance, and technical SEO optimization.',
    url: 'https://www.ignitexsolution.com/services/web-development',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/projects/luxora_hero_mockup.png',
        width: 1200,
        height: 630,
        alt: 'IgniteX Website Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | IgniteX',
    description: 'Professional website development services for modern, high-converting websites.',
    images: ['/images/projects/luxora_hero_mockup.png'],
    creator: '@ignitex',
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebDevContent />;
}
