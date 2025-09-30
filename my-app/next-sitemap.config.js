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
    additionalSitemaps: [
      'https://www.ignitexsolution.com/sitemap.xml',
      'https://www.ignitexsolution.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*'],
  outDir: 'out',
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
