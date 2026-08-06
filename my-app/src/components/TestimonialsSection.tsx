'use client';

import { useEffect, useState } from 'react';
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
  {
    id: 6,
    name: 'Dr. P. Manorama',
    role: 'Founder & Director, CHES',
    content:
      'IgniteX understood the heart of our NGO and built a website that presents our work with dignity and clarity. The new design helps visitors understand our mission, explore our projects, and support the children and communities we serve.',
    rating: 5,
  },
];

// Card width/gap must match the Tailwind classes on TestimonialCard below
// for each breakpoint, so the animation speed (px/sec) stays consistent
// across screen sizes instead of looking slow on mobile.
const BREAKPOINTS = {
  mobile: { cardWidth: 300, gap: 16, maxWidth: 340 }, // w-[80vw] max-w-[340px], mr-4 — 300 is a safe average for 80vw phones
  sm: { cardWidth: 360, gap: 24 }, // sm:w-[360px], sm:mr-6
  md: { cardWidth: 400, gap: 32 }, // md:w-[400px], md:mr-8
};
function getDuration(width: number) {
  // Faster px/sec on mobile — otherwise the same duration formula makes
  // the carousel look like it's crawling on small screens.
  if (width < 640) {
    const singleSetWidth = (BREAKPOINTS.mobile.cardWidth + BREAKPOINTS.mobile.gap) * testimonials.length;
    return singleSetWidth / 260; // much faster on mobile
  }
  if (width < 768) {
    const singleSetWidth = (BREAKPOINTS.sm.cardWidth + BREAKPOINTS.sm.gap) * testimonials.length;
    return singleSetWidth / 150;
  }
  const singleSetWidth = (BREAKPOINTS.md.cardWidth + BREAKPOINTS.md.gap) * testimonials.length;
  return singleSetWidth / 50;
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div
      className="flex-shrink-0 group w-[80vw] max-w-[340px] mr-4 sm:w-[360px] sm:mr-6 md:w-[400px] md:mr-8"
    >
      <div
        className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-100 transition-all duration-500 group-hover:border-red-500/20 group-hover:shadow-xl bg-gray-50 group-hover:bg-white"
      >
        {/* Quote icon */}
        <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-red-500/30 mb-3 sm:mb-4 group-hover:text-red-500/50 transition-colors duration-300" />

        {/* Review text */}
        <p className="text-gray-600 mb-5 sm:mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
          &quot;{testimonial.content}&quot;
        </p>

        {/* Stars */}
        <div className="flex gap-1 mb-4 sm:mb-5">
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
        <div className="h-px w-full bg-gray-200 mb-4 sm:mb-5" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
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
  const [duration, setDuration] = useState(() =>
    getDuration(typeof window !== 'undefined' ? window.innerWidth : 1024)
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    function handleResize() {
      setDuration(getDuration(window.innerWidth));
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 md:py-24 px-4 md:px-8 overflow-hidden bg-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
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
          className="text-center mb-12 sm:mb-14 md:mb-16 px-2"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="h-px w-8 sm:w-12 bg-red-500/50" />
            <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">Testimonials</span>
            <div className="h-px w-8 sm:w-12 bg-red-500/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
            What Our <span className="text-red-500">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>
      </div>

      {/* Carousel: manual swipeable scroll on mobile, animated marquee on sm+ */}
      {isMobile ? (
  <div className="relative">
    <div
      className="testimonial-scroll flex overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-5"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="snap-center">
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </div>

    <style jsx>{`
      .testimonial-scroll {
        scrollbar-width: thin;
        scrollbar-color: #dc2626 #f3f4f6;
      }
      .testimonial-scroll::-webkit-scrollbar {
        height: 6px;
      }
      .testimonial-scroll::-webkit-scrollbar-track {
        background: #f3f4f6;
        border-radius: 10px;
      }
      .testimonial-scroll::-webkit-scrollbar-thumb {
        background: #dc2626;
        border-radius: 10px;
      }
      .testimonial-scroll::-webkit-scrollbar-thumb:hover {
        background: #b91c1c;
      }
    `}</style>
  </div>
) : (
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
              animation: `scroll-testimonials ${duration}s linear infinite`,
            }}
          >
            {/* Duplicate the list so the loop is seamless */}
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>
      )}

      {/* @keyframes scroll-testimonials is defined in globals.css */}
    </section>
  );
}
