import { Metadata } from 'next';
import ClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Home | IgniteX - Web Development & Digital Marketing Agency',
  description: 'Transform your digital presence with our expert web development, SEO, and digital marketing services. Grow your business online with IgniteX.',
  keywords: 'web development, SEO services, digital marketing, graphic design, video editing, website design, e-commerce development',
  alternates: {
    canonical: 'https://www.ignitexsolution.com',
  },
  openGraph: {
    title: 'IgniteX - Top Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with our expert web development, SEO, and digital marketing services. Grow your business online with IgniteX.',
    url: 'https://www.ignitexsolution.com',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX - Beyond deadline before time',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IgniteX - Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with our expert web development, SEO, and digital marketing services.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
  other: {
    'google-site-verification': 'google5396855dfc341632.html'
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <ClientPage />
    </main>
  );
}