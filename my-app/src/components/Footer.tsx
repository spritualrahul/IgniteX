import Link from 'next/link';
import Image from 'next/image';
import { Mail, Send } from 'lucide-react';
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
  return (
    <div>
      <p className="text-[18px] font-bold uppercase leading-none text-white sm:text-[20px]">{title}</p>
      <div className="mt-6 h-[3px] w-11 bg-white" />
      <ul className="mt-9 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[18px] leading-7 text-white/88 transition-colors duration-200 hover:text-white sm:text-[20px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
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
        <div className="mx-auto max-w-[1536px] px-6 pb-32 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[76px] lg:pb-[98px] lg:pt-[128px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-[1.65fr_0.82fr_1.05fr_1.35fr_1.75fr] xl:gap-x-11">
            <section className="max-w-[340px]">
              <h2 id="footer-brand" className="text-[46px] font-extrabold leading-none text-white sm:text-[56px]">
                IgniteX
              </h2>
              <p className="mt-9 text-[18px] leading-[1.72] text-white/88 sm:text-[20px]">
                Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
              </p>
              <div className="mt-8 flex items-center gap-5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/45 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-black"
                  >
                    <Icon className="h-[19px] w-[19px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>

            <FooterColumn title="Explore" links={exploreLinks} />
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Solutions" links={solutionLinks} />

            <section>
              <p className="text-[18px] font-bold uppercase leading-none text-white sm:text-[20px]">
                Stay Connected
              </p>
              <div className="mt-6 h-[3px] w-11 bg-white" />
              <p className="mt-9 max-w-[330px] text-[18px] leading-[1.8] text-white/88 sm:text-[20px]">
                Subscribe to our newsletter and stay updated with the latest insights.
              </p>
              <form className="mt-8 flex h-[68px] w-full max-w-[305px] overflow-hidden rounded-md border border-white/35 bg-transparent">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="min-w-0 flex-1 bg-transparent px-5 text-[18px] text-white outline-none placeholder:text-white/55"
                />
                <button
                  type="submit"
                  className="inline-flex w-[58px] shrink-0 items-center justify-center border-l border-white/20 text-white transition-colors duration-200 hover:bg-white hover:text-black"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-6 w-6 fill-current stroke-[2.2]" aria-hidden="true" />
                </button>
              </form>
            </section>
          </div>

          <div className="mt-16 border-t border-white/22 pt-10 lg:mt-[66px]">
            <div className="grid grid-cols-1 items-center gap-6 text-[17px] leading-7 text-white/90 sm:text-[18px] lg:grid-cols-[1fr_auto_1fr]">
              <a
                href="mailto:contact@ignitexsolution.com"
                className="inline-flex items-center gap-4 transition-colors duration-200 hover:text-white"
              >
                <Mail className="h-7 w-7 stroke-[1.6]" aria-hidden="true" />
                <span>contact@ignitexsolution.com</span>
              </a>

              <p className="text-white/90">&copy; {currentYear} IgniteX. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:justify-end">
                <Link href="/privacy" className="transition-colors duration-200 hover:text-white">
                  Privacy Policy
                </Link>
                <span className="h-8 w-px bg-white/35" aria-hidden="true" />
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
