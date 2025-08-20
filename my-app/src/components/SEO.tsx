'use client';

import { usePathname } from 'next/navigation';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignitex.com';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  article?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  type?: 'website' | 'article' | 'profile' | 'book' | 'video.movie';
}

export default function SEO({
  title = 'IgniteX - Digital Innovation Group',
  description = 'IgniteX is a digital innovation group specializing in web development, mobile apps, and digital transformation solutions.',
  canonical,
  image = '/images/og-image.jpg',
  author = 'IgniteX Team',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  type = 'website',
}: SEOProps) {
  const pathname = usePathname();
  const url = canonical || `${siteUrl}${pathname}`;
  const ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    headline: title,
    description: description,
    image: ogImage,
    author: {
      '@type': 'Organization',
      name: 'IgniteX',
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'IgniteX',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    ...(type === 'article' && {
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      articleSection: section,
      keywords: tags.join(', '),
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
  };

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s | IgniteX"
        defaultTitle="IgniteX - Digital Innovation Group"
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'IgniteX',
          type: type,
          ...(type === 'article' && {
            article: {
              publishedTime,
              modifiedTime,
              section,
              tags,
              authors: [author],
            },
          }),
        }}
        twitter={{
          handle: '@ignitex',
          site: '@ignitex',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5',
          },
          {
            name: 'keywords',
            content: 'digital innovation, web development, mobile apps, software development, digital transformation',
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            name: 'theme-color',
            content: '#FF3A2D',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
      />
      
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}
