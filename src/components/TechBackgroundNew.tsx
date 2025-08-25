'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const techIcons = [
  '💻', '🎨', '📜', '⚛️', '🟢', '⏭️', '🔷', '🔀', '🐙', '🐳',
  '👨‍💻', '💼', '🐦', '📷', '▶️', '🔌', '🔋', '📱', '💾', '📊'
];

const TechBackgroundNew = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 h-full w-full">
        {techIcons.map((icon, index) => {
          const size = Math.random() * 20 + 16;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          
          return (
            <motion.div
              key={index}
              className="flex items-center justify-center text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.02, 0.08, 0.02],
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                delay,
              }}
              style={{
                fontSize: `${size}px`,
              }}
            >
              {icon}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechBackgroundNew;
