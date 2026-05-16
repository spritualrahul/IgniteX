'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';

/* ── Types ── */
interface JobPosition {
  id: string;
  title: string;
  department: string;
  departmentColor: string;
  type: 'Internship' | 'Full-Time';
  duration: string;
  experience: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

/* ── Data ── */
const jobs: JobPosition[] = [
  {
    id: 'full-stack-intern',
    title: 'Full Stack Developer Intern',
    department: 'Engineering',
    departmentColor: '#DC2626',
    type: 'Internship',
    duration: '3 Months',
    experience: 'Fresher',
    location: 'Remote',
    description: 'Build real-world applications across the full stack using React, Next.js, and Node.js alongside our senior engineers.',
    responsibilities: ['Develop web apps with React/Next.js and Node.js', 'Write clean, tested, well-documented code', 'Collaborate on responsive UI implementations', 'Work with REST APIs and databases'],
    requirements: ['Pursuing or completed CS/IT degree', 'Basic HTML, CSS, JavaScript knowledge', 'Familiarity with React or similar framework', 'Strong communication skills'],
  },
  {
    id: 'frontend-nextjs-intern',
    title: 'Frontend Developer Intern — Next.js',
    department: 'Engineering',
    departmentColor: '#DC2626',
    type: 'Internship',
    duration: '3 Months',
    experience: 'Fresher',
    location: 'Remote',
    description: 'Specialize in building performant, pixel-perfect user interfaces with Next.js and modern CSS frameworks.',
    responsibilities: ['Build UI components with Next.js & Tailwind CSS', 'Implement responsive, cross-device designs', 'Optimize Core Web Vitals & performance', 'Integrate frontend with backend APIs'],
    requirements: ['Pursuing or completed CS/IT degree', 'Basic React.js and TypeScript knowledge', 'Understanding of responsive design', 'Attention to visual detail'],
  },
  {
    id: 'backend-fastapi-intern',
    title: 'Backend Developer Intern — FastAPI & Python',
    department: 'Engineering',
    departmentColor: '#DC2626',
    type: 'Internship',
    duration: '3 Months',
    experience: 'Fresher',
    location: 'Remote',
    description: 'Design and build robust APIs with Python and FastAPI. Work with databases, auth systems, and cloud deployments.',
    responsibilities: ['Design RESTful APIs using FastAPI', 'Work with PostgreSQL/MongoDB', 'Implement auth and authorization', 'Write unit tests and API docs'],
    requirements: ['Pursuing or completed CS/IT degree', 'Basic Python proficiency', 'SQL and database fundamentals', 'Familiarity with Git'],
  },
  {
    id: 'graphic-designer-intern',
    title: 'Graphic Designer Intern',
    department: 'Design',
    departmentColor: '#7C3AED',
    type: 'Internship',
    duration: '3 Months',
    experience: 'Fresher',
    location: 'Remote',
    description: 'Create compelling visual assets for digital campaigns, social media, and brand collateral for our clients.',
    responsibilities: ['Design social media graphics and marketing assets', 'Create brand identity materials and presentations', 'Develop visual concepts for client campaigns', 'Maintain brand consistency across deliverables'],
    requirements: ['Pursuing or completed degree in Design/Visual Arts', 'Proficiency in Adobe Creative Suite or Canva', 'Strong sense of color theory and typography', 'Portfolio of design work (academic or personal)'],
  },
  {
    id: 'figma-designer-intern',
    title: 'UI/UX Designer Intern — Figma',
    department: 'Design',
    departmentColor: '#7C3AED',
    type: 'Internship',
    duration: '3 Months',
    experience: 'Fresher',
    location: 'Remote',
    description: 'Design intuitive user interfaces and interactive prototypes in Figma for web and mobile applications.',
    responsibilities: ['Create wireframes, mockups, and prototypes in Figma', 'Design responsive UI for web and mobile apps', 'Build and maintain reusable component libraries', 'Conduct basic user research and usability testing'],
    requirements: ['Pursuing or completed degree in Design/HCI', 'Working knowledge of Figma', 'Understanding of UI/UX design principles', 'Portfolio showcasing UI/UX projects'],
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    department: 'Sales',
    departmentColor: '#D97706',
    type: 'Full-Time',
    duration: 'Permanent',
    experience: '1+ Year',
    location: 'Jamshedpur',
    description: 'Drive business growth by connecting our digital solutions with businesses. Build relationships and close deals.',
    responsibilities: ['Identify and reach out to potential clients', 'Present and pitch IgniteX services', 'Meet monthly and quarterly sales targets', 'Prepare proposals and sales reports'],
    requirements: ['1+ year sales experience (IT/digital preferred)', 'Excellent communication and negotiation', 'Self-motivated, results-driven approach', 'Bachelor\'s degree in any discipline'],
  },
];

const departments = ['All', 'Engineering', 'Design', 'Sales'];

/* ── Component ── */
export default function CareersClient() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === 'All' ? jobs : jobs.filter((j) => j.department === filter);

  const handleApply = (title: string) => {
    const subject = encodeURIComponent(`Application for ${title} — IgniteX`);
    const body = encodeURIComponent(`Hi IgniteX Team,\n\nI would like to apply for the "${title}" position.\n\nName:\nPhone:\nEducation:\nRelevant Experience:\n\nI have attached my resume.\n\nBest regards`);
    window.location.href = `mailto:contact@ignitexsolution.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />

      {/* ───── HERO ───── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 border-b border-slate-200" style={{ background: '#FAFAFA' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-semibold tracking-wide uppercase mb-8" style={{ borderColor: '#FECACA', background: '#FEF2F2', color: '#DC2626', letterSpacing: '0.05em' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            We&apos;re Hiring
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight">
            Join Our Team
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            We&apos;re building the digital infrastructure of the future. Join a team that ships fast, learns constantly, and values craftsmanship.
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex justify-center gap-12 md:gap-20">
            {[
              { val: '6', label: 'Open Roles' },
              { val: '50+', label: 'Projects Shipped' },
              { val: '100%', label: 'Growth Culture' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{s.val}</div>
                <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── FILTERS + LISTINGS ───── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Open Positions</h2>
              <p className="text-sm text-slate-400 mt-1">{filtered.length} role{filtered.length !== 1 ? 's' : ''} available</p>
            </div>
            {/* Filter Tabs */}
            <div className="flex gap-1 p-1 rounded-lg border border-slate-200 bg-slate-50 self-start sm:self-auto">
              {departments.map((d) => (
                <button key={d} onClick={() => setFilter(d)} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${filter === d ? 'bg-white text-slate-900 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <motion.div layout className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="group border border-slate-200 rounded-lg bg-white hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
                  style={{ borderTop: expanded === job.id ? `2px solid ${job.departmentColor}` : undefined }}
                >
                  {/* Card Header */}
                  <div className="p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: job.departmentColor }} />
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: job.departmentColor }}>{job.department}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors mb-1.5">{job.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Right: Tags + Apply */}
                      <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                        <div className="flex flex-wrap gap-1.5">
                          <Tag>{job.type}</Tag>
                          <Tag>{job.duration}</Tag>
                          <Tag>{job.experience}</Tag>
                          <Tag>{job.location}</Tag>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => setExpanded(expanded === job.id ? null : job.id)} className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">
                            {expanded === job.id ? 'Less' : 'Details'}
                          </button>
                          <button onClick={() => handleApply(job.title)} className="px-4 py-2 text-xs font-semibold text-white rounded-md transition-colors duration-200" style={{ background: '#DC2626' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#B91C1C')} onMouseLeave={(e) => (e.currentTarget.style.background = '#DC2626')}>
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable */}
                  <AnimatePresence>
                    {expanded === job.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="px-5 md:px-6 pb-6 border-t border-slate-100 pt-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <DetailList title="Responsibilities" items={job.responsibilities} dotColor="#DC2626" />
                            <DetailList title="Requirements" items={job.requirements} dotColor="#3B82F6" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ───── WHY JOIN ───── */}
      <section className="py-16 md:py-24 border-t border-slate-200" style={{ background: '#FAFAFA' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-4">Why IgniteX</h2>
          <p className="text-sm text-slate-400 text-center mb-12 max-w-lg mx-auto">What makes us different from any other place you could work.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <CodeIcon />, title: 'Real Projects', desc: 'Work on live client projects from day one — not hypothetical exercises.' },
              { icon: <MentorIcon />, title: 'Mentorship', desc: 'Learn from senior engineers with weekly 1-on-1s and code reviews.' },
              { icon: <FlexIcon />, title: 'Flexible & Remote', desc: 'Work from anywhere. We trust output over hours.' },
              { icon: <CertIcon />, title: 'Certificate & LOR', desc: 'Get a completion certificate and letter of recommendation.' },
            ].map((p) => (
              <div key={p.title} className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 text-slate-500 group-hover:text-red-600 transition-colors" style={{ background: '#F8FAFC' }}>
                  {p.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 md:py-20" style={{ background: '#0F172A' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">Don&apos;t see the right role?</h2>
          <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll reach out when the right opportunity opens up.</p>
          <a href="mailto:contact@ignitexsolution.com?subject=General Application — IgniteX Careers" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-md transition-all duration-200" style={{ background: '#DC2626' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#B91C1C')} onMouseLeave={(e) => (e.currentTarget.style.background = '#DC2626')}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Send Your Resume
          </a>
          <p className="text-xs text-slate-500 mt-4">
            contact@ignitexsolution.com
          </p>
        </div>
      </section>
    </main>
  );
}

/* ── Sub-components ── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border" style={{ borderColor: '#E2E8F0', color: '#64748B', background: '#F8FAFC' }}>
      {children}
    </span>
  );
}

function DetailList({ title, items, dotColor }: { title: string; items: string[]; dotColor: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-900 mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: dotColor }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Icons (monochrome SVGs) ── */
function CodeIcon() {
  return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>);
}
function MentorIcon() {
  return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5L12 20l4-3.5" /></svg>);
}
function FlexIcon() {
  return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>);
}
function CertIcon() {
  return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>);
}
