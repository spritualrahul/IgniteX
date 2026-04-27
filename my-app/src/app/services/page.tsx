import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Our Services | IgniteX - Web Development, Digital Marketing & Creative Solutions',
  description: 'Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, SEO, UI/UX design, and e-commerce solutions. 50+ projects delivered, 80% average ROI.',
  keywords: [
    'web development services',
    'mobile app development',
    'digital marketing services',
    'SEO services',
    'UI/UX design',
    'e-commerce solutions',
    'digital transformation',
    'graphic design services',
    'branding services',
    'IgniteX services',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services',
  },
  openGraph: {
    title: 'Our Services | IgniteX - Complete Digital Solutions',
    description: 'Professional web development, mobile apps, digital marketing, and creative solutions. 50+ projects launched with 80% average ROI for clients.',
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
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
        ]}
      />
      <ServiceSchema name="Web Development" description="Custom, high-performance websites and web applications built with cutting-edge technologies." url="https://www.ignitexsolution.com/services/web-development" />
      <ServiceSchema name="Digital Marketing" description="Data-driven digital marketing strategies including PPC, content marketing, and social media." url="https://www.ignitexsolution.com/services/digital-marketing" />
      <ServiceSchema name="SEO Services" description="Proven SEO strategies and technical optimization to dominate search rankings." url="https://www.ignitexsolution.com/services/seo" />
      <ServiceSchema name="E-commerce Solutions" description="End-to-end e-commerce solutions that drive sales and scale effortlessly." url="https://www.ignitexsolution.com/services" />
      <ServiceSchema name="UI/UX Design" description="Beautiful, intuitive interfaces designed with conversion optimization in mind." url="https://www.ignitexsolution.com/services" />
      <FAQSchema
        faqs={[
          { question: 'What services does IgniteX offer?', answer: 'IgniteX offers comprehensive digital services including web development, mobile app development, UI/UX design, digital transformation, cloud solutions, and e-commerce solutions.' },
          { question: 'How long does it take to develop a website?', answer: 'A standard business website typically takes 4-6 weeks, while complex e-commerce or custom web applications can take 8-12 weeks.' },
          { question: 'Do you provide ongoing support after project completion?', answer: 'Yes, we offer comprehensive post-launch support and maintenance packages including regular updates, security patches, and performance optimization.' },
          { question: 'What is your pricing model?', answer: 'Our pricing is project-based and depends on scope and complexity. We offer competitive rates and provide detailed quotes after understanding your needs.' },
          { question: 'Can you help with digital marketing and SEO?', answer: 'Absolutely! We provide comprehensive digital marketing services including SEO, content marketing, social media management, and performance marketing.' },
        ]}
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
