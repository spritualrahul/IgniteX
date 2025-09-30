interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        }),
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        '@type': 'Organization',
        name: 'IgniteX',
        url: 'https://www.ignitexsolution.com',
        logo: 'https://www.ignitexsolution.com/logo.png',
        sameAs: [
          'https://www.facebook.com/ignitex',
          'https://www.linkedin.com/company/ignitex',
          'https://twitter.com/ignitex',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '', // Add your phone number here
          contactType: 'customer service',
          email: 'contact@ignitexsolution.com',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        '@type': 'WebSite',
        name: 'IgniteX - Web Development & Digital Marketing Agency',
        url: 'https://www.ignitexsolution.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.ignitexsolution.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}
