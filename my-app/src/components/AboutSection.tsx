'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TabItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ExpandableTabProps {
  item: TabItem;
  defaultOpen?: boolean;
}

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
            IgniteX was founded in 2025 by Rahul Kumar Mahato with the goal of providing outstanding digital solutions.  Our team is committed to providing timely services that meet the highest standards of quality.  Our top goal in everything we do is to satisfy our customers.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
  title: 'Our Mission',
  icon: '🎯',
  description: 'Our mission is to consistently deliver high-quality digital solutions on schedule, ensuring complete customer satisfaction through our dedicated and reliable services.'
},
{
  title: 'Our Vision',
  icon: '✨',
  description: 'Our vision is to become a recognised leader in digital innovation, distinguished by our strong commitment to quality and timely delivery.'
},
{
  title: 'Our Promise',
  icon: '🤝',
  description: 'We promise to always put our customers first by delivering exceptional service and maintaining the highest standards of quality in every project we undertake.'
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
          className="mt-20 max-w-4xl mx-auto"
        >
          <motion.h3 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          >
            Why Choose <span className="text-red-600">IgniteX</span>?
          </motion.h3>
          
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-red-600 mx-auto mb-12"
          />
          
          <div className="space-y-6">
            {[
              {
                title: 'Expert Team',
                description: 'Our team consists of highly skilled professionals with years of experience in the industry.',
                icon: '👨‍💻',
                features: [
                  'Certified professionals',
                  'Years of industry experience',
                  'Diverse skill sets',
                  'Continuous learning'
                ]
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'We leverage the latest technologies and frameworks to build scalable and efficient solutions.',
                icon: '⚡',
                features: [
                  'Modern tech stack',
                  'Regular updates',
                  'Future-proof solutions',
                  'Scalable architecture'
                ]
              },
              {
                title: 'Timely Delivery',
                description: 'We understand the importance of deadlines and have a proven track record of delivering projects on time, every time.',
                icon: '⏱️',
                features: [
                  'Strict project timelines',
                  'Agile methodology',
                  'Milestone-based delivery',
                  'Transparent progress tracking'
                ]
              },
              {
                title: 'Affordable Pricing',
                description: 'We offer competitive and transparent pricing models that provide excellent value without compromising on quality.',
                icon: '💰',
                features: [
                  'Flexible pricing options',
                  'No hidden costs',
                  'Cost-effective solutions',
                  'Value for money'
                ]
              }
            ].map((item, index) => (
              <ExpandableTab key={index} item={item} defaultOpen={index === 0} />
            ))}
          </div>
          
          <motion.div 
            variants={fadeIn}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the growing list of satisfied clients who trust IgniteX for their digital transformation journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-lg transition-colors duration-300"
            >
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ExpandableTab: React.FC<ExpandableTabProps> = ({ item, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="text-2xl mr-4">{item.icon}</span>
          <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutSection;
