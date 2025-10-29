'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GTM_ID = 'GTM-KQ83S7ML';

// Add debug mode for development
const isDev = process.env.NODE_ENV === 'development';
const gtmIdWithDebug = isDev ? `${GTM_ID}&gtm_auth=&gtm_preview=env-2&gtm_cookies_win=x` : GTM_ID;

export const GoogleTagManager = () => {
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      onError={(e) => {
        console.error('GTM failed to load', e);
      }}
      onLoad={() => {
        console.log('GTM loaded successfully');
        if (isDev) {
          console.log('GTM Debug Mode: Enabled');
          console.log('GTM ID:', GTM_ID);
        }
      }}
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=${gtmIdWithDebug}';f.parentNode.insertBefore(j,f);
      `,
      }}
    />
  );
};

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
