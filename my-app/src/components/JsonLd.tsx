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
        alternateName: 'IgniteX Solutions',
        url: 'https://www.ignitexsolution.com',
        logo: 'https://www.ignitexsolution.com/logo.png',
        description: 'Leading website development and digital marketing agency in Jamshedpur offering custom web design, e-commerce solutions, and full-stack development.',
        foundingDate: '2020',
        sameAs: [
          'https://www.facebook.com/ignitex',
          'https://www.linkedin.com/company/ignitex',
          'https://twitter.com/ignitex',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8935860306',
          contactType: 'customer service',
          email: 'contact@ignitexsolution.com',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jamshedpur',
          addressRegion: 'Jharkhand',
          addressCountry: 'IN',
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

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@type': 'LocalBusiness',
        '@id': 'https://www.ignitexsolution.com/#localbusiness',
        name: 'IgniteX',
        image: 'https://www.ignitexsolution.com/logo.png',
        description: 'Leading website development and digital marketing agency in Jamshedpur. 50+ websites launched with 80% average ROI for clients.',
        url: 'https://www.ignitexsolution.com',
        telephone: '+91-8935860306',
        email: 'contact@ignitexsolution.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '', // TODO: Add street address
          addressLocality: 'Jamshedpur',
          addressRegion: 'Jharkhand',
          postalCode: '', // TODO: Add postal code
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.8046, // Jamshedpur coordinates (update with exact location)
          longitude: 86.2029,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '16:00',
          },
        ],
        priceRange: '$$',
        sameAs: [
          'https://www.facebook.com/ignitex',
          'https://www.linkedin.com/company/ignitex',
          'https://twitter.com/ignitex',
        ],
      }}
    />
  );
}

export function BreadcrumbListSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <JsonLd
      data={{
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string;
}) {
  return (
    <JsonLd
      data={{
        '@type': 'Service',
        serviceType: name,
        provider: {
          '@type': 'Organization',
          name: 'IgniteX',
          url: 'https://www.ignitexsolution.com',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        description,
        url,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceRange: '$$',
        },
      }}
    />
  );
}
