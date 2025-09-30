import { Navbar } from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import SEO from '@/components/SEO';

export const metadata = {
  title: 'Our Services - IgniteX',
  description: 'Explore our comprehensive range of digital services including web development, mobile apps, and digital transformation solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ignitexsolution.com/services',
    siteName: 'IgniteX',
  },
  twitter: {
    handle: '@ignitex',
    site: '@ignitex',
    cardType: 'summary_large_image',
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
