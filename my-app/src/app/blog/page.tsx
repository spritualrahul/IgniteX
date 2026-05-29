import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, CalendarDays } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { getAllPosts } from '@/lib/blog';

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

          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {post.coverImage && (
                  <Link href={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                )}
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group inline-block">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-6 flex-1">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readingTime.text}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            
            {posts.length === 0 && (
              <div className="col-span-2 text-center py-20 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-lg">More insights coming soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
