'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

type TeamMemberImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager' | string; // Allow string for now to match the data
};

type TeamMember = {
  name: string;
  role: string;
  image: string | TeamMemberImage;
  bio: string;
  alignment: string;
  social: {
    linkedin: string;
    twitter?: string;
    github?: string;
    email: string;
  };
  hasImage?: boolean;
};

// Dynamically import TeamCarousel with SSR disabled for better performance
const TeamCarousel = dynamic(() => import('./TeamCarousel'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center">Loading team...</div>
});

// Preload critical images
const preloadImages = [
  { src: '/images/Rahul.jpeg', as: 'image' },
  { src: '/images/team/tejaswini.jpg', as: 'image' },
  // Add other team member images here
];

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rahul Mahato',
      role: 'Founder & CTO',
      image: {
        src: '/images/Rahul.jpeg',
        width: 500,
        height: 500,
        alt: 'Rahul Mahato - Founder & CTO',
        priority: true // Preload above-the-fold images
      },
      bio: 'Full-stack developer with extensive experience in web development, DevOps, and cloud services. Specializes in building scalable applications using modern technologies. Proficient in both frontend and backend development, with expertise in testing, deployment, and infrastructure management. Passionate about implementing AI solutions and optimizing system performance.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:rahul@ignitex.com'
      },
      hasImage: true
    },
    {
      name: 'Tejaswini Gohil',
      role: 'Senior Tech Lead',
      image: {
        src: '/images/team/tejaswini.jpg',
        width: 500,
        height: 500,
        alt: 'Tejaswini Gohil - Senior Tech Lead',
        loading: 'lazy'
      },
      bio: 'Seasoned technical lead with a proven track record of delivering complex projects on time and within budget. Expert in system architecture, code reviews, and mentoring development teams. Specializes in maintaining high code quality standards and implementing best practices. Strong background in UI/UX implementation and performance optimization.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:tejaswini@ignitex.com'
      },
    },
    {
      name: 'Abhuday Pratap Singh',
      role: 'Co-Founder - Marketing & Performance',
      image: {
        src: '/images/team/Abhuday.jpeg',
        width: 500,
        height: 500,
        alt: 'Abhuday Pratap Singh - Co-Founder - Marketing & Performance',
        loading: 'lazy'
      },
      bio: 'Results-driven marketing strategist with expertise in digital marketing, brand management, and customer acquisition. Specializes in data-driven marketing campaigns, SEO, and conversion rate optimization. Proven track record of developing successful marketing strategies that drive business growth and increase market share.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:abhuday@ignitex.com'
      },
      hasImage: true
    },
    {
      name: 'Nitesh Tiwari',
      role: 'Content Creator Expert',
      image: {
        src: '/images/team/nitesh.jpg',
        width: 500,
        height: 500,
        alt: 'Nitesh Tiwari - Content Creator Expert',
        loading: 'lazy'
      },
      bio: 'Creative content strategist and digital storyteller with expertise in creating engaging multimedia content. Specializes in video production, social media content, and brand storytelling. Skilled in developing content strategies that increase audience engagement and brand awareness across multiple digital platforms.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:nitesh@ignitex.com'
      }
    },
    {
      name: 'Rohit Kumar',
      role: 'Software Testing & Automation Engineer',
      image: {
        src: '/images/team/rohit.jpg',
        width: 500,
        height: 500,
        alt: 'Rohit Kumar - Software Testing & Automation Engineer',
        loading: 'lazy'
      },
      bio: 'Experienced QA professional specializing in software testing and test automation. Proficient in designing and implementing automated test frameworks, API testing, and performance testing. Skilled in tools like Selenium, Appium, JUnit, and TestNG. Committed to ensuring software quality and delivering bug-free applications through comprehensive testing strategies.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:rohit@ignitex.tech'
      }
    },
  ];

  // Prepare team member data for the carousel
  const carouselMembers = teamMembers.map((member) => {
    const { name, role, bio, image } = member;
    let imageSrc: string;
    
    if (typeof image === 'string') {
      imageSrc = image.startsWith('http') ? image : `/images/team/${image.split('/').pop()}`;
    } else if (image && typeof image === 'object' && 'src' in image) {
      // TypeScript now knows image is TeamMemberImage here
      imageSrc = image.src;
    } else {
      // Fallback to a default image if the format is unexpected
      imageSrc = '/images/team/default.jpg';
    }
    
    return {
      name,
      role,
      image: imageSrc,
      bio
    };
  });

  return (
    <section className="bg-white pt-20">
      {/* Preload critical images */}
      {preloadImages.map((img, idx) => (
        <link 
          key={idx} 
          rel="preload" 
          href={img.src} 
          as={img.as as 'image' | 'script' | 'style' | 'font' | 'fetch' | 'document' | 'audio' | 'video' | 'track' | 'worker' | 'embed' | 'object'}
        />
      ))}
      
      {/* Carousel with Overlay Text */}
      <div className="w-full relative">
        <div className="h-64 md:h-80 w-full overflow-hidden">
          <TeamCarousel teamMembers={carouselMembers} />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90 mb-2">Our Team</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80">
              The brilliant minds behind IgniteX, driving innovation and excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate individuals working together to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                {member.image && typeof member.image === 'object' ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt || `${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={member.image.priority || false}
                    loading={(member.image.loading === 'eager' || member.image.loading === 'lazy') ? member.image.loading : 'lazy'}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-gray-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      {platform === 'twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      )}
                      {platform === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {platform === 'email' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
