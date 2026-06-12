"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Globe, BarChart3, Bot, Smartphone, Search, Share2 } from "lucide-react";

interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  slug: string;
  href?: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Tailored websites and web applications built using modern technologies to deliver strong performance and a smooth user experience.",
    longDescription:
      "At IgniteX, we design and develop websites and web applications that are visually appealing, reliable, and built to perform. Using technologies like Next.js, React, and Tailwind CSS, our team creates fast, responsive, and SEO-friendly solutions that support real business growth.",
    icon: <Globe className="w-6 h-6" />,
    slug: "web-development",
    href: "/services/web-development",
    color: "#dc2626",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Responsive Design",
      "Performance Optimization",
      "SEO Implementation",
      "Ongoing Support",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Insight-driven marketing strategies designed to strengthen your online presence and attract the right audience.",
    longDescription:
      "Our digital marketing services focus on helping businesses grow online by increasing visibility, generating quality leads, and turning them into long-term customers through well-planned, multi-channel campaigns.",
    icon: <BarChart3 className="w-6 h-6" />,
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    color: "#ea580c",
    features: [
      "SEO & Content Strategy",
      "PPC & Social Media Ads",
      "Email Marketing",
      "Conversion Optimization",
      "Analytics & Reporting",
      "Marketing Automation",
    ],
  },
  {
    title: "AI & SaaS Solutions",
    description:
      "Custom-built AI solutions and scalable SaaS platforms designed to streamline and enhance your operations.",
    longDescription:
      "We develop smart, scalable SaaS products powered by AI and machine learning. From custom LLM-based applications to automation and data analytics platforms, our solutions are built to improve efficiency and support long-term growth.",
    icon: <Bot className="w-6 h-6" />,
    slug: "ai-saas",
    color: "#7c3aed",
    features: [
      "Custom AI/ML Solutions",
      "SaaS Product Development",
      "LLM Integration",
      "Process Automation",
      "Data Analytics & BI",
      "Cloud Infrastructure",
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "High-quality mobile applications built for both iOS and Android platforms.",
    longDescription:
      "We create reliable, high-performance mobile apps using React Native and Flutter, delivering smooth, native-like experiences across iOS and Android with a single, efficient codebase.",
    icon: <Smartphone className="w-6 h-6" />,
    slug: "mobile-apps",
    color: "#059669",
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Offline Support",
      "Push Notifications",
      "App Store Submission",
      "Ongoing Updates",
    ],
  },
  {
    title: "SEO Services",
    description:
      "Search engine optimization services designed to improve visibility and search rankings.",
    longDescription:
      "Our SEO services focus on growing organic traffic and improving search performance through proven, sustainable strategies tailored to your business goals.",
    icon: <Search className="w-6 h-6" />,
    slug: "seo-services",
    href: "/services/seo-services",
    color: "#d97706",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Performance Reporting",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "Thoughtful social media strategies that strengthen and grow your brand presence.",
    longDescription:
      "We plan and manage social media campaigns that boost brand awareness, encourage engagement, and drive conversions across today's most impactful platforms.",
    icon: <Share2 className="w-6 h-6" />,
    slug: "social-media-management",
    href: "/services/social-media-management",
    color: "#7c3aed",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Paid Advertising",
      "Engagement & Community Building",
      "Analytics & Reporting",
      "Influencer Partnerships",
    ],
  },
];

export default function ServicesSection({ showAll = false }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  let displayServices: Service[];
  if (showAll) {
    displayServices = services;
  } else {
    displayServices = isMobile ? services.slice(0, 3) : services.slice(0, 6);
  }

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const cardClasses =
              "group relative block h-full w-full bg-white rounded-2xl p-7 cursor-pointer border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 text-left";
            const cardContent = (
              <>
                {/* Colored top accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.color}10`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div
                  className="inline-flex items-center text-sm font-semibold transition-all duration-300 group-hover:gap-2"
                  style={{ color: service.color }}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </>
            );

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {service.href ? (
                  <Link href={service.href} className={cardClasses}>
                    {cardContent}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => openModal(service)}
                    className={cardClasses}
                  >
                    {cardContent}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closeModal}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[9999]"
              >
                {/* Modal header with color accent */}
                <div
                  className="p-6 border-b border-gray-100"
                  style={{ background: `linear-gradient(135deg, ${selectedService.color}08 0%, transparent 100%)` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${selectedService.color}15`,
                          color: selectedService.color,
                        }}
                      >
                        {selectedService.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedService.title}
                      </h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                  <h4 className="text-lg font-bold mb-4 text-gray-900">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${selectedService.color}15`, color: selectedService.color }}
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to discuss your {selectedService.title.toLowerCase()} needs?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-all duration-300"
                    >
                      Get in Touch <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
