import { Navbar } from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import SEO from '@/components/SEO';

export const metadata = {
  title: 'Our Services | IgniteX - Web Development, Digital Marketing & Creative Solutions',
  description: 'Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, SEO, UI/UX design, and digital transformation solutions. 50+ websites launched, 80% average ROI.',
  keywords: [
    'web development services',
    'mobile app development',
    'digital marketing services',
    'SEO services',
    'UI/UX design',
    'e-commerce solutions',
    'digital transformation',
    'cloud solutions',
    'graphic design services',
    'branding services',
    'IgniteX services',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services',
  },
  openGraph: {
    title: 'Our Services | IgniteX - Complete Digital Solutions',
    description: 'Professional web development, mobile apps, digital marketing, and creative solutions. 50+ websites launched with 80% average ROI for clients.',
    url: 'https://www.ignitexsolution.com/services',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX Services - Web Development & Digital Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | IgniteX',
    description: 'Professional web development, mobile apps, and digital transformation services.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
    site: '@ignitex',
  },
};

export default function ServicesPage() {
  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Transformation',
    'Cloud Solutions',
    'E-commerce Solutions'
  ];

  return (
    <>
      <SEO 
        title="Our Services | IgniteX"
        description="Professional web development, mobile apps, and digital transformation services. Let's build something amazing together."
        type="website"
        tags={services}
      />
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24">
          <ServicesSection showAll={true} />
        </div>
      </main>
    </>
  );
}
