'use client';

import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { easeOut } from 'framer-motion';

const projects = [
  {
    title: 'Reflect - Journal App',
    description: 'A personal journaling application built with Next.js, TypeScript, and Neon DB. Features include rich text editing, mood tracking, and secure user authentication.',
    image: '/images/projects/Journal.png',
    url: 'https://journal-app-blue-omega.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Neon DB', 'Tailwind CSS'],
    testimonial: {
      text: "A beautifully crafted journaling experience that makes daily reflection a joy. The clean interface and smooth performance make it a pleasure to use.",
      author: "Personal Project",
      role: "Developer & Designer"
    }
  },
  {
    title: 'Artivatic.ai',
    description: 'AI-powered insurance platform providing intelligent underwriting and risk assessment solutions.',
    image: '/images/projects/artivatic-preview.png',
    url: 'https://artivatic.ai',
    technologies: ['AI/ML', 'Insurance Tech', 'Cloud Architecture'],
    testimonial: {
      text: "Working with IgniteX transformed our digital presence. Their team delivered beyond our expectations.",
      author: "Layak Singh",
      role: "CEO, Artivatic.ai"
    }
  },
  {
    title: 'Fitsib',
    description: 'Comprehensive fitness platform connecting trainers with clients for personalized workout experiences.',
    image: '/images/projects/fitsib-preview.png',
    url: 'https://fitsib.com',
    technologies: ['React', 'Node.js', 'MongoDB'],
    testimonial: {
      text: "The team at IgniteX built us a robust platform that scales with our growing user base. Highly recommended!",
      author: "Rahul Sharma",
      role: "Founder, Fitsib"
    }
  }
];

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut
    },
  },
} as const;

const imageHover = {
  scale: 1.03,
  transition: {
    duration: 0.3,
    ease: easeOut
  }
} as const;

export default function WorkSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    console.log('Current project:', projects[currentIndex].title);
  }, [controls, isInView, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" ref={ref} className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={fadeIn}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-red-600">Work</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-red-600 mx-auto mb-6 md:mb-10"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                whileHover={imageHover}
              >
                <div className="aspect-video bg-gray-200 relative">
                  <Image 
                    src={projects[currentIndex].image} 
                    alt={`${projects[currentIndex].title} Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    onError={() => console.error(`Failed to load image for ${projects[currentIndex].title}`)}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR42mN8//8/AwAB/wNqPAAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                  <a 
                    href={projects[currentIndex].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-red-300 transition-colors text-sm md:text-base"
                  >
                    Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <div className="lg:pr-8 lg:pl-8">
                <h3 className="text-xl md:text-3xl font-bold mb-4 text-gray-900">{projects[currentIndex].title}</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{projects[currentIndex].description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {projects[currentIndex].technologies.map((tech) => (
                    <span key={tech} className="px-2 md:px-3 py-1 bg-white rounded-full text-xs md:text-sm font-medium text-gray-700 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {projects[currentIndex].testimonial && (
                  <motion.div 
                    className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-red-500"
                   initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: easeOut }}
                  >
                    <p className="text-gray-700 italic mb-4 text-sm md:text-base">&quot;{projects[currentIndex].testimonial.text}&quot;</p>
                    <div className="font-medium">
                      <div className="text-gray-900 text-sm md:text-base">{projects[currentIndex].testimonial.author}</div>
                      <div className="text-red-600 text-xs md:text-sm">{projects[currentIndex].testimonial.role}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

         {/* Left arrow */}
<div className="absolute left-0 top-1/2 -translate-y-1/2">
  <button
    onClick={handlePrev}
    className="p-2 md:p-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors backdrop-blur-md"
    aria-label="Previous project"
  >
    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
  </button>
</div>

{/* Right arrow */}
<div className="absolute right-0 top-1/2 -translate-y-1/2">
  <button
    onClick={handleNext}
    className="p-2 md:p-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors backdrop-blur-md"
    aria-label="Next project"
  >
    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-900" />
  </button>
</div>

        </div>
      </div>
    </section>
  );
}
