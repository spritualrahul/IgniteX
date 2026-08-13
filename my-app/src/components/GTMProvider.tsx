'use client';

import { useEffect, Suspense, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const GTM_ID = 'GTM-KQ83S7ML';
const CONSENT_STORAGE_KEY = 'ignitex_cookie_consent';

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
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setHasAnalyticsConsent(localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted');
    };

    syncConsent();
    window.addEventListener('ignitex-consent-change', syncConsent);
    window.addEventListener('storage', syncConsent);

    return () => {
      window.removeEventListener('ignitex-consent-change', syncConsent);
      window.removeEventListener('storage', syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!hasAnalyticsConsent) return;

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
  }, [hasAnalyticsConsent]);

  // Handle route changes
  useEffect(() => {
    if (hasAnalyticsConsent && typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [hasAnalyticsConsent, pathname, searchParams]);

  if (!hasAnalyticsConsent) {
    return null;
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
    />
  );
}

export const GTMNoScript = () => null;
