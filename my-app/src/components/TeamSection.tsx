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
      bio: 'Visionary leader and technology expert with a passion for innovation and building scalable solutions that drive business growth.',
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
      bio: 'Technical expert with extensive experience in system architecture and leading development teams to deliver high-quality software solutions.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:tejaswini@ignitex.com'
      },
    },
    {
      name: 'Abhuday Pratap Singh',
      role: 'Co-Founder - Marketing & Performance',
      image: '/images/team/Abhuday.jpeg',
      bio: 'Digital marketing strategist and SEO expert focused on driving growth through data-driven marketing and performance optimization.',
      alignment: 'left',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'mailto:abhuday@ignitex.com'
      },
      hasImage: true
    },
    {
      name: 'Rakhi Mahato',
      role: 'HR Manager',
      image: '/images/team/rakhi.jpg',
      bio: 'Dedicated HR professional focused on building strong teams and fostering a positive work culture that drives employee engagement and satisfaction.',
      alignment: 'right',
      social: {
        linkedin: 'https://linkedin.com',
        email: 'mailto:rakhi@ignitex.com'
      },
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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
                        {platform === 'twitter' && '🐦'}
                        {platform === 'linkedin' && '💼'}
                        {platform === 'github' && '💻'}
                        {platform === 'email' && '✉️'}
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
