import type { Metadata } from 'next';
import { Inter, Poppins, Montserrat } from 'next/font/google';
import './globals.css';

// Configure fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'IgniteX - Digital Innovation & Technology Solutions',
    template: '%s | IgniteX',
  },
  description: 'IgniteX transforms ideas into digital reality with cutting-edge technology, web development, and innovative solutions. Partner with us for your digital transformation.',
  keywords: ['digital innovation', 'web development', 'technology solutions', 'digital transformation', 'software development', 'IgniteX'],
  authors: [{ name: 'IgniteX Team' }],
  creator: 'IgniteX',
  publisher: 'IgniteX',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IgniteX - Digital Innovation & Technology Solutions',
    description: 'Transforming ideas into digital reality with cutting-edge technology and innovative solutions.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX - Digital Innovation Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IgniteX - Digital Innovation & Technology Solutions',
    description: 'Transforming ideas into digital reality with cutting-edge technology and innovative solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
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
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
