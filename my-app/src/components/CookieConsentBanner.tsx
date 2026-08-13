'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Check, Settings, X } from 'lucide-react';

const CONSENT_STORAGE_KEY = 'ignitex_cookie_consent';

export default function CookieConsentBanner() {
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    setChoice(localStorage.getItem(CONSENT_STORAGE_KEY));
  }, []);

  const saveChoice = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
    localStorage.setItem('ignitex_cookie_consent_updated_at', new Date().toISOString());
    window.dispatchEvent(new Event('ignitex-consent-change'));
    setChoice(value);
  };

  if (choice) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:flex sm:items-start sm:justify-between sm:gap-6">
        <div className="text-sm leading-6 text-gray-700">
          <p className="font-semibold text-gray-950">Privacy choices</p>
          <p className="mt-1">
            We use essential cookies to run this website. With your consent, we use analytics and marketing tags to understand visits and improve campaigns. You can reject non-essential cookies now and change your choice later from the Privacy Policy.
          </p>
          <Link href="/privacy" className="mt-2 inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700">
            <Settings className="h-4 w-4" aria-hidden="true" />
            Privacy Policy
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:flex sm:shrink-0">
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Reject
          </button>
          <button
            type="button"
            onClick={() => saveChoice('accepted')}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
