// Define a more specific type for the data prop
type JsonLdData = Record<string, unknown>;

export interface StructuredDataProps {
  data: JsonLdData;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IgniteX',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech'}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IgniteX',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech',
  logo: '/images/logo.png',
  sameAs: [
    'https://twitter.com/ignitex',
    'https://linkedin.com/company/ignitex',
    'https://github.com/ignitex',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'contact@ignitex.tech',
    areaServed: 'US',
    availableLanguage: ['English'],
  },
  description: 'Digital Innovation & Technology Solutions',
};

export const breadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: new URL(item.item, process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech').toString(),
  })),
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
