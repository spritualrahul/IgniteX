import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { getAllPosts } from '@/lib/blog';
import { BlogListClient } from '@/components/BlogListClient';

export const metadata: Metadata = {
  title: 'Blog | IgniteX — Web Development & Digital Marketing Insights',
  description: 'Tips, guides, and insights on web development, SEO, and digital marketing for Indian businesses.',
  alternates: {
    canonical: 'https://www.ignitexsolution.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights & <span className="text-blue-600">Strategies</span>
            </h1>
            <p className="text-xl text-gray-600">
              Actionable advice on web development, SEO, and digital marketing to help your business grow.
            </p>
          </div>

          <BlogListClient posts={posts} />
        </div>
      </main>
    </>
  );
}
