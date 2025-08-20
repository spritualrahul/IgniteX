'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = [
  'from-blue-100/50 to-indigo-100/50',
  'from-purple-50/50 to-blue-50/50',
  'from-gray-50/50 to-blue-50/50',
  'from-indigo-50/50 to-purple-50/50',
];

// Match the background with the page
const backgroundGradient = 'transparent';

interface FloatingShapeProps {
  colorIndex: number;
  size: number;
  delay: number;
  duration: number;
  x: string | number;
  y: string | number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ colorIndex, size, delay, duration, x, y }) => {
  return (
    <motion.div
      initial={{
        x: x,
        y: y,
        scale: 0,
        opacity: 0,
      }}
      animate={{
        x: [Number(x), Number(x) + (Math.random() - 0.5) * 100],
        y: [Number(y), Number(y) + (Math.random() - 0.5) * 100],
        scale: [0, 1, 0],
        opacity: [0, 0.7, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration || 15 + Math.random() * 30,
        delay: delay || 0,
        repeat: Infinity,
        repeatType: 'loop' as const,
        ease: 'linear',
      }}
      className={`absolute rounded-full bg-gradient-to-r ${COLORS[colorIndex % COLORS.length]}`}
      style={{
        width: size,
        height: size,
        filter: 'blur(80px)',
        opacity: 0.15, // More transparent
        mixBlendMode: 'multiply' // Blend better with the background
      }}
    />
  );
};

interface Slide {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const DeviceShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const slides: Slide[] = [
    {
      title: "Web Development",
      description: "Modern, responsive websites that drive results",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      icon: "📱",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love",
      icon: "🎨",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Generate very subtle floating shapes
  const shapes = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    size: 150 + Math.random() * 100, // Fewer, more subtle shapes
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 40 + Math.random() * 60, // Even slower movement
    colorIndex: Math.floor(Math.random() * COLORS.length),
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-auto min-h-[50vh] py-12 overflow-visible"
    >
      {/* Animated Background */}
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          colorIndex={shape.colorIndex}
          size={shape.size}
          delay={shape.delay}
          duration={shape.duration}
          x={`${shape.x}%`}
          y={`${shape.y}%`}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { duration: 0.5 }
            }}
            exit={{ 
              opacity: 0, 
              y: -50, 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            className={`relative z-20 p-6 md:p-8 text-center max-w-3xl mx-4`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { delay: 0.2, duration: 0.5 }
              }}
              className="text-7xl md:text-8xl mb-4"
            >
              {slides[currentSlide].icon}
            </motion.div>
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 }
              }}
              className="text-2xl md:text-3xl font-bold mb-3 text-gray-800"
            >
              {slides[currentSlide].title}
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.5 }
              }}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 }
              }}
              className="mt-8"
            >
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm">
                Get Started
              </button>
              <button className="ml-3 px-6 py-2 bg-transparent border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 text-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DeviceShowcase;
