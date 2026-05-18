'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Ear, Map, Code2, Rocket } from 'lucide-react';

type Step = {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const processSteps: Step[] = [
  {
    step: 1,
    title: 'Listen & Understand',
    description:
      'We start by deeply listening. Your goals, your vision, your audience — we absorb everything so we know exactly what success looks like for you.',
    icon: <Ear className="w-5 h-5" />,
  },
  {
    step: 2,
    title: 'Plan & Strategize',
    description:
      'We map out the roadmap, select the right tools and technologies, and design a strategy that delivers real, measurable results.',
    icon: <Map className="w-5 h-5" />,
  },
  {
    step: 3,
    title: 'Design & Build',
    description:
      'Time to bring ideas to life. We craft beautiful, responsive, and high-performing digital solutions with obsessive attention to detail.',
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    step: 4,
    title: 'Launch & Support',
    description:
      'We go live and stick around. Ongoing support, performance monitoring, and iterative improvements to keep your project growing.',
    icon: <Rocket className="w-5 h-5" />,
  },
];

function TimelineStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center w-full group">
      {/* Desktop: Alternating layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] w-full items-center gap-8">
        {/* Left content */}
        <div className={`${isEven ? '' : 'order-3'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className={`relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-500 ${
              isEven ? 'text-right' : 'text-left'
            }`}
          >
            {/* Red accent line */}
            <div
              className={`absolute top-6 bottom-6 w-0.5 bg-red-500/20 group-hover:bg-red-500/40 transition-colors duration-500 ${
                isEven ? 'right-0 rounded-l' : 'left-0 rounded-r'
              }`}
            />

            {/* Icon + Title */}
            <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className={`${isEven ? 'order-2' : ''}`}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-red-600 bg-red-50 group-hover:bg-red-100 transition-colors duration-300"
                >
                  {step.icon}
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {step.title}
              </h3>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        </div>

        {/* Center: Timeline node */}
        <div className="flex flex-col items-center order-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
            className="relative z-10"
          >
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-shadow duration-500"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {step.step}
            </div>
            {/* Pulse ring */}
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={inView ? { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className="absolute inset-0 rounded-full border-2 border-red-400"
            />
          </motion.div>
        </div>

        {/* Right content (empty for even, content for odd) */}
        <div className={`${isEven ? 'order-3' : ''}`} />
      </div>

      {/* Mobile: Single column with left timeline */}
      <div className="flex lg:hidden w-full gap-5">
        {/* Timeline line + node */}
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
            className="relative z-10"
          >
            <div
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-red-500/20"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {step.step}
            </div>
          </motion.div>
          {index < processSteps.length - 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-px bg-gradient-to-b from-red-400 to-red-100 flex-1 mt-2"
            />
          )}
        </div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 pb-10"
        >
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-red-600 bg-red-50">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {step.title}
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/40" />
            <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">Our Process</span>
            <div className="h-px w-12 bg-red-500/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            How <span className="text-red-600">We Work</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            From a spark of an idea to the final launch, we combine{' '}
            <span className="font-medium text-gray-700">creativity</span> and{' '}
            <span className="font-medium text-gray-700">technology</span> to deliver work you&apos;ll love.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-px mx-auto"
              style={{ background: 'linear-gradient(180deg, #dc2626 0%, #fca5a5 50%, #fee2e2 100%)' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <TimelineStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
