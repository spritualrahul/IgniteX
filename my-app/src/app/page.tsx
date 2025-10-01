import { Metadata } from 'next';
import ClientPage from './client-page';
import { ReviewSchema, AggregateRatingSchema } from '@/components/JsonLd';

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
    <>
      <ReviewSchema 
        reviews={[
          {
            author: 'Layak Singh',
            datePublished: '2024-09-15',
            reviewBody: 'IgniteX transformed our digital infrastructure with their cutting-edge AI solutions. Their team delivered exceptional results that exceeded our expectations.',
            ratingValue: 5
          },
          {
            author: 'Rahul Sharma',
            datePublished: '2024-08-22',
            reviewBody: 'The platform built by IgniteX has been instrumental in scaling our fitness business. Their attention to detail and technical expertise is unmatched.',
            ratingValue: 5
          },
          {
            author: 'Priya Patel',
            datePublished: '2024-07-10',
            reviewBody: 'Working with IgniteX was a game-changer for our digital marketing strategy. Their innovative approach delivered outstanding results.',
            ratingValue: 5
          },
          {
            author: 'Amit Verma',
            datePublished: '2024-06-05',
            reviewBody: 'The team at IgniteX built us a robust fintech solution that handles thousands of transactions daily with zero downtime.',
            ratingValue: 5
          }
        ]} 
      />
      <AggregateRatingSchema 
        ratingValue={5}
        reviewCount={4}
      />
      <main className="min-h-screen bg-white relative overflow-hidden">
        <ClientPage />
      </main>
    </>
  );
}