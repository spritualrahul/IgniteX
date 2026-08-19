'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'Tata Foundation', logo: '/images/partners/tata-foundation.svg', alt: 'Tata Foundation Partner' },
    { name: 'Artivatic', logo: '/images/partners/artivatic.svg', alt: 'Artivatic Partner' },
    { name: 'AWS', logo: '/images/partners/aws.svg', alt: 'AWS Partner' },
    { name: 'Ches', logo: '/images/partners/ches.jpeg', alt: 'Ches Partner' },
    { name: 'Kalam', logo: '/images/partners/kalam.png', alt: 'Kalam Partner' },
    { name: 'Lucent', logo: '/images/partners/lucent.png', alt: 'Lucent Partner' },
    { name: 'Shopify', logo: '/images/partners/shopify.svg', alt: 'Shopify Partner' },
    { name: 'WordPress', logo: '/images/partners/wordpress.svg', alt: 'WordPress Partner' },
    { name: 'HubSpot', logo: '/images/partners/hubspot.svg', alt: 'HubSpot Partner' },
    { name: 'Google Cloud', logo: '/images/partners/google-cloud.svg', alt: 'Google Cloud Partner' },
    { name: 'Microsoft', logo: '/images/partners/microsoft.svg', alt: 'Microsoft Partner' },
  ];

  // Duplicate for seamless infinite loop
  const duplicated = [...partners, ...partners];

  return (
    <section className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to partner with industry leaders to deliver exceptional solutions to our clients.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling carousel with faded edges */}
      <div className="relative">
        {/* Left fade gradient - narrowed so logos aren't clipped as much */}
        <div
          className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 md:w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgb(249 250 251) 0%, transparent 100%)',
          }}
        />
        {/* Right fade gradient - narrowed so logos aren't clipped as much */}
        <div
          className="absolute right-0 top-0 bottom-0 w-6 sm:w-10 md:w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgb(249 250 251) 0%, transparent 100%)',
          }}
        />

        {/* Scrolling track */}
        <div className="flex animate-scroll-infinite">
          {duplicated.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 md:mx-10 flex items-center justify-center group"
              style={{ minWidth: '140px' }}
            >
              <div className="w-32 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 flex items-center justify-center p-3 sm:p-4 rounded-lg transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={160}
                  height={60}
                  className="w-full h-full object-contain opacity-100 grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;