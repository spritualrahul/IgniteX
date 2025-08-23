'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Layak Singh',
    role: 'CEO, Artivatic.ai',
    content: 'IgniteX transformed our digital infrastructure with their cutting-edge AI solutions. Their team delivered exceptional results that exceeded our expectations.',
    rating: 5,
    image: '/testimonials/layak-singh.jpg'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    role: 'Founder, Fitsib',
    content: 'The platform built by IgniteX has been instrumental in scaling our fitness business. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    image: '/testimonials/rahul-sharma.jpg'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Marketing Director, TechCorp',
    content: 'Working with IgniteX was a game-changer for our digital marketing strategy. Their innovative approach delivered outstanding results.',
    rating: 5,
    image: '/testimonials/priya-patel.jpg'
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'CTO, Finova',
    content: 'The team at IgniteX built us a robust fintech solution that handles thousands of transactions daily with zero downtime.',
    rating: 5,
    image: '/testimonials/amit-verma.jpg'
  }
];

// Animation variants for framer-motion

import { easeOut } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: easeOut
    },
  }),
} as const;

const starVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.3,
      ease: easeOut
    }
  })
} as const;

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our <span className="text-red-600">Client Says</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center text-2xl font-bold text-gray-700 mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={starVariants}
                  >
                    <Star 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
