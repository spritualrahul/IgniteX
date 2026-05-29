'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { title } from 'process';

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
    title: 'Kalam Study Hall',
    description: 'A modern educational platform for Kalam Study Hall in Jamshedpur, featuring course listings, workshop schedules, interactive category filters, and a responsive hero section with an engaging visual design.',
    image: '/kalam.png',
    url: 'https://www.kalamstudyhall.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    testimonial: {
      text: "IgniteX delivered a professional, fast, and visually stunning website that perfectly represents our educational mission. The responsive design works flawlessly across all devices.",
      author: "Dhivya Mohan",
      role: "Founder, Kalam Study Hall"
    }
  },
  {
    title : "Edutrack",
    description : "EduTrack is a comprehensive school management system designed to streamline administrative tasks and enhance the educational experience for schools, teachers, and parents.",
    image : "/edutrack.png",
    url : "https://edutrack-frontend-seven.vercel.app/",
    technologies : ["FastAPI", "PostgreSQL", "Socket.io", "Next js, neon db"],
    testimonial : {
      text : "EduTrack is a game-changer for our school. It has simplified our administrative tasks and improved communication between teachers and parents. The interface is clean and easy to use, and the features are exactly what we needed.",
      author : "IgniteX",
      role : "A product of IgniteX"
    }
  }
];

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 8000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNav = (direction: 'prev' | 'next') => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
    startAutoPlay();
  };

  const project = projects[currentIndex];

  return (
    <section
      id="work"
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-white"
    >
      {/* Subtle diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-3 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 0%, #dc262610 100%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-500/50" />
            <span className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">Portfolio</span>
            <div className="h-px w-12 bg-red-500/50" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Our <span className="text-red-500">Work</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Project Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Project Image */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gray-100 relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR42mN8//8/AwAB/wNqPAAAAABJRU5ErkJggg=="
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Visit button overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                  >
                    Visit Website <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <h3
                className="text-3xl md:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {project.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-base">
                {project.description}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 bg-gray-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div
                  className="relative p-6 rounded-xl border border-gray-100 bg-gray-50"
                >
                  <div className="absolute -top-3 left-6 px-2 text-red-500 text-2xl font-serif bg-gray-50">
                    &ldquo;
                  </div>
                  <p className="text-gray-600 italic text-sm leading-relaxed mb-4">
                    {project.testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)' }}
                    >
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-gray-900 font-semibold text-sm">{project.testimonial.author}</span>
                      <span className="text-gray-500 text-xs block">{project.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => handleNav('prev')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-500/50 hover:bg-red-50 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setCurrentIndex(idx);
                  startAutoPlay();
                }}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-2 bg-red-500'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleNav('next')}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-red-600 hover:border-red-500/50 hover:bg-red-50 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
