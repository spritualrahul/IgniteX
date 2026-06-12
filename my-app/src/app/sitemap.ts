import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const baseUrl = 'https://www.ignitexsolution.com';

// Core pages with specific priorities
const corePages = [
  { path: '', priority: 1.0, changeFreq: 'daily' as const },
  { path: '/about', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/blog', priority: 0.7, changeFreq: 'weekly' as const },
  { path: '/careers', priority: 0.8, changeFreq: 'weekly' as const },
  { path: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
  { path: '/team', priority: 0.7, changeFreq: 'monthly' as const },
];

// Service pages — only active, linked pages
const servicePages = [
  { path: '/services/web-development', priority: 0.85, changeFreq: 'weekly' as const },
  { path: '/services/seo-services', priority: 0.85, changeFreq: 'weekly' as const },
  { path: '/services/digital-marketing', priority: 0.85, changeFreq: 'weekly' as const },
  { path: '/services/social-media-management', priority: 0.85, changeFreq: 'weekly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const coreRoutes = corePages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: changeFreq,
    priority,
  }));

  const serviceRoutes = servicePages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: changeFreq,
    priority,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...blogPosts,
  ];
}
