import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IgniteX | Top Web Development & Digital Marketing Agency',
  description: 'IgniteX is a premier digital agency specializing in web development, SEO, digital marketing, graphic design, and video editing services. We help businesses grow their online presence with cutting-edge solutions.',
  keywords: [
    'web development',
    'SEO services',
    'digital marketing',
    'graphic design',
    'video editing',
    'website design',
    'e-commerce development',
    'social media marketing',
    'branding agency',
    'content creation',
    'search engine optimization',
    'web design company',
    'digital agency',
    'responsive web design',
    'UI/UX design'
  ],
  authors: [{ name: 'IgniteX Team' }],
  creator: 'IgniteX',
  publisher: 'IgniteX',

   icons: {
    icon: '/logo.png',       
    shortcut: '/logo.png',   
    apple: '/logo.png',      
  },

  openGraph: {
    title: 'IgniteX | Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with our expert web development, SEO, and digital marketing services. Grow your business online with IgniteX.',
    url: 'https://ignitex.com',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX - Digital Transformation Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IgniteX | Web Development & Digital Marketing Agency',
    description: 'Expert web development, SEO, and digital marketing services to grow your business online.',
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://ignitex.com',
  },
};

export default metadata;
