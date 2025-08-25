import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IgniteX</h3>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </p>
  <div className="flex space-x-4">
  <a 
    href="https://www.linkedin.com/in/your-username" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaLinkedin size={20} />
  </a>

  <a 
    href="https://twitter.com/your-username" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaTwitter size={20} />
  </a>

  <a 
    href="https://github.com/your-username" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors"
  >
    <FaGithub size={20} />
  </a>
</div>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Servicesss</Link></li>
              <li><Link href="/#work" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-red-500" />
                <a href="mailto:ignitexsolution@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                 ignitexsolution@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-red-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 8969156933
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-500" />
                <span className="text-gray-400">
                  Jamshedpur<br />
                  Jharkhand
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 w-full"
                required
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
