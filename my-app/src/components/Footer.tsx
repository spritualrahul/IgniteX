'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Send, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const exploreLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'App Development', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'SEO Services', href: '/services/seo-services' },
  { label: 'Branding', href: '/services' },
];

const solutionLinks = [
  { label: 'Cloud Solutions', href: '/services' },
  { label: 'AI & Automation', href: '/services' },
  { label: 'Enterprise Solutions', href: '/services' },
  { label: 'Product Engineering', href: '/services' },
  { label: 'IT Consulting', href: '/services' },
  { label: 'Support & Maintenance', href: '/contact' },
];

const socialLinks = [
  { label: 'Follow IgniteX on Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  {
    label: 'Follow IgniteX on Instagram',
    href: 'https://www.instagram.com/ignitex_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: FaInstagram,
  },
  {
    label: 'Follow IgniteX on LinkedIn',
    href: 'https://www.linkedin.com/in/ignitex-solution-89324b389',
    icon: FaLinkedinIn,
  },
  { label: 'Follow IgniteX on Twitter', href: 'https://twitter.com/', icon: FaTwitter },
];

type FooterLink = {
  label: string;
  href: string;
};

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/12 py-5 md:border-none md:py-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left md:pointer-events-none md:cursor-default"
      >
        <p className="font-[family-name:var(--font-nunito)] text-[18px] font-bold uppercase leading-none tracking-wide text-white sm:text-[20px]">
          {title}
        </p>
        <span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 md:hidden">
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-white/80 transition-transform duration-300 ease-out ${
              open ? 'rotate-180 text-white' : 'rotate-0'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      <div className="hidden h-[3px] w-11 bg-white md:mt-6 md:block" />

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:!grid-rows-[1fr] md:!opacity-100 ${
          open ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        } md:mt-9`}
      >
        <ul className="min-h-0 space-y-3.5 md:space-y-3.5">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-[family-name:var(--font-nunito)] inline-block text-[17px] leading-7 text-white/75 transition-colors duration-200 hover:text-white active:text-white sm:text-[20px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white" aria-labelledby="footer-brand">
      <div className="relative h-[148px] overflow-hidden bg-white sm:h-[220px] lg:h-[296px]">
        <Image
          src="/footer-skyline.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-[1536px] px-6 pb-32 pt-14 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[76px] lg:pb-[98px] lg:pt-[128px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 md:gap-y-14 xl:grid-cols-[1.65fr_0.82fr_1.05fr_1.35fr_1.75fr] xl:gap-x-11">
            <section className="max-w-[340px] border-b border-white/12 pb-7 md:border-none md:pb-0">
              <h2 id="footer-brand" className="font-[family-name:var(--font-nunito)] text-[42px] font-extrabold leading-none text-white sm:text-[56px]">
                IgniteX
              </h2>
              <p className="font-[family-name:var(--font-nunito)] mt-7 text-[17px] leading-[1.72] text-white/75 sm:mt-9 sm:text-[20px]">
                Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
              </p>
              <div className="mt-7 flex items-center gap-4 sm:mt-8 sm:gap-5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/25 text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black sm:h-[50px] sm:w-[50px]"
                  >
                    <Icon className="h-[17px] w-[17px] sm:h-[19px] sm:w-[19px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>

            <FooterColumn title="Explore" links={exploreLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Solutions" links={solutionLinks} />

            <section className="pt-5 md:pt-0">
              <p className="font-[family-name:var(--font-nunito)] text-[18px] font-bold uppercase leading-none tracking-wide text-white sm:text-[20px]">
                Stay Connected
              </p>
              <div className="mt-6 h-[3px] w-11 bg-white" />
              <p className="font-[family-name:var(--font-nunito)] mt-7 max-w-[330px] text-[17px] leading-[1.8] text-white/75 sm:mt-9 sm:text-[20px]">
                Subscribe to our newsletter and stay updated with the latest insights.
              </p>
              <form className="mt-7 flex h-[58px] w-full max-w-[305px] overflow-hidden rounded-lg border border-white/25 bg-white/5 backdrop-blur-sm transition-colors duration-200 focus-within:border-white/60 sm:mt-8 sm:h-[68px]">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="font-[family-name:var(--font-nunito)] min-w-0 flex-1 bg-transparent px-5 text-[16px] text-white outline-none placeholder:text-white/45 sm:text-[18px]"
                />
                <button
                  type="submit"
                  className="inline-flex w-[52px] shrink-0 items-center justify-center bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-black sm:w-[58px]"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-5 w-5 fill-current stroke-[2.2] sm:h-6 sm:w-6" aria-hidden="true" />
                </button>
              </form>
            </section>
          </div>

          <div className="mt-12 border-t border-white/15 pt-9 sm:mt-16 sm:pt-10 lg:mt-[66px]">
            <div className="font-[family-name:var(--font-nunito)] flex flex-col items-center gap-5 text-center text-[15px] leading-7 text-white/70 sm:gap-6 sm:text-[17px] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:text-left lg:text-[18px]">
              <a
                href="mailto:contact@ignitexsolution.com"
                className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-white sm:gap-4"
              >
                <Mail className="h-5 w-5 stroke-[1.6] sm:h-7 sm:w-7" aria-hidden="true" />
                <span>contact@ignitexsolution.com</span>
              </a>

              <p className="text-white/70 lg:justify-self-center">&copy; {currentYear} IgniteX. All rights reserved.</p>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:justify-end">
                <Link href="/privacy" className="transition-colors duration-200 hover:text-white">
                  Privacy Policy
                </Link>
                <span className="h-6 w-px bg-white/25 sm:h-8" aria-hidden="true" />
                <Link href="/terms" className="transition-colors duration-200 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}