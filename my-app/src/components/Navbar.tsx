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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-16 h-16 mr-0 text-red-600">
  <path d="M16 2c.3 0 .6.14.78.38 2.7 3.2 4.22 5.74 4.22 7.62 0 1.63-.92 2.45-2.74 2.45-1.23 0-2.28-.69-3.13-2.02-.13-.21-.45-.21-.58 0C11.5 13.2 10 15.7 10 18.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.13-2.04-6.45-4.89-10.72A1 1 0 0 0 16 2zm0 26c-4.42 0-8-3.58-8-8 0-3.53 2.09-7.18 5.56-12.08.36-.52 1.16-.52 1.52 0C21.91 12.82 24 16.47 24 20c0 4.42-3.58 8-8 8z"/>
  <path d="M16 24c-2.21 0-4-1.79-4-4 0-1.91 1.11-3.95 2.96-6.77.19-.29.62-.29.81 0C18.89 16.05 20 18.09 20 20c0 2.21-1.79 4-4 4z" fill="#ef4444"/>
</svg>
              <div className="flex flex-col ml-1">
                <div>
                  <span className="text-black">ignite</span><span className="text-gray-900">X</span>
                </div>
                <div className="text-sm font-normal text-gray-500">Digital Innovation Group</div>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-950 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
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
              className="text-secondary hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-950 hover:text-primary hover:bg-gray-50 cursor-pointer"
                >
                  {item.name}
                </a>
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
