import { Metadata } from 'next';

const title = 'IgniteX | Top Web Development & Digital Marketing Agency';
const description = 'IgniteX is a premier digital agency specializing in web development, SEO, digital marketing, graphic design, and video editing services. We help businesses grow their online presence with cutting-edge solutions.';
const siteUrl = 'https://www.ignitexsolution.com';

const keywords = [
  'web development company',
  'SEO services',
  'digital marketing agency',
  'website design',
  'e-commerce development',
  'social media marketing',
  'branding agency',
  'content creation',
  'search engine optimization',
  'web design company',
  'responsive web design',
  'UI/UX design',
  'web development services',
  'digital transformation',
  'mobile app development',
  'custom software development',
  'website maintenance',
  'local SEO services',
  'pay per click advertising',
  'conversion rate optimization',
  'email marketing services'
];

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  keywords,
  authors: [{ name: 'IgniteX Team' }],
  creator: 'IgniteX',
  publisher: 'IgniteX',
  applicationName: 'IgniteX',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
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
    title,
    description,
    creator: '@ignitex',
    images: ['/images/og-image.jpg'],
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
};

export default metadata;
