'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send metrics to your analytics service
    switch (metric.name) {
      case 'FCP':
        console.log('FCP:', metric.value);
        break;
      case 'LCP':
        console.log('LCP:', metric.value);
        break;
      case 'CLS':
        console.log('CLS:', metric.value);
        break;
      case 'FID':
        console.log('FID:', metric.value);
        break;
      case 'TTFB':
        console.log('TTFB:', metric.value);
        break;
      case 'Next.js-hydration':
        console.log('Hydration:', metric.value);
        break;
      case 'Next.js-route-change-to-render':
        console.log('Route Change to Render:', metric.value);
        break;
      case 'Next.js-render':
        console.log('Render:', metric.value);
        break;
      default:
        break;
    }
  });

  return null;
}
