"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  slug: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Tailored websites and web applications built using modern technologies to deliver strong performance and a smooth user experience.",
    longDescription:
      "At IgniteX, we design and develop websites and web applications that are visually appealing, reliable, and built to perform. Using technologies like Next.js, React, and Tailwind CSS, our team creates fast, responsive, and SEO-friendly solutions that support real business growth.",
    icon: "🌐",
    slug: "web-development",
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
    icon: "📈",
    slug: "digital-marketing",
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
    icon: "🤖",
    slug: "ai-saas",
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
    title: "CMS Integration",
    description:
      "Smooth CMS integrations that make managing and updating content simple and efficient.",
    longDescription:
      "We integrate flexible and user-friendly content management systems that give you full control over your content. Whether it’s WordPress, Strapi, or a custom-built CMS, we ensure managing your website is straightforward and intuitive.",
    icon: "🔄",
    slug: "cms-integration",
    features: [
      "WordPress Integration",
      "Headless CMS Solutions",
      "Custom Admin Panels",
      "Content Workflows",
      "Media Management",
      "User Permissions",
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "High-quality mobile applications built for both iOS and Android platforms.",
    longDescription:
      "We create reliable, high-performance mobile apps using React Native and Flutter, delivering smooth, native-like experiences across iOS and Android with a single, efficient codebase.",
    icon: "📱",
    slug: "mobile-apps",
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
    icon: "🔍",
    slug: "seo-services",
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
    title: "Creative Design",
    description:
      "Engaging visual designs that reflect your brand and capture attention.",
    longDescription:
      "Our creative design services focus on creating visuals that clearly communicate your brand story. From logos to marketing assets, we design with purpose to leave a lasting impression.",
    icon: "🎨",
    slug: "creative-design",
    features: [
      "Logo & Brand Identity",
      "Print & Digital Design",
      "Social Media Graphics",
      "Marketing Collaterals",
      "UI/UX Design",
      "Brand Guidelines",
    ],
  },
  {
    title: "Video Production",
    description:
      "Complete video production services, from initial concept to final delivery.",
    longDescription:
      "We create professional videos that bring your brand message to life, handling everything from concept development and scripting to filming, editing, and post-production.",
    icon: "🎬",
    slug: "video-production",
    features: [
      "Concept Development",
      "Scriptwriting",
      "Professional Filming",
      "Editing & Post-Production",
      "Motion Graphics",
      "Animation",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce platforms built to support sales and long-term growth.",
    longDescription:
      "We develop robust e-commerce solutions that combine seamless user experiences, secure payment systems, and conversion-focused designs to help you sell more online.",
    icon: "🛒",
    slug: "ecommerce-solutions",
    features: [
      "Online Store Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Mobile Optimization",
      "SEO for E-commerce",
      "Performance Analytics",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "Purpose-driven content designed to engage audiences and deliver measurable results.",
    longDescription:
      "Our content marketing approach blends storytelling with data-backed strategies to attract the right audience, build trust, and drive meaningful engagement.",
    icon: "✍️",
    slug: "content-marketing",
    features: [
      "Content Strategy",
      "Blog Writing",
      "Copywriting",
      "SEO Content",
      "Content Calendar",
      "Performance Analysis",
    ],
  },
  {
    title: "Brand Strategy",
    description:
      "Strategic brand development that creates strong connections with your audience.",
    longDescription:
      "We help shape your brand’s identity, voice, and positioning to ensure it resonates with your audience and stands out in a competitive market.",
    icon: "🎯",
    slug: "brand-strategy",
    features: [
      "Brand Positioning",
      "Messaging Strategy",
      "Competitive Analysis",
      "Target Audience Research",
      "Brand Voice & Tone",
      "Brand Guidelines",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "Thoughtful social media strategies that strengthen and grow your brand presence.",
    longDescription:
      "We plan and manage social media campaigns that boost brand awareness, encourage engagement, and drive conversions across today’s most impactful platforms.",
    icon: "📱",
    slug: "social-media-management",
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayServices: Service[];
  if (showAll) {
    displayServices = services;
  } else {
    displayServices = isMobile ? services.slice(0, 3) : services.slice(0, 6);
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
      },
    }),
  };

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
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-red-600">Reliable</span> Services You Can
            Count On
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our websites and applications are secure, performance-based, and
            creative. Our objective? To provide fast, scalable and easy-to-use
            solutions that enable students, companies, and people to flourish in
            the digital era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20"
            >
              <p className="text-lg text-gray-700 font-medium">
                We thoughtfully, creatively, and purposefully bring your ideas
                to life online, from blogs and portfolios to full-scale
                businesses and AI-powered applications.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                onClick={closeModal}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[9999]"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl mr-4">
                        {selectedService.icon}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedService.title}
                      </h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-500 transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <p className="text-gray-700 mb-6">
                    {selectedService.longDescription}
                  </p>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Ready to get started?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Contact us today to discuss your{" "}
                      {selectedService.title.toLowerCase()} needs and how we can
                      help bring your vision to life.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                    >
                      Get in Touch
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
