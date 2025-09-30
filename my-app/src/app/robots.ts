import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: 'https://www.ignitexsolution.com/sitemap.xml',
    host: 'https://www.ignitexsolution.com',
  };
}
