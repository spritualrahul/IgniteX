'use client';

import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const CONSENT_STORAGE_KEY = 'ignitex_cookie_consent';

export default function ConsentControlledSpeedInsights() {
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

  if (!hasAnalyticsConsent) return null;

  return <SpeedInsights />;
}
