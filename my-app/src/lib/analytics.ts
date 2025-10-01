// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-P44XTD22E4', {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined event tracking functions for common actions

export const trackContactFormSubmit = () => {
  event({
    action: 'submit',
    category: 'Contact Form',
    label: 'Contact Form Submission',
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Number Click',
  });
};

export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Email Click',
  });
};

export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view',
    category: 'Service',
    label: serviceName,
  });
};

export const trackCTAClick = (ctaName: string) => {
  event({
    action: 'click',
    category: 'CTA',
    label: ctaName,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'File',
    label: fileName,
  });
};

export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};

export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'Engagement',
    label: `${percentage}% Scroll`,
    value: percentage,
  });
};

export const trackTimeOnPage = (seconds: number) => {
  event({
    action: 'time_on_page',
    category: 'Engagement',
    label: 'Time Spent',
    value: seconds,
  });
};
