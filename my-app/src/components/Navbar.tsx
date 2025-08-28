"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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
              return;
            }
          }
        }
        
        // If not in any section, we're at the top (home)
        if (window.scrollY < 100) {
          setActiveSection('/');
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === '/';
    
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (!isHomePage) {
        window.location.href = '/';
      }
    } else if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = `/${href}`;
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
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
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
<Link href="/" className="flex items-center text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
              <Button className="ml-4 bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
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
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}