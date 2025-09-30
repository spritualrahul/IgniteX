import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'About Us | IgniteX - Leading Digital Agency in Jamshedpur',
  description: 'Learn about IgniteX, a premier digital agency in Jamshedpur. We specialize in web development, digital marketing, and creative solutions. 50+ websites launched, 80% average ROI for clients.',
  keywords: 'about IgniteX, digital agency Jamshedpur, web development company, digital marketing agency, creative solutions',
  alternates: {
    canonical: 'https://www.ignitexsolution.com/about',
  },
  openGraph: {
    title: 'About IgniteX | Digital Innovation & Technology Solutions',
    description: 'Discover how IgniteX transforms businesses with cutting-edge web development and digital marketing solutions.',
    url: 'https://www.ignitexsolution.com/about',
    siteName: 'IgniteX',
    type: 'website',
  },
};

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <Skeleton className="w-full h-[800px]" />
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
    </main>
  );
}
