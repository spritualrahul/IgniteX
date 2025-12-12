"use client";

import React, { useEffect, useState } from "react";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  fontFamily?: string;
}

export const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ text, className = "", fontFamily }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    if (!text) return;
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 70); // Adjust speed here
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span
      className={className}
      style={fontFamily ? { fontFamily } : {}}
      aria-label={text}
    >
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          style={{
            opacity: idx < visibleCount ? 1 : 0,
            transition: "opacity 0.15s",
            display: char === " " ? "inline-block" : undefined,
            minWidth: char === " " ? "0.4em" : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

// testing purpose only

