"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "#work" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center flex-shrink-0">
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
            <div className="ml-4 md:ml-10 flex items-center space-x-1 md:space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base font-medium text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="ml-4 bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-primary hover:bg-gray-50 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
