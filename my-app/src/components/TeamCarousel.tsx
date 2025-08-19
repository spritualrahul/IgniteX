'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const TeamCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/team/team1.jpg',
    '/images/team/team2.jpg',
    '/images/team/team3.jpg',
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Team background ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default TeamCarousel;
