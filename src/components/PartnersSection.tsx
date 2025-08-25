'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Tata Foundation',
      logo: '/images/partners/tata-foundation.svg',
      alt: 'Tata Foundation Partner'
    },
    {
      name: 'Artivatic',
      logo: '/images/partners/artivatic.svg',
      alt: 'Artivatic Partner'
    },
    {
      name: 'AWS',
      logo: '/images/partners/aws.svg',
      alt: 'AWS Partner'
    },
    {
      name: 'Shopify',
      logo: '/images/partners/shopify.svg',
      alt: 'Shopify Partner'
    },
    {
      name: 'WordPress',
      logo: '/images/partners/wordpress.svg',
      alt: 'WordPress Partner'
    },
    {
      name: 'HubSpot',
      logo: '/images/partners/hubspot.svg',
      alt: 'HubSpot Partner'
    }
  ];

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
    <section className="py-16 bg-white">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center px-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="w-full h-24 flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={160}
                  height={60}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
