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
            About <span className="text-red-600">IgniteX</span>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Expert Team',
              'Cutting-Edge Technology',
              'Client-Focused Approach',
              'Proven Results'
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-red-600 font-medium">{item}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
