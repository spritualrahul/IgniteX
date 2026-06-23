'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Layak Singh',
    role: 'CEO, Artivatic.ai',
    content:
      'IgniteX transformed our digital infrastructure with their cutting-edge AI solutions. Their team delivered exceptional results that exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Founder, Fitsib',
    content:
      'The platform built by IgniteX has been instrumental in scaling our fitness business. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Marketing Director, TechCorp',
    content:
      'Working with IgniteX was a game-changer for our digital marketing strategy. Their innovative approach delivered outstanding results.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'CTO, Finova',
    content:
      'The team at IgniteX built us a robust fintech solution that handles thousands of transactions daily with zero downtime.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Dhivya Mohan',
    role: 'Founder, Kalam Study Hall',
    content:
      'IgniteX built a stunning, modern website for Kalam Study Hall that perfectly captures our educational vision. The responsive design and smooth user experience have significantly boosted our online enrollments.',
    rating: 5,
  },
];

const CARD_WIDTH = 400;
const GAP = 32;
const TOTAL_WIDTH = (CARD_WIDTH + GAP) * testimonials.length;
const DURATION = TOTAL_WIDTH / 50; // same speed as before

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div
      className="flex-shrink-0 group"
      style={{ width: CARD_WIDTH, marginRight: GAP }}
    >
      <div
        className="relative h-full p-8 rounded-2xl border border-gray-100 backdrop-blur-sm transition-all duration-500 group-hover:border-red-500/20 group-hover:shadow-xl bg-gray-50 group-hover:bg-white"
      >
        {/* Quote icon */}
        <Quote className="w-8 h-8 text-red-500/30 mb-4 group-hover:text-red-500/50 transition-colors duration-300" />

        {/* Review text */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
          &quot;{testimonial.content}&quot;
        </p>

        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              className={`h-4 w-4 ${
                idx < testimonial.rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-5" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="h-11 w-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)' }}
          >
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold text-sm">{testimonial.name}</h4>
            <p className="text-gray-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-3"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 60%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50" />
            <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">Testimonials</span>
            <div className="h-px w-12 bg-red-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
            What Our <span className="text-red-500">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Carousel with fade edges — pure CSS animation */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff 0%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff 0%, transparent 100%)' }}
        />

        <div
          className="flex"
          style={{
            willChange: 'transform',
            animation: `scroll-testimonials ${DURATION}s linear infinite`,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL_WIDTH}px); }
        }
      `}</style>
    </section>
  );
}

