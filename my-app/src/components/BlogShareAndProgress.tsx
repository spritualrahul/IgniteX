'use client';

import { useState, useEffect } from 'react';
import { Share2, Link2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogShareAndProgressProps {
  title: string;
  slug: string;
  description: string;
}

export function BlogShareAndProgress({ title, slug }: BlogShareAndProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(window.location.href);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  // SVGs for branding icons
  const WhatsAppIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.004 22c-2.048 0-4.002-.56-5.712-1.625l-4.29 1.125 1.147-4.182C2.012 15.603 1.4 13.527 1.4 11.378c0-5.842 4.757-10.598 10.603-10.598 2.83 0 5.492 1.103 7.493 3.106 2 2.002 3.1 4.664 3.1 7.493 0 5.843-4.757 10.603-10.603 10.603v.018zm0-18.734c-4.484 0-8.136 3.652-8.136 8.136 0 1.83.62 3.562 1.792 4.96l-.684 2.499 2.56-.671c1.332.84 2.87 1.284 4.464 1.284 4.484 0 8.137-3.653 8.137-8.137 0-2.17-.845-4.211-2.383-5.75-1.537-1.538-3.578-2.378-5.75-2.378zM16.51 13.91c-.247-.123-1.464-.722-1.692-.806-.228-.083-.393-.123-.559.123-.166.247-.641.806-.786.972-.145.165-.29.186-.538.062a7.653 7.653 0 0 1-3.238-1.996 8.442 8.442 0 0 1-1.92-2.39c-.146-.248-.016-.381.109-.504.112-.11.248-.29.373-.434.124-.145.166-.248.248-.414.083-.166.042-.31-.02-.434-.063-.124-.559-1.348-.766-1.844-.2-.484-.403-.418-.559-.426-.145-.008-.31-.01-.476-.01a.916.916 0 0 0-.662.31c-.228.249-.87.849-.87 2.071 0 1.22.89 2.4 1.014 2.565.124.166 1.748 2.67 4.237 3.74.593.254 1.055.405 1.417.52.595.19 1.137.162 1.564.098.477-.072 1.464-.598 1.671-1.178.207-.579.207-1.075.145-1.178-.062-.103-.228-.165-.476-.289z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      {/* Top Fixed Reading Progress Bar */}
      <div className="fixed top-20 left-0 right-0 h-1.5 bg-gray-100 z-50 pointer-events-none">
        <motion.div
          className="h-full bg-blue-600 origin-left"
          style={{ width: `${scrollProgress}%` }}
          layoutId="scroll-progress-bar"
        />
      </div>

      {/* Share Actions - Left Floating Sidebar on Desktop */}
      <div className="hidden lg:block fixed left-10 top-1/3 z-40">
        <div className="flex flex-col items-center gap-3 bg-white p-3.5 rounded-2xl shadow-md border border-gray-100">
          <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
            Share
          </span>

          <motion.a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
            title="Share on WhatsApp"
          >
            <WhatsAppIcon />
          </motion.a>

          <motion.a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-all shadow-sm"
            title="Share on LinkedIn"
          >
            <LinkedinIcon />
          </motion.a>

          <motion.a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gray-50 text-gray-800 hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-sm"
            title="Share on X (formerly Twitter)"
          >
            <TwitterIcon />
          </motion.a>

          <motion.button
            onClick={copyToClipboard}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${
              copied
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
            title="Copy link"
          >
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* Share Actions - Inline Block for Mobile/Tablet (Rendered at top of article description) */}
      <div className="lg:hidden w-full py-4 border-y border-gray-100 my-6 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
          <Share2 className="w-3.5 h-3.5 text-gray-400" /> Share this article
        </span>
        <div className="flex items-center gap-2">
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center transition-colors hover:bg-green-100"
            aria-label="Share on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center transition-colors hover:bg-blue-100"
            aria-label="Share on LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-gray-50 text-gray-800 flex items-center justify-center transition-colors hover:bg-gray-100"
            aria-label="Share on X"
          >
            <TwitterIcon />
          </a>
          <button
            onClick={copyToClipboard}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              copied ? 'bg-emerald-500 text-white' : 'bg-gray-50 text-gray-600'
            }`}
            aria-label="Copy article link"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Success Notification for Copying Link (Mobile overlay) */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg z-50 flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" /> Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
