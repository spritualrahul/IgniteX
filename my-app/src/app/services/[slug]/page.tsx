import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SEO from '@/components/SEO';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Service data - in a real app, this would come from a CMS or API
const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    longDescription: `At IgniteX, we specialize in creating beautiful, functional, and high-performing websites and web applications. Our team of expert developers uses the latest technologies including Next.js, React, and Tailwind CSS to build responsive, fast, and SEO-friendly websites that drive results.

Our web development services include:
- Custom website development
- E-commerce solutions
- Web application development
- API integration
- Performance optimization
- Responsive design
- Website maintenance and support`,
    icon: '🌐',
    features: [
      'Custom Development',
      'Responsive Design',
      'Performance Optimization',
      'SEO Friendly',
      'Security First',
      'Ongoing Support'
    ]
  },
  // Add other services here with their respective slugs and details
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

  return {
    title: `${service.title} | IgniteX Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | IgniteX`,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SEO 
        title={`${service.title} | IgniteX`}
        description={service.description}
        type="article"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/services" 
              className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
                  
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Ready to get started?</h2>
                  <p className="text-gray-600 mb-6">
                    Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help bring your vision to life.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
