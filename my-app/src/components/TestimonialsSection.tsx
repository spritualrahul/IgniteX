'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
];

export default function TestimonialsSection() {
  // speed settings
  const SPEED = 60; // px per second
  const CARD_WIDTH = 360; // card width
  const GAP = 28; // gap between cards

  const totalWidth = (CARD_WIDTH + GAP) * testimonials.length;

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-gray-50 overflow-hidden" // ⬅ bg color here
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          What Our <span className="text-red-600">Client Says</span>
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Don&apos;t just take our word for it. Here&apos;s what our clients have
          to say about working with us.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: [0, -totalWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: totalWidth / SPEED,
            },
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex-shrink-0"
              style={{ width: CARD_WIDTH, marginRight: GAP }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center text-lg font-bold text-gray-700 mr-3">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="text-left">
                  <h4 className="text-md font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
