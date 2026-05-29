import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, CalendarDays, User } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Navbar } from '@/components/Navbar';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found | IgniteX' };
  }

  return {
    title: `${post.title} | IgniteX Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.ignitexsolution.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://www.ignitexsolution.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'IgniteX Solution',
      url: 'https://www.ignitexsolution.com',
    },
    datePublished: post.date,
    url: `https://www.ignitexsolution.com/blog/${post.slug}`,
    image: post.coverImage
      ? `https://www.ignitexsolution.com${post.coverImage}`
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-10 pb-10 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-gray-400" />
              {new Date(post.date).toLocaleDateString('en-IN', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              {post.readingTime.text}
            </span>
          </div>

          {post.coverImage && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative w-full h-[400px] md:h-[500px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to grow your business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our team for a free consultation and let&apos;s
              discuss how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
