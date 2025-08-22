'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Aboutttt <span className="text-red-600">IgniteX</span>
          </motion.h2>
          
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-red-600 mx-auto mb-10"
          />
          
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Founded by Rahul Kumar Mahato in 2025, IgniteX is built on the foundation of delivering exceptional digital solutions. We are a team that believes in delivering services on time with the highest quality standards. Customer satisfaction is our first and foremost priority in everything we do.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Our Mission',
              icon: '🎯',
              description: 'To deliver high-quality digital solutions on time, every time, ensuring complete customer satisfaction through our dedicated services.'
            },
            {
              title: 'Our Vision',
              icon: '✨',
              description: 'To be recognized as a leader in digital innovation, known for our commitment to quality and timely delivery.'
            },
            {
              title: 'Our Promise',
              icon: '🤝',
              description: 'We promise to put our customers first, delivering exceptional service and maintaining the highest standards of quality in every project.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-20 max-w-5xl mx-auto"
        >
          <motion.h3 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Why Choose <span className="text-red-600">IgniteX</span>?
          </motion.h3>
          
          <motion.div 
            variants={fadeIn}
            className="w-16 h-1 bg-red-600 mx-auto mb-12"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: '👨‍💻',
                title: 'Expert Team',
                description: 'Our team consists of industry veterans and passionate professionals with years of experience in delivering exceptional digital solutions.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '⚡',
                title: 'Cutting-Edge Technology',
                description: 'We stay ahead of the curve by leveraging the latest technologies and frameworks to build scalable and future-proof solutions.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: '🎯',
                title: 'Client-First Approach',
                description: 'Your success is our priority. We work closely with you to understand your vision and deliver solutions that exceed expectations.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '📈',
                title: 'Proven Results',
                description: 'Our track record speaks for itself. We deliver measurable results that drive growth and success for our clients.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: '⏱️',
                title: 'Timely Delivery',
                description: 'We respect your time and deliver projects on schedule without compromising on quality or functionality.',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: '🔄',
                title: 'Continuous Support',
                description: 'Our relationship doesn\'t end at delivery. We provide ongoing support and maintenance to ensure your success.',
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: '🔒',
                title: 'Security First',
                description: 'We implement robust security measures to protect your data and ensure compliance with industry standards.',
                color: 'from-pink-500 to-pink-600'
              },
              {
                icon: '💡',
                title: 'Innovative Solutions',
                description: 'We think outside the box to provide creative and effective solutions to complex business challenges.',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`bg-gradient-to-r ${item.color} p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the growing list of satisfied clients who trust IgniteX for their digital transformation journey.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-lg transition-colors duration-300"
            >
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
