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

const siteUrl = 'https://www.ignitexsolution.com';

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'IgniteX',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'IgniteX',
  alternateName: 'IgniteX Solutions',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    'https://www.instagram.com/ignitex_solutions',
    'https://www.linkedin.com/company/ignitex',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8935860306',
    contactType: 'customer service',
    email: 'contact@ignitexsolution.com',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  description: 'Leading website development and digital marketing agency in Jamshedpur. Custom web development, SEO, and digital marketing solutions.',
};

export const breadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: new URL(item.item, siteUrl).toString(),
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
