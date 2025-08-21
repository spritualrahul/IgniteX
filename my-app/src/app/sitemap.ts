import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/team', '/contact', '/services/website-development']
    .map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }));

  return [...routes];
}
