import { Navbar } from '@/components/Navbar';
import SEO from '@/components/SEO';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbListSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Website Development Services | IgniteX - Custom Web Design & Development',
  description: 'Professional website development services to create fast, modern, and high-converting websites that drive business growth. Custom designs, lightning-fast performance, mobile-first UX, and technical SEO optimization.',
  keywords: [
    'website development services',
    'custom web design',
    'web development company',
    'responsive website design',
    'e-commerce website development',
    'CMS integration',
    'mobile-first web design',
    'website performance optimization',
    'technical SEO',
    'custom website development',
    'professional web development',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/website-development',
  },
  openGraph: {
    title: 'Website Development Services | IgniteX',
    description: 'Professional website development services for modern, high-converting websites. Custom designs, lightning-fast performance, and technical SEO optimization.',
    url: 'https://www.ignitexsolution.com/services/website-development',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX Website Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | IgniteX',
    description: 'Professional website development services for modern, high-converting websites.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};


export default function WebsiteDevelopmentPage() {
  const features = [
    'Custom designs and components (no bloated templates)',
    'Lightning-fast performance and Core Web Vitals optimization',
    'Mobile-first UX and accessibility (WCAG-friendly)',
    'Clear copy and messaging that speaks to your customers',
    'Easy-to-use CMS for content updates',
    'Technical SEO setup and optimization'
  ];

  const processSteps = [
    'Discover: 45-60 min kickoff to align on goals',
    'Blueprint: Site map and content planning',
    'Design: Visual design and UI components',
    'Build: Development and integrations',
    'Launch: Testing and deployment',
    'Optimize: Continuous improvement'
  ];

  return (
    <>
      <BreadcrumbListSchema 
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'Website Development', url: 'https://www.ignitexsolution.com/services/website-development' }
        ]} 
      />
      <ServiceSchema 
        name="Website Development Services"
        description="Professional website development services to create fast, modern, and high-converting websites that drive business growth. Custom designs, lightning-fast performance, mobile-first UX, and technical SEO optimization."
        url="https://www.ignitexsolution.com/services/website-development"
      />
      <SEO 
        title="Website Development Services | IgniteX"
        description="Professional website development services for modern, high-converting websites."
        type="website"
      />
      
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Website <span className="text-red-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Make your website your best salesperson. We design and build fast, modern, mobile‑first websites that convert visitors into customers.
            </p>
            <Link 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You <span className="text-red-600">Get</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Process</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s create a website that truly represents your brand and drives results.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
