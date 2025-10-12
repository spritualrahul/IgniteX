'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Step type definition
type Step = {
  step: number;
  title: string;
  description: string;
  icon: string;
  color: string;
};

// Process steps data
const processSteps: Step[] = [
  {
    step: 1,
    title: 'Listen & Understand',
    description:
      'We start by really listening 👂. Your goals, your vision, your dreams – we take it all in so we know exactly what success looks like for you.',
    icon: '👂',
    color: 'bg-red-100',
  },
  {
    step: 2,
    title: 'Plan & Strategize',
    description:
      'Next, we roll up our sleeves 📝. We map out the roadmap, pick the right tools, and design a strategy that actually works (and looks great too!).',
    icon: '📝',
    color: 'bg-yellow-100',
  },
  {
    step: 3,
    title: 'Design & Build',
    description:
      'Time to bring ideas to life 💻. We craft websites, apps, and designs that are beautiful, responsive, and super user-friendly.',
    icon: '💻',
    color: 'bg-green-100',
  },
  {
    step: 4,
    title: 'Launch & Support',
    description:
      'We hit the 🚀 button and go live! Then we stick around to make sure everything keeps running smoothly and growing with you.',
    icon: '🚀',
    color: 'bg-blue-100',
  },
];

// Step Card component
function StepCard({ step }: { step: Step }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.1 * step.step, type: 'spring', stiffness: 100 }}
      className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`w-16 h-16 flex items-center justify-center ${step.color} text-3xl rounded-full mb-4 mx-auto`}
      >
        {step.icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>

      {/* Description */}
      <p className="text-gray-600">{step.description}</p>
    </motion.div>
  );
}

// Main HowWeWork component
export default function HowWeWork() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          How <span className="text-red-600">We Work</span> 💡
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          From a spark of an idea to the final launch, we combine{' '}
          <span className="font-medium text-gray-800">creativity</span> and{' '}
          <span className="font-medium text-gray-800">technology</span> to deliver work
          you’ll love. Think of us as your friendly guides through every step of the
          journey.
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {processSteps.map((step) => (
          <StepCard key={step.step} step={step} />
        ))}
      </div>
    </section>
  );
}
