'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const DISPLAY_FONT = "'Oswald', sans-serif";
const LABEL_FONT =
  "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  /** 0–100: how far the growth line travels before its marker */
  fill: number;
};

const TRACK_WIDTH = 200;

const StatCard = ({ value, suffix, label, fill, index }: Stat & { index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);
  const endX = (TRACK_WIDTH * fill) / 100;

  useEffect(() => {
    if (!inView) return;

    const duration = 1400;
    const stepTime = Math.max(Math.floor(duration / value), 20);
    let start = 0;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col"
    >
      {/* Number */}
      <div className="flex items-baseline gap-0.5 mb-2">
        <span
          className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 tabular-nums"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl font-semibold text-red-500"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p
        className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
        style={{ fontFamily: LABEL_FONT }}
      >
        {label}
      </p>

      {/* Growth line — the stat plotted as a distance travelled */}
      <svg
        width="100%"
        height="14"
        viewBox={`0 0 ${TRACK_WIDTH} 14`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1={0}
          y1={7}
          x2={TRACK_WIDTH}
          y2={7}
          stroke="#E5E7EB"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <motion.line
          x1={0}
          y1={7}
          x2={endX}
          y2={7}
          stroke="#EF4444"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.9, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
        />
        <motion.circle
          cx={endX}
          cy={7}
          r={3.5}
          fill="#EF4444"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.95 + index * 0.1, ease: 'easeOut' }}
          style={{ transformOrigin: `${endX}px 7px` }}
        />
      </svg>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats: Stat[] = [
    { value: 50, suffix: '+', label: 'Projects Delivered', fill: 58 },
    { value: 98, suffix: '%', label: 'Client Satisfaction', fill: 98 },
    { value: 80, suffix: '%', label: 'Average ROI Boost', fill: 80 },
    { value: 24, suffix: '/7', label: 'Priority Support', fill: 100 },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span
            className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: LABEL_FONT }}
          >
            Impact
          </span>
          <h2
            className="text-4xl md:text-5xl font-semibold mt-3 mb-4 text-gray-900"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            By the numbers
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our journey in numbers - showcasing our growth and impact in the digital world.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative pr-2">
              <StatCard {...stat} index={index} />
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-6 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;