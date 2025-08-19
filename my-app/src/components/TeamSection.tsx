'use client';

import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rahul Kumar Mahato',
      role: 'Founder & Lead Developer',
      image: '/images/team/rahul.jpg',
      bio: 'Full-stack developer with a passion for creating elegant solutions to complex problems.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Alex Johnson',
      role: 'UI/UX Designer',
      image: '/images/team/alex.jpg',
      bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      social: {
        twitter: '#',
        linkedin: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Sarah Williams',
      role: 'Frontend Developer',
      image: '/images/team/sarah.jpg',
      bio: 'Passionate about building responsive and accessible web applications.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
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
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Meet Our <span className="text-red-600">Team</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="w-20 h-1 bg-red-600 mx-auto mb-10"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center text-4xl text-gray-400">
                  👤
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-red-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      {platform === 'twitter' && '🐦'}
                      {platform === 'linkedin' && '💼'}
                      {platform === 'github' && '💻'}
                      {platform === 'dribbble' && '🏀'}
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
