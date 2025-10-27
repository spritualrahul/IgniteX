'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rahul Mahato',
      role: 'Founder',
      image: {
        src: '/images/Rahul.jpeg',
        width: 500,
        height: 500,
        alt: 'Rahul Mahato - Founder',
        // priority: true // Preload above-the-fold images
        loading: 'lazy',
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
      name: 'Abhuday Pratap Singh',
      role: 'Co-Founder - Marketing & Performance',
      image: {
        src: '/images/team/Abhuday.jpeg',
        width: 500,
        height: 400,
        alt: 'Abhuday Pratap Singh - Co-Founder - Marketing & Performance',
        loading: 'lazy'
      },
      bio: 'Results-driven marketing strategist with expertise in digital marketing, brand management, and customer acquisition. Specializes in data-driven marketing campaigns, SEO, and conversion rate optimization. Proven track record of developing successful marketing strategies that drive business growth and increase market share.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:abhuday@ignitex.com'
      },
      hasImage: true
    },

    {
      name: 'Tejaswini Gohil',
      role: 'Core Team Member – Technology',
      image: {
        src: '/images/team/Tejaswini.jpg',
        width: 500,
        height: 500,
        alt: 'Tejaswini Gohil - Core Team Member – Technology',
        loading: 'lazy'
      },
      bio: 'Seasoned technical lead with a proven track record of delivering complex projects on time and within budget. Expert in system architecture, code reviews, and mentoring development teams. Specializes in maintaining high code quality standards and implementing best practices. Strong background in UI/UX implementation and performance optimization.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:tejaswini@ignitex.com'
      },
    },
    {
      name: 'Trinath panigrahi',
      role: 'Core Team Member – Business',
      image: {
        src: '/images/team/Trinath.png',
        width: 500,
        height: 500,
        alt: 'Trinath panigrahi - Core Team Member – Business',
        loading: 'lazy'
      },
      bio: 'Results-driven Business and Data Analyst with expertise in Data Analysis, Business Intelligence, process optimization, and automation. Skilled in bridging the gap between business objectives and technical execution, ensuring on-time and within-budget delivery. Proficient in Agile methodologies, stakeholder communication, and process optimization to enhance project efficiency and business value.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:trinath@ignitex.com'
      }
    },
    
    {
      name: 'Nitesh Sahani',
      role: 'Content Creator Expert',
      image: {
        src: '/images/team/Nitesh.jpg',
        width: 500,
        height: 500,
        alt: 'Nitesh Tiwari - Content Creator Expert',
        loading: 'lazy'
      },
      bio: 'Creative content strategist and digital storyteller with expertise in creating engaging multimedia content. Specializes in video production, social media content, and brand storytelling. Skilled in developing content strategies that increase audience engagement and brand awareness across multiple digital platforms.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:nitesh@ignitex.com'
      }
    },
    
  ];

  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            A team of passionate individuals dedicated to delivering exceptional results.
          </p>
        </motion.div>

        {/* Team Banner Image */}
        {/* <div className="relative w-full h-96 mb-20 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/team/Team.jpg"
            alt="Our Amazing Team"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* Team Members List */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = typeof member.image === 'string' 
              ? member.image.startsWith('http') 
                ? member.image 
                : `/images/team/${member.image.split('/').pop()}`
              : member.image?.src || '';
            
            const imageAlt = typeof member.image === 'string' 
              ? member.name 
              : member.image?.alt || member.name;

            return (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
               {/* Member Image */}
<div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg">
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={500}
      height={500}
      className="object-cover w-full h-full"
      sizes="(max-width: 768px) 100vw, 50vw"
      loading="lazy"
      onError={(e) => {
        // Fallback to a placeholder image if the main image fails to load
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = '/images/placeholder-user.jpg';
      }}
    />
  </div>
</div>

                {/* Member Details */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  <p className="text-red-600 text-lg font-medium mb-6">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-red-600 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.48 0-.236-.008-.866-.013-1.7-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025.798-.223 1.654-.334 2.505-.338.85.004 1.707.115 2.505.338 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </a>
                    )}
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;