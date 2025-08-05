"use client";

import React, { useEffect, useState } from "react";

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
        timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 110); // slower typing
      } else {
        timeout = setTimeout(() => setDirection('out'), 1800); // pause longer
      }
    } else {
      if (visibleCount > 0) {
        timeout = setTimeout(() => setVisibleCount(visibleCount - 1), 80); // slower deleting
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

  return (
    <span
      className={className}
      style={fontFamily ? { fontFamily } : {}}
    >
      <span style={{ color: "rgb(58, 61, 65)", fontSize: "2em" }}>{constant} </span>
      <span className="text-red-600" style={{ position: "relative", display: "inline-block", minWidth: `${Math.max(...contexts.map(c => c.length + 3))}ch`, width: `${Math.max(...contexts.map(c => c.length + 3))}ch` }}>
        {[...contexts[current], ".", ".", "."].join("").split("").map((char, idx) => (
          <span
            key={idx}
            style={{
              opacity: idx < visibleCount ? 1 : 0,
              transition: "none",
              display: char === " " ? "inline-block" : undefined,
              minWidth: char === " " ? "0.4em" : undefined,
            }}
          >
            {char}
          </span>
        ))}
        {/* Blinking cursor right after the last visible character */}
        <span
          className="inline-block align-baseline"
          style={{
            position: 'absolute',
            left: `calc(${visibleCount}ch)`,
            top: 0,
            height: '100%',
            animation: 'blink 1s steps(1) infinite',
            fontWeight: 400,
            fontSize: '1em',
            color: '#dc2626', // Tailwind's red-600
            transition: 'left 0.1s cubic-bezier(.4,0,.2,1)'
          }}
        >
          |
        </span>
      </span>
    </span>
  );
};
