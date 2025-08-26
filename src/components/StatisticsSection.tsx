'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, label, icon }: { value: number; label: string; icon: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.15, 1],
        transition: { duration: 0.6, ease: 'easeInOut' },
      });

      // Counter animation
      let start = 0;
      const duration = 3000; 
      const stepTime = Math.abs(Math.floor(duration / value));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [controls, inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl text-center transform transition duration-300 hover:-translate-y-2"
    >
      <motion.div
        animate={controls}
        className="text-5xl mb-4 text-red-600"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-2 text-gray-900"
      >
        {count}+
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { value: 50, label: 'Projects Completed', icon: '🚀' },
    { value: 30, label: 'Happy Clients', icon: '😊' },
    { value: 5, label: 'Years Experience', icon: '⏳' },
    { value: 10, label: 'Team Members', icon: '👥' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            By The <span className="text-red-600">Numbers</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-20 h-1 bg-red-600 mx-auto mb-10 origin-left"
          ></motion.div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our journey in numbers, showcasing our growth and impact in the digital world.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
