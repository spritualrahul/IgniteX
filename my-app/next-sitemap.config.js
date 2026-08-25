/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ignitexsolution.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*'],
      },
    ],
  },
  exclude: [
    '/server-sitemap.xml',
    '/sitemap.xml',
    '/admin/*',
    '/api/*',
    '/our-story',
    '/robots.txt',
  ],
  outDir: 'public',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  // Add any additional paths that should be included in the sitemap
  // additionalPaths: async (config) => {
  //   const result = []
  //   // Add dynamic paths here if needed
  //   return result
  // },
}
