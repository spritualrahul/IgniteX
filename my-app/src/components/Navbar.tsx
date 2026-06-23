"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = {
  simpleBrand?: boolean;
  spacious?: boolean;
};

export function Navbar({ simpleBrand = true, spacious = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        
        // Update active section based on scroll position for home page
        if (pathname === '/') {
          const sections = ['work', 'testimonials', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(`#${section}`);
                ticking = false;
                return;
              }
            }
          }
          
          // If not in any section, we're at the top (home)
          if (window.scrollY < 100) {
            setActiveSection('/');
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Set initial active section based on pathname
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname);
    } else {
      setActiveSection('/');
    }
  }, [pathname]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = pathname === '/';
    
    if (href === '/') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
    } else if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
    setIsOpen(false);
  }, [pathname, router]);

  const isActive = (href: string) => {
    if (href === '/services') {
      return pathname.startsWith('/services');
    }
    if (pathname === '/' && href.startsWith('#')) {
      return activeSection === href;
    }
    return pathname === href || activeSection === href;
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "#work" },
    { name: "Teams", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 ${
          spacious ? "max-w-[1440px] lg:px-0" : "max-w-7xl lg:px-8"
        }`}
      >
        <div className={`flex items-center justify-between ${spacious ? "h-[118px]" : "h-20"}`}>
          <div className="flex-shrink-0">
<Link
  href="/"
  aria-label={simpleBrand ? "IgniteX" : undefined}
  className="flex items-center text-3xl font-bold"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  {simpleBrand ? (
    <span className="group relative flex items-end text-[31px] font-black leading-none tracking-[-0.05em] text-slate-950 md:text-[34px]">
      <span>ignite</span>
      <span className="relative ml-0.5 text-[35px] md:text-[38px]">
        <span className="text-slate-950">X</span>
        <span
          aria-hidden="true"
          className="absolute inset-0 text-red-600 transition-colors duration-300 group-hover:text-red-500"
          style={{
            clipPath: 'polygon(0 0, 52% 0, 52% 100%, 0 100%)',
            WebkitClipPath: 'polygon(0 0, 52% 0, 52% 100%, 0 100%)'
          }}
        >
          X
        </span>
      </span>
    </span>
  ) : (
  <div className="flex flex-col group">
    <div className="relative flex items-end pb-1">
      <span className="text-3xl md:text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-700 to-red-800 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-700">
        ignite
      </span>
      <span className="relative">
        <span className="text-4xl md:text-5xl font-black leading-none text-gray-900">X</span>
        <span 
className="absolute inset-0 text-4xl md:text-5xl font-black leading-none bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-700"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
            WebkitClipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)'
          }}
        >
          X
        </span>
      </span>
    </div>
    <div className="text-sm font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-300 ml-1">
      Beyond Deadline. Before Time.
    </div>
  </div>
  )}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline ${spacious ? "space-x-9" : "space-x-8"}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-500 ease-in-out cursor-pointer group ${
                    isActive(item.href)
                      ? 'text-red-600 font-semibold'
                      : 'text-gray-950 hover:text-red-500'
                  }`}
                >
                  {item.name}
                  
                  {/* Active underline with smooth transition */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-500 ease-in-out ${
                      isActive(item.href) 
                        ? 'w-full opacity-100 shadow-sm shadow-red-500/50' 
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
                    }`}
                  />
                  
                  {/* Hover effect underline */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400/50 to-orange-400/50 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/contact"
                className={`ml-4 inline-flex items-center gap-3 rounded-[14px] bg-red-600 font-extrabold text-white shadow-[0_14px_28px_rgba(239,68,68,0.26)] transition hover:bg-red-700 ${
                  spacious ? "h-12 px-6 text-[15px]" : "h-11 px-5 text-sm"
                }`}
              >
                Let&apos;s Connect
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className={`relative block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-50/80 border-l-4 border-red-500 font-semibold transform translate-x-1'
                      : 'text-gray-950 hover:text-red-500 hover:bg-red-50/50 hover:translate-x-0.5'
                  }`}
                >
                  {item.name}
                  
                  {/* Mobile active indicator dot */}
                  {isActive(item.href) && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex h-11 w-full items-center justify-center gap-3 rounded-[14px] bg-red-600 px-5 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(239,68,68,0.22)] transition hover:bg-red-700"
              >
                Let&apos;s Connect
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
