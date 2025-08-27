'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  slug: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    longDescription: 'At IgniteX, we create beautiful, functional, and high-performing websites and web applications. Our expert developers use Next.js, React, and Tailwind CSS to build responsive, fast, and SEO-friendly websites that drive real business results.',
    icon: '🌐',
    slug: 'web-development',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Responsive Design',
      'Performance Optimization',
      'SEO Implementation',
      'Ongoing Support'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence and drive targeted traffic.',
    longDescription: 'Our digital marketing services help businesses increase their online visibility, attract qualified leads, and convert them into loyal customers through strategic campaigns across multiple channels.',
    icon: '📈',
    slug: 'digital-marketing',
    features: [
      'SEO & Content Strategy',
      'PPC & Social Media Ads',
      'Email Marketing',
      'Conversion Optimization',
      'Analytics & Reporting',
      'Marketing Automation'
    ]
  },
  {
    title: 'AI & SaaS Solutions',
    description: 'Custom AI applications and scalable SaaS platforms to transform your business operations.',
    longDescription: 'We build intelligent, scalable SaaS solutions powered by AI and machine learning. Our expertise includes developing custom LLM applications, process automation, and data analytics platforms that drive business growth and efficiency.',
    icon: '🤖',
    slug: 'ai-saas',
    features: [
      'Custom AI/ML Solutions',
      'SaaS Product Development',
      'LLM Integration',
      'Process Automation',
      'Data Analytics & BI',
      'Cloud Infrastructure'
    ]
  },
  {
    title: 'CMS Integration',
    description: 'Seamless integration of content management systems for easy content updates and management.',
    longDescription: 'We integrate powerful content management systems that put you in control of your website content. Whether you need WordPress, Strapi, or a custom solution, we make content updates simple and intuitive.',
    icon: '🔄',
    slug: 'cms-integration',
    features: [
      'WordPress Integration',
      'Headless CMS Solutions',
      'Custom Admin Panels',
      'Content Workflows',
      'Media Management',
      'User Permissions'
    ]
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    longDescription: 'We build high-performance mobile applications using React Native and Flutter, delivering native-like experiences across both iOS and Android platforms with a single codebase.',
    icon: '📱',
    slug: 'mobile-apps',
    features: [
      'Cross-Platform Development',
      'Native Performance',
      'Offline Support',
      'Push Notifications',
      'App Store Submission',
      'Ongoing Updates'
    ]
  },
  {
    title: 'SEO Services',
    description: 'Search engine optimization to improve your website\'s visibility and ranking on search engines.',
    longDescription: 'Our SEO services are designed to increase your organic search traffic and improve your search engine rankings through proven strategies and techniques.',
    icon: '🔍',
    slug: 'seo-services',
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
      'Performance Reporting'
    ]
  },
  {
    title: 'Creative Design',
    description: 'Stunning visual content that captures your brand identity and engages your audience.',
    longDescription: 'Our creative design services deliver compelling visuals that tell your brand story. From logos to marketing materials, we create designs that make an impact and drive engagement.',
    icon: '🎨',
    slug: 'creative-design',
    features: [
      'Logo & Brand Identity',
      'Print & Digital Design',
      'Social Media Graphics',
      'Marketing Collaterals',
      'UI/UX Design',
      'Brand Guidelines'
    ]
  },
  {
    title: 'Video Production',
    description: 'End-to-end video production services from concept to final cut.',
    longDescription: 'We produce professional videos that tell your brand story, from concept development and scripting to filming, editing, and post-production.',
    icon: '🎬',
    slug: 'video-production',
    features: [
      'Concept Development',
      'Scriptwriting',
      'Professional Filming',
      'Editing & Post-Production',
      'Motion Graphics',
      'Animation'
    ]
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms designed to drive sales and growth.',
    longDescription: 'We build powerful e-commerce solutions with seamless user experiences, secure payment gateways, and conversion-optimized designs to maximize your online sales.',
    icon: '🛒',
    slug: 'ecommerce-solutions',
    features: [
      'Online Store Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Mobile Optimization',
      'SEO for E-commerce',
      'Performance Analytics'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Strategic content that engages audiences and drives results.',
    longDescription: 'Our content marketing services combine compelling storytelling with data-driven strategies to attract, engage, and convert your target audience.',
    icon: '✍️',
    slug: 'content-marketing',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Copywriting',
      'SEO Content',
      'Content Calendar',
      'Performance Analysis'
    ]
  },
  {
    title: 'Brand Strategy',
    description: 'Building powerful brands that connect with your audience.',
    longDescription: 'We help define and articulate your brand identity, voice, and positioning to create meaningful connections with your target market.',
    icon: '🎯',
    slug: 'brand-strategy',
    features: [
      'Brand Positioning',
      'Messaging Strategy',
      'Competitive Analysis',
      'Target Audience Research',
      'Brand Voice & Tone',
      'Brand Guidelines'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media presence that grows your brand.',
    longDescription: 'We develop and execute social media strategies that increase brand awareness, engagement, and conversions across all major platforms.',
    icon: '📱',
    slug: 'social-media-management',
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Paid Advertising',
      'Engagement & Community Building',
      'Analytics & Reporting',
      'Influencer Partnerships'
    ]
  }
];

export default function ServicesSection({ showAll = false }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const displayServices = showAll ? services : services.slice(0, 6);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
      },
    }),
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Services <span className="text-red-600">We Provide</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
                onClick={() => openModal(service)}
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeModal}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[9999]"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">{selectedService.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-500 transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                {/* Body */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <p className="text-gray-700 mb-6">{selectedService.longDescription}</p>
                  
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to get started?</h4>
                    <p className="text-gray-600 mb-6">
                      Contact us today to discuss your {selectedService.title.toLowerCase()} needs and how we can help bring your vision to life.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
