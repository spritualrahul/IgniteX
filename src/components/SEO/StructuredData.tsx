import { Metadata } from 'next';

interface StructuredDataProps {
  type?: string;
  data: Record<string, unknown>;
}

export default function StructuredData({ type = 'Organization', data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type,
          ...data,
        }),
      }}
    />
  );
}

export const websiteSchema: Metadata['other'] = {
  'og:site_name': 'IgniteX',
  'og:type': 'website',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@ignitex_tech',
};

export const organizationSchema = {
  name: 'IgniteX',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech'}/images/logo.png`,
  sameAs: [
    'https://twitter.com/ignitex_tech',
    'https://linkedin.com/company/ignitex',
    'https://github.com/ignitex',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94107',
    addressCountry: 'US',
  },
};

export const serviceSchema = {
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: 'IgniteX',
  },
  description: 'Professional web development services including frontend, backend, and full-stack solutions.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Solutions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
        },
      },
    ],
  },
};
