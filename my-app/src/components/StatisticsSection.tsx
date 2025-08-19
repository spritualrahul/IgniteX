'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, label, icon }: { value: number; label: string; icon: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg text-center"
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
        {value}+
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            By The <span className="text-red-600">Numbers</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our journey in numbers, showcasing our growth and impact in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
