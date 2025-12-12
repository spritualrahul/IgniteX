'use client';

import { useEffect } from 'react';

// Type is now defined in src/types/gtm.d.ts

const GTM_ID = 'GTM-KQ83S7ML';

// Simple GTM loader component
export const GoogleTagManager = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    console.log('[GTM] Initializing...');
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Add the GTM script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    
    gtmScript.onload = () => {
      console.log('[GTM] Script loaded successfully');
      // Push initial event
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    };
    
    gtmScript.onerror = (error) => {
      console.error('[GTM] Failed to load GTM script:', error);
    };
    
    document.head.appendChild(gtmScript);
    
    return () => {
      // Cleanup if needed
      if (document.head.contains(gtmScript)) {
        document.head.removeChild(gtmScript);
      }
    };
  }, []);

  return null;
};

// NoScript fallback
export const GTMNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
      title="GTM"
    />
  </noscript>
);
