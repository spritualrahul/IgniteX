'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface GtmEvent {
  'gtm.start'?: number;
  'gtm.id'?: string;
  'gtm.uniqueEventId'?: string | number;
  'gtm.virtualPageViews'?: boolean;
  'gtm.dom'?: boolean;
  'gtm.loadEvent'?: boolean;
  'gtm.whitelist'?: string[];
  'gtm.allowlist'?: string[];
  'gtm.blocklist'?: string[];
  'gtm.consent'?: string;
  'gtm.consent.default'?: {
    [key: string]: string;
  };
  'send_to'?: string;
  event: string;
  page_path?: string;
  page_title?: string;
  page_location?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer: GtmEvent[];
  }
}

export const GTMProvider = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GTM_ID = 'GTM-KQ83S7ML';
  const GA_MEASUREMENT_ID = 'G-2FMN403SPP';

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
      'gtm.id': GTM_ID
    });

    // Load GTM script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);

    // Add GA4 config
    window.dataLayer.push({
      event: 'config',
      'gtm.uniqueEventId': 0,
      'gtm.virtualPageViews': true,
      'gtm.dom': true,
      'gtm.loadEvent': true,
      'gtm.whitelist': ['j', 'l', 'v', 'ct', 'dl', 'gtm', 'ua', 'sp', 'flc', 'frs', 'fsp'],
      'gtm.start': new Date().getTime(),
      'gtm.allowlist': ['*'],
      'gtm.blocklist': ['customScripts'],
      'gtm.consent': 'default',
      'gtm.consent.default': {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
      }
    });

    // Initialize GA4
    window.dataLayer.push({
      event: 'config',
      'gtm.uniqueEventId': 1,
      'gtm.virtualPageViews': true,
      'send_to': `${GA_MEASUREMENT_ID}`,
      'gtm.start': new Date().getTime(),
      'gtm.allowlist': ['*'],
      'gtm.blocklist': ['customScripts']
    });

    // Handle route changes
    const handleRouteChange = () => {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        page_location: window.location.href,
        'gtm.uniqueEventId': Math.floor(Math.random() * 0x10000000000).toString()
      });
    };

    // Initial page load
    handleRouteChange();
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        page_location: window.location.href,
        'gtm.uniqueEventId': Math.floor(Math.random() * 0x10000000000).toString()
      });
    }
  }, [pathname, searchParams]);

  return null;
};

export const GTMNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=GTM-KQ83S7ML`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);
