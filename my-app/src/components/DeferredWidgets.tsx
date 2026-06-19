'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

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

  useEffect(() => {
    // Use requestIdleCallback where available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShow(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <>
      <ChatBot />
      <WhatsAppWidget />
    </>
  );
}
