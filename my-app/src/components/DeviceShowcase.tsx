'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DeviceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Web Development",
      description: "Modern, responsive websites that drive results",
      icon: "💻"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love",
      icon: "🎨"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-2xl mx-auto px-4">
          {/* Laptop Frame */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative bg-gray-900 rounded-t-2xl overflow-hidden aspect-video">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center"
              >
                <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
                <p className="text-gray-300">{slides[currentSlide].description}</p>
              </motion.div>
            </div>
            <div className="h-4 bg-gray-800 rounded-b-lg mx-auto w-3/4">
              <div className="h-1 w-12 bg-gray-700 rounded-full mx-auto mt-1"></div>
            </div>
          </div>
          
          {/* Phone Frame */}
          <div className="absolute bottom-0 right-0 w-28 h-56 md:w-32 md:h-64 bg-gray-900 rounded-3xl p-1.5 md:p-2 border-4 border-gray-800 transform rotate-6 translate-y-8 md:translate-y-0">
            <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full flex items-center justify-center text-4xl"
              >
                {slides[currentSlide].icon}
              </motion.div>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
