import { MetadataRoute } from 'next';

const baseUrl = 'https://www.ignitexsolution.com';

// Core pages with specific priorities (ONLY EXISTING PAGES)
const corePages = [
  { path: '', priority: 1.0, changeFreq: 'daily' },
  { path: '/about', priority: 0.9, changeFreq: 'weekly' },
  { path: '/services', priority: 0.9, changeFreq: 'weekly' },
  { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
  { path: '/team', priority: 0.7, changeFreq: 'monthly' },
];

// Service pages (ONLY EXISTING PAGES)
const servicePages = [
  { path: '/services/website-development', name: 'Website Development' },
  // TODO: Add more service pages as they are created:
  // { path: '/services/seo', name: 'SEO Services' },
  // { path: '/services/digital-marketing', name: 'Digital Marketing' },
  // { path: '/services/graphic-design', name: 'Graphic Design' },
  // { path: '/services/video-editing', name: 'Video Editing' },
  // { path: '/services/ecommerce', name: 'E-commerce Solutions' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
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

  // TODO: Add blog posts when blog section is created
  // const blogRoutes = blogPosts.map(({ slug }) => ({
  //   url: `${baseUrl}/blog/${slug}`,
  //   lastModified: currentDate,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    // ...blogRoutes, // Uncomment when blog is ready
  ];
}
