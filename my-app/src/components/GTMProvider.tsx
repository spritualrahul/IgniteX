'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const GTM_ID = 'GTM-KQ83S7ML';

// This component wraps the GTMProvider to handle Suspense
export function GTMProvider() {
  return (
    <Suspense fallback={null}>
      <GTMProviderContent />
    </Suspense>
  );
}

// The actual GTM provider content that uses useSearchParams
function GTMProviderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
      'gtm.id': GTM_ID
    });

    // Initial page view
    window.dataLayer.push({
      event: 'page_view',
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  // Handle route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname, searchParams]);

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
    />
  );
}

export const GTMNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);
