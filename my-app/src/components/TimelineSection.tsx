'use client';

import { motion } from 'framer-motion';

const TimelineSection = () => {
  const events = [
    {
      year: '2025',
      title: 'IgniteX Founded',
      description: 'Rahul Kumar Mahato establishes IgniteX with a vision to deliver exceptional digital solutions.',
    },
    {
      year: '2025',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise web application, setting high standards for future projects.',
    },
    {
      year: '2026',
      title: 'Team Expansion',
      description: 'Welcomed our first team members, expanding our capabilities in design and development.',
    },
    {
      year: '2026',
      title: '50+ Projects Delivered',
      description: 'Reached a milestone of 50+ successful projects across various industries.',
    },
    {
      year: '2027',
      title: 'Global Reach',
      description: 'Started serving clients internationally, expanding our presence across borders.',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Our <span className="text-red-600">Journey</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-red-600 mx-auto mb-10"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
          
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              
              <div className="w-2/12 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-red-600 border-4 border-white shadow-md"></div>
                  <div className="text-sm font-medium text-gray-500 mt-2">{event.year}</div>
                </div>
              </div>
              
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
