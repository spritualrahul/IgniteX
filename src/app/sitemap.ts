import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech';

// Core pages with specific priorities
const corePages = [
  { path: '', priority: 1.0, changeFreq: 'daily' },
  { path: '/about', priority: 0.9, changeFreq: 'weekly' },
  { path: '/services', priority: 0.9, changeFreq: 'weekly' },
  { path: '/portfolio', priority: 0.8, changeFreq: 'weekly' },
  { path: '/blog', priority: 0.8, changeFreq: 'daily' },
  { path: '/contact', priority: 0.7, changeFreq: 'monthly' },
];

// Service pages
const servicePages = [
  { path: '/services/web-development', name: 'Web Development' },
  { path: '/services/seo', name: 'SEO Services' },
  { path: '/services/digital-marketing', name: 'Digital Marketing' },
  { path: '/services/graphic-design', name: 'Graphic Design' },
  { path: '/services/video-editing', name: 'Video Editing' },
  { path: '/services/ecommerce', name: 'E-commerce Solutions' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Generate core pages
  const coreRoutes = corePages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly',
    priority,
  }));

  // Generate service pages
  const serviceRoutes = servicePages.map(({ path }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts (example - you would fetch these from your CMS in a real app)
  const blogPosts = [
    { slug: 'top-seo-trends-2023' },
    { slug: 'web-design-best-practices' },
    { slug: 'social-media-marketing-strategies' },
  ];

  const blogRoutes = blogPosts.map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
