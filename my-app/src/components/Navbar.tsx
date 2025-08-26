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
    { name: "Our Work", href: "#work" },
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
            <style jsx global>{`
  @keyframes flame {
    0%, 100% {
      filter: drop-shadow(0 0 4px #ff3a2d) drop-shadow(0 0 10px #ff8a05);
      opacity: 0.9;
    }
    25% {
      filter: drop-shadow(0 0 6px #ff6b3d) drop-shadow(0 0 15px #ffb703);
      opacity: 1;
    }
    50% {
      filter: drop-shadow(0 0 5px #ff3a2d) drop-shadow(0 0 12px #ff8a05);
      opacity: 0.8;
    }
    75% {
      filter: drop-shadow(0 0 7px #ff6b3d) drop-shadow(0 0 18px #ffb703);
      opacity: 0.95;
    }
  }
  
  @keyframes textBurn {
    0%, 100% {
      background-position: 0% 50%;
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px rgba(255, 58, 45, 0.5);
    }
    25% {
      background-position: 100% 50%;
      text-shadow: 0 0 15px rgba(255, 107, 61, 0.7);
    }
    50% {
      background-position: 0% 100%;
      text-shadow: 0 0 20px rgba(255, 138, 5, 0.6);
    }
    75% {
      background-position: 100% 0%;
      text-shadow: 0 0 18px rgba(255, 183, 3, 0.8);
    }
  }
  
  .flame-animation {
    animation: flame 3s ease-in-out infinite;
    transform-origin: center;
    transition: all 0.3s ease;
  }
  
  .flame-text {
    display: inline-block;
    background: linear-gradient(45deg, #ff3a2d, #ff8a05, #ff3a2d, #ffb703);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textBurn 4s ease-in-out infinite;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
  
  .flame-animation:hover, .flame-text:hover {
    transform: scale(1.05);
    animation-duration: 1.5s;
  }
`}</style>
<Link href="/" className="flex items-center text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div className="relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-16 h-16 mr-0 text-red-600 flame-animation">
      <path d="M16 2c.3 0 .6.14.78.38 2.7 3.2 4.22 5.74 4.22 7.62 0 1.63-.92 2.45-2.74 2.45-1.23 0-2.28-.69-3.13-2.02-.13-.21-.45-.21-.58 0C11.5 13.2 10 15.7 10 18.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.13-2.04-6.45-4.89-10.72A1 1 0 0 0 16 2zm0 26c-4.42 0-8-3.58-8-8 0-3.53 2.09-7.18 5.56-12.08.36-.52 1.16-.52 1.52 0C21.91 12.82 24 16.47 24 20c0 4.42-3.58 8-8 8z"/>
      <path d="M16 24c-2.21 0-4-1.79-4-4 0-1.91 1.11-3.95 2.96-6.77.19-.29.62-.29.81 0C18.89 16.05 20 18.09 20 20c0 2.21-1.79 4-4 4z" fill="url(#flame-gradient)"/>
      <defs>
        <linearGradient id="flame-gradient" x1="16" y1="12" x2="16" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff3a2d" />
          <stop offset="1" stopColor="#ff8a05" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="flex flex-col ml-1">
    <div className="relative">
      <span className="flame-text">ignite</span><span className="flame-text">X</span>
    </div>
    <div className="text-sm font-normal text-gray-500">Digital Innovation Group</div>
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