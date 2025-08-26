'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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

import { easeOut } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: easeOut
    },
  }),
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="work" ref={ref} className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-red-600">Work</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={fadeIn}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                whileHover={imageHover}
              >
                <div className="aspect-video bg-gray-200 relative">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-red-300 transition-colors"
                  >
                    Visit Website <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.testimonial && (
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-700 italic mb-4">&quot;{project.testimonial.text}&quot;</p>
                    <div className="font-medium">
                      <div className="text-gray-900">{project.testimonial.author}</div>
                      <div className="text-red-600 text-sm">{project.testimonial.role}</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
