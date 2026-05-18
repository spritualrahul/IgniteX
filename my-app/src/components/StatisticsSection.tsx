'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.6, ease: 'easeInOut' },
      });

      let start = 0;
      const duration = 2500;
      const stepTime = Math.max(Math.floor(duration / value), 15);

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative group text-center"
    >
      {/* Decorative ring behind number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-red-500/10 group-hover:border-red-500/25 group-hover:scale-110 transition-all duration-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-red-500/5 group-hover:border-red-500/15 group-hover:scale-105 transition-all duration-1000" />

      {/* Red top accent */}
      <div className="w-8 h-1 bg-red-500 mx-auto mb-6 rounded-full group-hover:w-12 transition-all duration-500" />

      {/* Number */}
      <motion.div
        animate={controls}
        className="relative z-10"
      >
        <span
          className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl font-bold text-red-500"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {suffix}
        </span>
      </motion.div>

      {/* Label */}
      <p className="text-gray-400 text-sm font-medium mt-3 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 80, suffix: '%', label: 'Average ROI Boost' },
    { value: 24, suffix: '/7', label: 'Priority Support' },
  ];

  return (
    <section
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-gray-50"
    >
      {/* Centered glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, #dc2626 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50" />
            <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">Impact</span>
            <div className="h-px w-12 bg-red-500/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            By The <span className="text-red-500">Numbers</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our journey in numbers — showcasing our growth and impact in the digital world.
          </p>
        </motion.div>

        {/* Stats Grid with dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
              {/* Vertical divider (not on last item per row) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
