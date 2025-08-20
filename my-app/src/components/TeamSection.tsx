'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const TeamCarousel = dynamic(() => import('./TeamCarousel'), {
  ssr: false,
});

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rahul Mahato',
      role: 'Founder & CTO',
      image: '/images/Rahul.jpeg',
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
      image: '/images/team/tejaswini.jpg',
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
      image: '/images/team/Abhuday.jpeg',
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
      image: '/images/team/nitesh.jpg',
      bio: 'Creative content strategist and digital storyteller with expertise in creating engaging multimedia content. Specializes in video production, social media content, and brand storytelling. Skilled in developing content strategies that increase audience engagement and brand awareness across multiple digital platforms.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:nitesh@ignitex.com'
      },
    },
  ];

  return (
    <section className="bg-white pt-20">
      {/* Carousel with Overlay Text */}
      <div className="w-full relative">
        <div className="h-64 md:h-80 w-full overflow-hidden">
          <TeamCarousel />
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
      
      {/* Team Members */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className={`flex flex-col ${member.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-2 md:gap-3`}
            >
              <div className="w-1/3 md:w-1/4">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xs">
                  {member.hasImage ? (
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-2/3 md:w-3/4">
                <div className={`${member.alignment === 'left' ? 'md:pl-1' : 'md:pr-1'}`}>
                  <h3 className="text-base font-bold text-gray-900 mb-0">{member.name}</h3>
                  <p className="text-xs text-red-600 font-medium mb-0.5">{member.role}</p>
                  <p className="text-[11px] text-gray-600 leading-tight mb-1.5 line-clamp-3">{member.bio}</p>
                  <div className="flex space-x-2">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform} 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-red-600 transition-colors text-lg"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        {platform === 'twitter' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {platform === 'linkedin' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                        {platform === 'email' && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
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
