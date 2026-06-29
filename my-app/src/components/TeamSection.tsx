'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Rocket,
  Smile,
  Star,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

type TeamMemberImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
};

type CardTheme = {
  badge: string;
  accent: string;
  imageAccent: string;
  glow: string;
  plus: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: TeamMemberImage;
  bio: string;
  skills: string[];
  theme?: CardTheme;
  imagePosition?: string;
  imageStyle?: React.CSSProperties;
  social: {
    linkedin: string;
    github?: string;
    instagram?: string;
    email: string;
  };
};

const cardThemes: CardTheme[] = [
  {
    badge: 'bg-red-50 text-red-600',
    accent: 'bg-red-500',
    imageAccent: 'from-red-500 to-rose-600',
    glow: 'from-white via-white to-white',
    plus: 'bg-red-500 hover:bg-red-600',
  },
  {
    badge: 'bg-violet-50 text-violet-600',
    accent: 'bg-violet-500',
    imageAccent: 'from-violet-500 to-purple-600',
    glow: 'from-white via-white to-white',
    plus: 'bg-violet-500 hover:bg-violet-600',
  },
  {
    badge: 'bg-orange-50 text-orange-600',
    accent: 'bg-orange-500',
    imageAccent: 'from-orange-400 to-orange-600',
    glow: 'from-white via-white to-white',
    plus: 'bg-orange-500 hover:bg-orange-600',
  },
  {
    badge: 'bg-teal-50 text-teal-600',
    accent: 'bg-teal-500',
    imageAccent: 'from-teal-400 to-emerald-500',
    glow: 'from-white via-white to-white',
    plus: 'bg-teal-500 hover:bg-teal-600',
  },
  {
    badge: 'bg-blue-50 text-blue-600',
    accent: 'bg-blue-500',
    imageAccent: 'from-blue-500 to-indigo-600',
    glow: 'from-white via-white to-white',
    plus: 'bg-blue-500 hover:bg-blue-600',
  },
];

const badgeColors = [
  'bg-red-100 text-red-700 border-red-200',
  'bg-violet-100 text-violet-700 border-violet-200',
  'bg-amber-100 text-amber-700 border-amber-200',
  'bg-emerald-100 text-emerald-700 border-emerald-200',
  'bg-sky-100 text-sky-700 border-sky-200',
  'bg-rose-100 text-rose-700 border-rose-200',
  'bg-indigo-100 text-indigo-700 border-indigo-200',
];

const teamStats: { value: string; label: string; icon: LucideIcon }[] = [
  {
    value: '12+',
    label: 'Team Members',
    icon: UsersRound,
  },
  {
    value: '50+',
    label: 'Projects Delivered',
    icon: Star,
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: Smile,
  },
  {
    value: '5+',
    label: 'Years of Excellence',
    icon: Rocket,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Rahul Kumar Mahato',
    role: 'Founder & CEO',
    image: { 
      src: '/images/team/Rahul.png',    
      width: 500,
      height: 500,
      alt: 'Rahul Kumar Mahato - Founder & CEO',
      priority: true,
      loading: 'eager',
    },
    bio: 'Leading IgniteX\'s vision, technology strategy, and product innovation. Passionate about building scalable digital solutions, AI-powered products, and exceptional user experiences.',
    skills: ['Next.js', 'Node.js', 'AWS', 'AI'],
    imagePosition: '30% center',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Abhuday Pratap Singh',
    role: 'Co-Founder & Growth Director',
    image: {
      src: '/images/team/Abhuday.webp',
      width: 500,
      height: 500,
      alt: 'Abhuday Pratap Singh - Co-Founder & Growth Director',
      loading: 'lazy',
    },
    bio: 'Driving business growth through performance marketing, brand strategy, SEO, and customer acquisition initiatives.',
    skills: ['Digital Marketing', 'SEO', 'Brand Strategy', 'Growth'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Tejaswini Gohil',
    role: 'Head of Engineering',
    image: {
      src: '/images/team/Tejaswini.png',
      width: 500,
      height: 500,
      alt: 'Tejaswini Gohil - Head of Engineering',
      loading: 'lazy',
    },
    bio: 'Leading technology execution, system architecture, and scalable product development across web and digital platforms.',
    skills: ['React', 'TypeScript', 'System Design', 'AI'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://www.linkedin.com/in/tejaswini-g-43751429b/',
      github: 'https://github.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Trinath Panigrahi',
    role: 'Director of Strategy & PMO',
    image: {
      src: '/images/team/Trinath.webp',
      width: 500,
      height: 500,
      alt: 'Trinath Panigrahi - Director of Strategy & PMO',
      loading: 'lazy',
    },
    bio: 'Overseeing business processes, project management, data analytics, and operational excellence to ensure successful project delivery.',
    skills: ['Data Analysis', 'Power BI', 'SQL', 'Project Management'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://www.linkedin.com/in/trinath-panigrahi-07602b118/',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Nitesh Sahani',
    role: 'Content & Growth Lead',
    image: {
      src: '/images/team/Nitesh.webp',
      width: 500,
      height: 500,
      alt: 'Nitesh Sahani - Content & Growth Lead',
      loading: 'lazy',
    },
    bio: 'Crafting compelling brand stories, content strategies, and digital campaigns that engage audiences and drive growth.',
    skills: ['Content Strategy', 'Social Media', 'Branding', 'Digital Campaigns'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Saurabh Pandey',
    role: 'Finance & Business Strategy Lead',
    image: {
      src: '/Saurav.webp',
      width: 500,
      height: 500,
      alt: 'Saurabh Pandey - Finance & Business Strategy Lead',
      loading: 'lazy',
    },
    bio: 'Supporting strategic decision-making through financial planning, market analysis, and sustainable growth initiatives.',
    skills: ['Financial Planning', 'Business Strategy', 'Market Analysis', 'MBA Finance'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Tannu Vats',
    role: 'Creative Design Lead',
    image: {
      src: '/Tannu.webp',
      width: 500,
      height: 500,
      alt: 'Tannu Vats - Creative Design Lead',
      loading: 'lazy',
    },
    bio: 'Creating impactful visual identities, brand experiences, and creative assets that strengthen client brands.',
    skills: ['Graphic Design', 'Branding', 'Illustrator', 'Photoshop'],
    imagePosition: 'center',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'contact@ignitexsolution.com',
    },
  },
  {
    name: 'Rakhi Kumari',
    role: 'Chief People & Operations Officer',
    image: {
      src: '/images/team/Rakhi.webp',
      width: 500,
      height: 500,
      alt: 'Rakhi Kumari - Chief People & Operations Officer',
      loading: 'lazy',
    },
    bio: 'Building strong teams, managing talent, and ensuring operational excellence across the organization.',
    skills: ['HR Strategy', 'Operations', 'Talent Acquisition', 'Leadership'],
    imagePosition: 'center top',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'contact@ignitexsolution.com',
    },
  },
];

const getTheme = (index: number, member: TeamMember) => member.theme ?? cardThemes[index % cardThemes.length];

const getMailLink = (email: string) => (email.startsWith('mailto:') ? email : `mailto:${email}`);

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const theme = getTheme(index, member);
  const socialLinks = [
    { label: `${member.name} on LinkedIn`, href: member.social.linkedin, icon: Linkedin },
    { label: `Email ${member.name}`, href: getMailLink(member.social.email), icon: Mail },
    member.social.github
      ? { label: `${member.name} on GitHub`, href: member.social.github, icon: Github }
      : null,
    member.social.instagram
      ? { label: `${member.name} on Instagram`, href: member.social.instagram, icon: Instagram }
      : null,
  ].filter(Boolean) as { label: string; href: string; icon: LucideIcon }[];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className={`group relative flex w-full basis-[min(100%,436px)] flex-col overflow-hidden rounded-[18px] border border-white/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.16)] sm:flex-row lg:max-w-[436px]`}
    >
      <div className="pointer-events-none absolute right-8 top-7 grid grid-cols-5 gap-1 opacity-45">
        {Array.from({ length: 20 }).map((_, dotIndex) => (
          <span key={dotIndex} className="h-1 w-1 rounded-full bg-slate-300" />
        ))}
      </div>

      <div className={`absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-gradient-to-br ${theme.imageAccent} opacity-95 blur-[1px]`} />

      <div
        className="relative h-64 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-[280px] sm:w-[44%]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0% 100%)',
        }}
      >
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          priority={member.image.priority}
          loading={member.image.priority ? undefined : member.image.loading}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: member.imagePosition ?? 'center', ...member.imageStyle }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 210px"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 py-6 sm:px-5 sm:py-5 lg:px-6">
        <span className={`mb-2 w-fit rounded-[4px] border px-3 py-1 text-[14px] font-bold ${badgeColors[index % badgeColors.length]}`}>
          {member.role}
        </span>

        <h3 className="text-[23px] font-black leading-tight tracking-normal text-slate-950">
          {member.name}
        </h3>

        <p className="mt-3 text-[12.5px] font-semibold leading-[1.5] text-slate-700">
          {member.bio}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow-[0_8px_20px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition hover:text-red-500 hover:ring-red-100"
                aria-label={label}
              >
                <Icon className="h-4 w-4" strokeWidth={2.2} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </motion.article>
  );
};

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative isolate overflow-hidden bg-white pb-24 pt-[130px]"
    >
      <div className="relative">
        <div className="relative h-[690px] w-full overflow-hidden sm:h-[718px]">
          <Image
            src="/team.webp"
            alt="IgniteX Team"
            fill
            priority
            className="translate-x-[8%] translate-y-[34px] scale-[1.08] object-cover object-[center_58%] brightness-[1.04] saturate-[0.96]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.95)_38%,rgba(255,255,255,0.86)_100%)] sm:bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.96)_10%,rgba(255,255,255,0.75)_20%,rgba(255,255,255,0.35)_30%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0)_55%)]" />


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute left-4 top-[146px] max-w-[430px] sm:left-8 md:left-12 lg:left-[50px]"
          >
            <p className="text-[13px] font-black uppercase tracking-[0.14em] text-red-600">
              Our Strength
            </p>
            <h1 className="mt-8 text-[56px] font-black leading-[1.03] tracking-[-0.06em] text-slate-950 sm:text-[68px] md:text-[76px]">
              Meet Our <span className="block text-red-500">Team</span>
            </h1>
            <p className="mt-6 max-w-[390px] text-[16px] font-medium leading-[1.72] text-slate-600 sm:text-[17px]">
              A group of passionate creators, problem-solvers and builders working together to turn ideas into exceptional digital experiences.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-flex h-[52px] items-center gap-3 rounded-[8px] bg-slate-950 px-[20px] text-[14px] font-extrabold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Work With Us
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 mx-auto -mt-[26px] grid w-[calc(100%-2rem)] max-w-[1356px] overflow-hidden rounded-[18px] border border-white/90 bg-white/95 px-5 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.11)] backdrop-blur-md sm:w-[calc(100%-4rem)] sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-14 lg:py-14"
        >
          {teamStats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-5 py-4 sm:px-6 lg:border-r lg:border-slate-200 lg:py-0 lg:last:border-r-0"
            >
              <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-100/70 text-red-500">
                <Icon className="h-7 w-7" strokeWidth={2.15} />
              </span>
              <span>
                <span className="block text-[26px] font-black leading-none tracking-[-0.03em] text-slate-950">
                  {value}
                </span>
                <span className="mt-2 block text-[15px] font-medium leading-none text-slate-600">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-20 flex max-w-[1360px] flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
