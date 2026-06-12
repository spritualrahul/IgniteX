'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[400px] bg-slate-100 animate-pulse rounded-lg" /> }
);
import { Navbar } from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Search,
  User,
  Layers,
  Lightbulb,
  Pencil,
  Code,
  Rocket,
  BarChart3,
  Package,
  Smile,
  TrendingUp,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbListSchema, ServiceSchema } from '@/components/JsonLd';

const heroFeatures = [
  { icon: <User className="w-5 h-5 text-red-600" />, title: 'User-Centered Design' },
  { icon: <Smartphone className="w-5 h-5 text-red-600" />, title: 'Responsive Across Devices' },
  { icon: <Layers className="w-5 h-5 text-red-600" />, title: 'Performance Optimized' },
  { icon: <Search className="w-5 h-5 text-red-600" />, title: 'SEO Friendly' },
];

const designSolutions = [
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture attention, generate leads, and boost conversions.',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    textColor: 'hover:text-red-500',
    preview: (
      <div className="w-full h-28 bg-gray-50 border border-gray-100 rounded-t-lg p-2 overflow-hidden flex flex-col gap-1.5">
        <div className="flex items-center gap-1 border-b border-gray-100 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex flex-col items-center gap-1 mt-1 text-center">
          <div className="w-16 h-2 bg-gray-300 rounded mx-auto" />
          <div className="w-24 h-1 bg-gray-200 rounded mx-auto" />
          <div className="w-10 h-3 bg-red-500 rounded mt-1" />
        </div>
      </div>
    ),
  },
  {
    title: 'Business Websites',
    description: 'Professional websites that build credibility, showcase your services, and help your business grow online.',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    textColor: 'hover:text-orange-500',
    preview: (
      <div className="w-full h-28 bg-gray-50 border border-gray-100 rounded-t-lg p-2 overflow-hidden flex flex-col gap-1.5">
        <div className="flex items-center gap-1 border-b border-gray-100 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex gap-2">
          <div className="w-1/3 flex flex-col gap-1.5">
            <div className="w-full h-3 bg-gray-200 rounded" />
            <div className="w-3/4 h-1 bg-gray-200 rounded" />
          </div>
          <div className="w-2/3 h-14 bg-gray-200 rounded" />
        </div>
      </div>
    ),
  },
  {
    title: 'E-Commerce Websites',
    description: 'Secure, scalable, and feature-rich e-commerce stores that deliver seamless shopping experiences and drive sales.',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
    textColor: 'hover:text-emerald-500',
    preview: (
      <div className="w-full h-28 bg-gray-50 border border-gray-100 rounded-t-lg p-2 overflow-hidden flex flex-col gap-1.5">
        <div className="flex items-center gap-1 border-b border-gray-100 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="grid grid-cols-3 gap-1 mt-0.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-gray-100 rounded p-1 flex flex-col gap-1">
              <div className="w-full h-7 bg-gray-100 rounded" />
              <div className="w-1/2 h-1 bg-emerald-500 rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'SaaS Websites',
    description: 'Modern SaaS websites that communicate value, build trust, and convert visitors into long-term users.',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    textColor: 'hover:text-blue-500',
    preview: (
      <div className="w-full h-28 bg-gray-50 border border-gray-100 rounded-t-lg p-2 overflow-hidden flex flex-col gap-1.5">
        <div className="flex items-center gap-1 border-b border-gray-100 pb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>
        <div className="flex gap-1.5 flex-1">
          <div className="w-6 bg-white border border-gray-100 rounded p-0.5 flex flex-col gap-1">
            <div className="w-full h-1 bg-blue-500 rounded" />
            <div className="w-full h-1 bg-gray-200 rounded" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full h-7 bg-white border border-gray-100 rounded p-1 flex items-end gap-0.5">
              <div className="w-1 h-3 bg-blue-400 rounded-t" />
              <div className="w-1 h-5 bg-blue-500 rounded-t" />
              <div className="w-1 h-2 bg-blue-300 rounded-t" />
              <div className="w-1 h-4 bg-blue-400 rounded-t" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const designApproach = [
  { num: '01', title: 'Discover', desc: 'We understand your goals, audience, and business requirements.', icon: <Lightbulb className="w-6 h-6 text-red-500" />, bg: 'bg-red-50' },
  { num: '02', title: 'Design', desc: 'We create wireframes and stunning UI/UX designs tailored to your brand.', icon: <Pencil className="w-6 h-6 text-orange-500" />, bg: 'bg-orange-50' },
  { num: '03', title: 'Develop', desc: 'We build fast, secure, and responsive websites using modern technologies.', icon: <Code className="w-6 h-6 text-emerald-500" />, bg: 'bg-emerald-50' },
  { num: '04', title: 'Launch', desc: 'We test thoroughly and deploy your website for maximum performance.', icon: <Rocket className="w-6 h-6 text-purple-500" />, bg: 'bg-purple-50' },
  { num: '05', title: 'Support', desc: 'We provide ongoing support and optimization to help you grow.', icon: <BarChart3 className="w-6 h-6 text-rose-500" />, bg: 'bg-rose-50' },
];

const projects = [
  {
    title: 'Stillwater Advisory',
    description: 'An elegant, immersive digital showcase for Stillwater Advisory, a specialized hospitality consulting firm. Built to present their portfolio of iconic, sanctuary hospitality spaces with full-bleed premium visuals, custom grid systems, and clean layout structures.',
    image: '/images/projects/stillwater.webp',
    url: 'https://stillwater-advisory.eu/',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Premium UX'],
    testimonial: {
      text: "IgniteX delivered an absolutely stunning website that perfectly conveys our focus on high-end sanctuary hospitality. The response from our clients has been incredibly positive.",
      author: "Stillwater Advisory Team",
      role: "Managing Partners"
    }
  },
  {
    title: 'Bacchus Restaurant',
    description: 'A premium, visually-rich website for Bacchus Restaurant, showcasing their fine Mediterranean dining menus, elegant wine lists, gallery, and online reservation capabilities with a responsive, high-end design.',
    image: '/images/projects/bacchus.webp',
    url: 'https://www.bacchusrestaurant.ie/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    testimonial: {
      text: "The website designed by IgniteX captures the upscale, inviting atmosphere of our restaurant perfectly. Our customers love the seamless menu browsing and online booking experience.",
      author: "Bacchus Management",
      role: "Owner, Bacchus Restaurant"
    }
  },
  {
    title: 'ONS Clothing',
    description: 'A sleek, modern e-commerce storefront for ONS Clothing, featuring high-quality product grids, curated brand collections, interactive product filters, and a seamless checkout process.',
    image: '/images/projects/onsclothing.webp',
    url: 'https://onsclothing.com/',
    technologies: ['Next.js', 'Shopify API', 'Tailwind CSS', 'Headless E-Commerce'],
    testimonial: {
      text: "IgniteX transformed our online store into a modern, fast, and highly engaging shopping experience. Our conversion rates have improved significantly since the redesign.",
      author: "ONS Clothing Team",
      role: "E-Commerce Director"
    }
  },
  {
    title: 'Reflect - Journal App',
    description: 'A personal journaling application built with Next.js, TypeScript, and Neon DB. Features include rich text editing, mood tracking, and secure user authentication.',
    image: '/images/projects/Journal.webp',
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
    image: '/kalam.webp',
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
    image : "/edutrack.webp",
    url : "https://edutrack-frontend-seven.vercel.app/",
    technologies : ["FastAPI", "PostgreSQL", "Socket.io", "Next js, neon db"],
    testimonial : {
      text : "EduTrack is a game-changer for our school. It has simplified our administrative tasks and improved communication between teachers and parents. The interface is clean and easy to use, and the features are exactly what we needed.",
      author : "IgniteX",
      role : "A product of IgniteX"
    }
  }
];

const stats = [
  { icon: <Package className="w-6 h-6 text-red-500" />, val: '100+', label: 'Websites Delivered' },
  { icon: <Smile className="w-6 h-6 text-red-500" />, val: '98%', label: 'Client Satisfaction' },
  { icon: <TrendingUp className="w-6 h-6 text-red-500" />, val: '5+', label: 'Years Of Experience' },
  { icon: <Headphones className="w-6 h-6 text-red-500" />, val: '24/7', label: 'Support Available' },
];

export default function WebDevContent() {
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
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'Website Development', url: 'https://www.ignitexsolution.com/services/web-development' },
        ]}
      />
      <ServiceSchema
        name="Website Development Services"
        description="Professional website development services to create fast, modern, and high-converting websites that drive business growth."
        url="https://www.ignitexsolution.com/services/web-development"
      />

      <main className="min-h-screen bg-[#fcfdfd]">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-36 pb-20 max-w-[1400px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

            {/* Left Info Column */}
            <div className="lg:col-span-4 flex flex-col justify-center text-left">
              <span className="text-red-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Web Design Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 leading-[1.15] mb-6">
                Modern Websites.<br />
                Powerful Impressions.
              </h1>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-8">
                We design visually stunning, user-friendly, and high-performing websites that not only look great but also drive real results for your business.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                {heroFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-gray-800 font-medium text-xs md:text-sm">{f.title}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="#portfolio"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md shadow-red-600/10 flex items-center gap-2"
                >
                  Explore Our Work <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-600 font-semibold text-sm flex items-center gap-1.5 transition-colors"
                >
                  Discuss Your Project <ArrowRight size={16} className="text-red-600" />
                </Link>
              </div>
            </div>

            {/* Right — Lottie Animation */}
            <div className="lg:col-span-8 flex items-center justify-end">
              <DotLottieReact
                src="https://lottie.host/aaa9291d-4dbf-4188-9c58-97c8559ec355/GVwOkIZKCU.lottie"
                loop
                autoplay
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-red-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">What We Design</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Web Design Solutions For <span className="text-red-600">Every Need</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                From simple landing pages to complex web platforms, we design experiences that engage, convert, and scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSolutions.map((sol, index) => (
                <div key={index} className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 transition-all duration-300">
                  <div className="mb-5 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                    {sol.preview}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${sol.iconBg} flex items-center justify-center shrink-0`}>
                      <svg className={`w-4 h-4 ${sol.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h3 className={`text-base font-bold text-gray-900 ${sol.textColor} transition-colors`}>{sol.title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow">{sol.description}</p>
                  <Link href="/contact" className={`inline-flex items-center gap-1 text-xs font-bold ${sol.iconColor} group-hover:gap-1.5 transition-all`}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Approach Section */}
        <section className="py-24 border-t border-gray-100 bg-[#fcfdfd]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Design Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {designApproach.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative group">
                  {index < 4 && (
                    <div className="hidden md:block absolute top-10 -right-3 translate-x-1/2 text-gray-300 z-10">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-4 border border-gray-50 hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className="text-xs text-gray-400 font-bold mb-1">{step.num}. {step.title}</span>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-red-600 text-xs font-semibold uppercase tracking-[0.2em] mb-2 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Websites That <span className="text-red-600">Drive Results</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects and see how we&apos;ve helped businesses transform their digital presence.
              </p>
            </div>

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
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
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
                    <div className="relative p-6 rounded-xl border border-gray-100 bg-gray-50">
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

        {/* Stats Section */}
        <section className="py-12 border-t border-b border-gray-100 bg-[#fcfdfd]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.val}</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-[0.05em]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
