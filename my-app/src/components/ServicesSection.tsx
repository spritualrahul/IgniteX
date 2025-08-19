'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    icon: '🌐',
    slug: 'web-development'
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive business growth.',
    icon: '📄',
    slug: 'landing-pages'
  },
  {
    title: 'Full Stack Projects',
    description: 'End-to-end development of complex web applications with both frontend and backend components.',
    icon: '💻',
    slug: 'full-stack-projects'
  },
  {
    title: 'CMS Integration',
    description: 'Seamless integration of content management systems for easy content updates and management.',
    icon: '🔄',
    slug: 'cms-integration'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: '📱',
    slug: 'mobile-apps'
  },
  {
    title: 'SEO Services',
    description: 'Search engine optimization to improve your website\'s visibility and ranking on search engines.',
    icon: '🔍',
    slug: 'seo-services'
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
    icon: '📈',
    slug: 'digital-marketing'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing services to create engaging and high-quality video content.',
    icon: '🎬',
    slug: 'video-editing'
  },
  {
    title: 'Graphic Design',
    description: 'Creative and visually appealing designs for all your branding and marketing needs.',
    icon: '🎨',
    slug: 'graphic-design'
  }
];

export default function ServicesSection({ showAll = false }) {
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

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-[var(--max-width)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mb-8 sm:mb-10"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-50"
            >
              <div className="p-5 sm:p-6 md:p-7">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 text-2xl mb-4 group-hover:bg-red-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-[0.9375rem] leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm sm:text-[0.9375rem] group-hover:translate-x-1 transition-all duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 flex-shrink-0" />
                </Link>
              </div>
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
    </section>
  );
}
