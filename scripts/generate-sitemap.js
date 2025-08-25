const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Website URL (without trailing slash)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.tech';

// Pages to include in the sitemap
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/website-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/mobile-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/cloud-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more pages as needed
];

// Add last modified date to all pages
const now = new Date().toISOString();
const sitemapPages = pages.map(page => ({
  ...page,
  lastmod: now,
  lastmodISO: now,
}));

// Create sitemap
async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: siteUrl });
    
    // Add all pages to the sitemap
    sitemapPages.forEach(page => {
      stream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod,
      });
    });

    // End the stream
    stream.end();

    // Convert the stream to a string
    const sitemap = await streamToPromise(Readable.from(stream)).then(data =>
      data.toString()
    );

    // Write sitemap to public directory
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log('Sitemap generated successfully!');
    console.log(`Sitemap saved to: ${sitemapPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Generate the sitemap
generateSitemap();
