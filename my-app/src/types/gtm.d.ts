// Type definitions for Google Tag Manager

type GtmEvent = {
  'gtm.start'?: number;
  event?: string;
  [key: string]: unknown;
} | Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: GtmEvent[];
  }
}

export {}; // This file doesn't have any imports/exports in JavaScript
