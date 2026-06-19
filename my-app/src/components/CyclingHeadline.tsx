"use client";

import React, { useEffect, useState, useMemo } from "react";

interface CyclingHeadlineProps {
  constant: string;
  contexts: string[];
  className?: string;
  fontFamily?: string;
}

export const CyclingHeadline: React.FC<CyclingHeadlineProps> = ({ constant, contexts, className = "", fontFamily }) => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [direction, setDirection] = useState<'in' | 'out'>('in');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (direction === 'in') {
      if (visibleCount < contexts[current].length) {
        timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 100); // typing speed
      } else {
        timeout = setTimeout(() => setDirection('out'), 1000); // pause before deleting
      }
    } else {
      if (visibleCount > 0) {
        timeout = setTimeout(() => setVisibleCount(visibleCount - 1), 70); // deleting speed
      } else {
        timeout = setTimeout(() => {
          setCurrent((prev) => (prev + 1) % contexts.length);
          setDirection('in');
        }, 500);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [visibleCount, direction, current, contexts]);

  useEffect(() => {
    if (direction === 'in') setVisibleCount(0);
    else setVisibleCount(contexts[current].length);
  }, [current, direction, contexts]);

  // Get the current visible text
  const visibleText = [...contexts[current]].slice(0, visibleCount).join('');

  // Pre-calculate the longest context string to reserve space and avoid CLS
  const longestContext = useMemo(() => {
    return contexts.reduce((a, b) => a.length > b.length ? a : b, '');
  }, [contexts]);

  return (
    <div className="flex flex-col">
      <span 
        className={`bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-7xl md:text-8xl lg:text-9xl font-montserrat font-extrabold leading-[1.1] tracking-tight ${className}`}
        style={{
          ...(fontFamily ? { fontFamily } : {}),
          textShadow: 'none',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% auto',
          animation: 'gradient 3s ease infinite',
          display: 'inline-block',
          lineHeight: '1.1',
          margin: '1.5rem 0 2rem 0',
          padding: '0.75rem 0',
          letterSpacing: '-0.025em'
        }}
      >
        {constant}
      </span>
      {/* Fixed-height container prevents CLS from typing animation */}
      <div className="h-20 md:h-24 flex items-center mt-2 relative">
        {/* Invisible spacer to reserve width for the longest text */}
        <span 
          aria-hidden="true"
          className="text-red-600 text-4xl md:text-5xl font-poppins font-semibold invisible whitespace-nowrap"
          style={{
            ...(fontFamily ? { fontFamily } : {}),
            lineHeight: '1.2',
            letterSpacing: '-0.01em'
          }}
        >
          {longestContext}
        </span>
        {/* Actual visible typing text, positioned absolutely to avoid layout shifts */}
        <span 
          className={`absolute left-0 top-0 h-full flex items-center text-red-600 text-4xl md:text-5xl font-poppins font-semibold whitespace-nowrap ${visibleCount > 0 ? 'visible' : 'invisible'}`}
          style={{
            ...(fontFamily ? { fontFamily } : {}),
            lineHeight: '1.2',
            letterSpacing: '-0.01em'
          }}
        >
          {visibleText}
          <span 
            className="inline-block h-10 w-1.5 bg-red-600 ml-3 align-middle"
            style={{
              animation: 'blink 0.7s steps(1) infinite',
            }}
          />
        </span>
      </div>
    </div>
  );
};
