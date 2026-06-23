'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const ChatBot = dynamic(() => import('@/components/ChatBotWrapper'), {
  ssr: false,
});
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), {
  ssr: false,
});

/**
 * Defers loading of ChatBot and WhatsApp widget until after the page
 * has been idle for 2 seconds, reducing initial JS execution time and TBT.
 */
export default function DeferredWidgets() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/team') return;

    // Use requestIdleCallback where available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShow(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!show || pathname === '/team') return null;

  return (
    <>
      <ChatBot />
      <WhatsAppWidget />
    </>
  );
}
