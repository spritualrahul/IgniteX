import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech'}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech',
  };
}
