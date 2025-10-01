import { Navbar } from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import SEO from '@/components/SEO';
import { BreadcrumbListSchema, FAQSchema } from '@/components/JsonLd';

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
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' }
        ]} 
      />
      <FAQSchema 
        faqs={[
          {
            question: 'What services does IgniteX offer?',
            answer: 'IgniteX offers comprehensive digital services including web development, mobile app development, UI/UX design, digital transformation, cloud solutions, and e-commerce solutions. We specialize in creating custom solutions tailored to your business needs.'
          },
          {
            question: 'How long does it take to develop a website?',
            answer: 'The timeline varies based on project complexity. A standard business website typically takes 4-6 weeks, while more complex e-commerce or custom web applications can take 8-12 weeks or more. We provide detailed timelines during our initial consultation.'
          },
          {
            question: 'Do you provide ongoing support after project completion?',
            answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance optimization, and technical support to ensure your digital solution continues to perform optimally.'
          },
          {
            question: 'What is your pricing model?',
            answer: 'Our pricing is project-based and depends on the scope, complexity, and specific requirements. We offer competitive rates and provide detailed quotes after understanding your needs. We also offer flexible payment plans for larger projects.'
          },
          {
            question: 'Can you help with digital marketing and SEO?',
            answer: 'Absolutely! We provide comprehensive digital marketing services including SEO optimization, content marketing, social media management, and performance marketing. Our technical SEO setup is included in all web development projects.'
          }
        ]} 
      />
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
