import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-xl font-bold mb-4">IgniteX</p>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.instagram.com/ignitex_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10"
                aria-label="Follow IgniteX on Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ignitex-solution-89324b389"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10"
                aria-label="Follow IgniteX on LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#work" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-red-500 shrink-0" />
                <a href="mailto:contact@ignitexsolution.com" className="text-gray-400 hover:text-white transition-colors">
                 contact@ignitexsolution.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-red-500 shrink-0" />
                <a href="tel:+918935860306" className="text-gray-400 hover:text-white transition-colors">
                  +91 8935860306
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500 shrink-0" />
                <span className="text-gray-400">
                  <strong>Jamshedpur (HQ)</strong><br />
                  Bistupur, Jamshedpur - 831005
                </span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500 shrink-0" />
                <span className="text-gray-400">
                  <strong>Noida Office</strong><br />
                  Aims green avenue, C-1705 - 201318
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-lg font-semibold mb-4">Newsletter</p>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white w-full"
                required
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} IgniteX. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors mx-2">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors mx-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
