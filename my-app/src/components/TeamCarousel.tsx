'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string | {
    src: string;
    width: number;
    height: number;
    alt?: string;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
  };
  bio: string;
};

const TeamCarousel = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-advance slides with pause on hover and touch
  useEffect(() => {
    if (teamMembers.length <= 1) return;
    
    const startInterval = () => {
      if (!isHovered && teamMembers.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % teamMembers.length);
        }, 5000);
      }
    };
    
    startInterval();
    
    // Pause on window blur (tab change)
    const handleBlur = () => {
      setIsHovered(true);
      const currentInterval = intervalRef.current;
      if (currentInterval) {
        clearInterval(currentInterval);
      }
    };
    
    const handleFocus = () => {
      setIsHovered(false);
      startInterval();
    };
    
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    
    return () => {
      const currentInterval = intervalRef.current;
      if (currentInterval) {
        clearInterval(currentInterval);
      }
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [teamMembers.length, isHovered]);

  if (teamMembers.length === 0) {
    return (
      <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No team members to display</p>
      </div>
    );
  }

  // Preload next image for smoother transitions
  const nextSlide = (currentSlide + 1) % teamMembers.length;
  
  return (
    <div 
      className="relative w-full h-full overflow-hidden group"
      onMouseEnter={() => {
        setIsHovered(true);
        const currentInterval = intervalRef.current;
        if (currentInterval) {
          clearInterval(currentInterval);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        intervalRef.current = setInterval(() => {
          setCurrentSlide(prev => (prev + 1) % teamMembers.length);
        }, 5000);
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
      
      {/* Navigation dots */}
      {teamMembers.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {teamMembers.map((member, index) => {
        const imageSrc = typeof member.image === 'string' ? member.image : member.image.src;
        const altText = typeof member.image === 'string' 
          ? `${member.name} - ${member.role}` 
          : member.image.alt || `${member.name} - ${member.role}`;
          
        return (
          <div 
            key={`${member.name}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-cover w-full h-full"
                priority={index === 0 && (typeof member.image === 'object' ? member.image.priority : false)}
                loading={index <= 1 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              {/* Preload next image */}
              {index === nextSlide && (
                <link 
                  rel="preload" 
                  as="image" 
                  href={imageSrc} 
                  imageSrcSet={imageSrc}
                />
              )}
            </div>
            <div className="relative z-20 max-w-4xl px-8 text-white">
              <h3 className="text-2xl md:text-4xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg md:text-xl text-blue-300 mb-4">{member.role}</p>
              <p className="text-sm md:text-base text-gray-200">{member.bio}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCarousel;
