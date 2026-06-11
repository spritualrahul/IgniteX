import type { Metadata } from 'next';
import { Inter, Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import ChatBot from '@/components/ChatBotWrapper';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { GTMProvider, GTMNoScript } from '@/components/GTMProvider';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from '@/components/JsonLd';

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
    default: 'IgniteX — Top Web Development & Digital Marketing Agency in Jamshedpur',
    template: '%s | IgniteX — Web Development & Digital Marketing Agency, Jamshedpur',
  },
  description: 'IgniteX is a premium digital agency in Jamshedpur offering custom web development, e-commerce solutions, SEO, and digital marketing services. 50+ projects delivered. 98% client satisfaction. 80% average ROI boost.',
  keywords: [
    // Core Services - Location
    'website development agency Jamshedpur',
    'web design company Jamshedpur',
    'best website developers in Jamshedpur',
    'website development services Jamshedpur',
    'full stack development Jamshedpur',
    'e-commerce website development Jamshedpur',
    'custom website design Jamshedpur',
    // Digital Marketing & SEO
    'digital marketing agency Jamshedpur',
    'SEO services in Jamshedpur',
    'best SEO company Jamshedpur',
    'performance marketing agency Jamshedpur',
    'social media marketing Jamshedpur',
    'PPC services Jamshedpur',
    // Creative & Design
    'UI/UX design services Jamshedpur',
    'branding agency in Jamshedpur',
    // Wider Reach
    'best website development agency in India',
    'affordable website design services',
    'professional web development company',
    'top digital marketing agency India',
    'IgniteX',
  ],
  authors: [{ name: 'IgniteX Team' }],
  creator: 'IgniteX',
  publisher: 'IgniteX',
  metadataBase: new URL('https://www.ignitexsolution.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IgniteX - Premium Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with premium web development, SEO, and digital marketing. 50+ projects, 98% client satisfaction, 80% average ROI.',
    url: 'https://www.ignitexsolution.com',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX - Premium Digital Agency | Beyond Deadline Before Time',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IgniteX - Premium Digital Agency',
    description: 'Transform your digital presence with premium web development, SEO, and growth marketing.',
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
    google: 'google5396855dfc341632',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GTMProvider />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Structured Data - JSON-LD */}
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen`}>
        <GTMNoScript />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <WhatsAppWidget />
        <SpeedInsights />
      </body>
    </html>
  );
}
