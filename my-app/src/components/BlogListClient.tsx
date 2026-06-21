'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, CalendarDays, ChevronLeft, ChevronRight, Search, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  coverImage?: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

interface BlogListClientProps {
  posts: Omit<BlogPost, 'content'>[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const gridRef = useRef<HTMLDivElement>(null);

  // Extract all unique tags dynamically and sort them by frequency or alphabetically
  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags);
    // Count occurrences of each tag
    const tagCounts: { [key: string]: number } = {};
    allTags.forEach((tag) => {
      const normalized = tag.toLowerCase().trim();
      tagCounts[normalized] = (tagCounts[normalized] || 0) + 1;
    });

    // Map to original casing (pick the most common casing or first casing found)
    const casingMap: { [key: string]: string } = {};
    posts.flatMap((post) => post.tags).forEach((tag) => {
      casingMap[tag.toLowerCase().trim()] = tag;
    });

    const sortedTags = Object.keys(tagCounts)
      .sort((a, b) => tagCounts[b] - tagCounts[a] || a.localeCompare(b))
      .map((tagKey) => casingMap[tagKey]);

    return ['All', ...sortedTags];
  }, [posts]);

  // Format tags for display in category pill buttons
  const formatTagName = (tag: string) => {
    if (tag === 'All') return 'All Articles';
    if (tag.toLowerCase() === 'seo') return 'SEO';
    if (tag.toLowerCase() === 'ui/ux') return 'UI/UX';
    return tag
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Reset page when filtering/searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  // Filter posts based on search and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === 'All' ||
        post.tags.some((tag) => tag.toLowerCase().trim() === selectedTag.toLowerCase().trim());

      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (gridRef.current) {
      const offset = 120; // offset for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = gridRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div ref={gridRef} className="max-w-5xl mx-auto scroll-mt-32">
      {/* Search & Tags Section */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search articles by title, tags, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-11 py-3.5 bg-white border border-gray-200 text-gray-900 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Dynamic Category Filter Tags */}
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2 px-1">
            {tags.map((tag) => {
              const isSelected = selectedTag.toLowerCase().trim() === tag.toLowerCase().trim();
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-100 scale-105'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {formatTagName(tag)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blog Grid with Framer Motion Layout animations */}
      <motion.div
        layout="position"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2 min-h-[300px]"
      >
        <AnimatePresence mode="popLayout">
          {currentPosts.map((post) => (
            <motion.article
              layout
              key={post.slug}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group relative"
              whileHover={{ y: -6 }}
            >
              {post.coverImage && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative h-64 overflow-hidden bg-gray-50"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedTag(tag);
                      }}
                      className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full hover:bg-blue-100 cursor-pointer transition-colors"
                    >
                      {formatTagName(tag)}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`} className="inline-block mt-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mt-3 mb-6 flex-1 line-clamp-3 leading-relaxed text-sm md:text-base">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 text-gray-400" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {post.readingTime.text}
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 text-xs">
                    Read Article <BookOpen className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-2 text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center p-6"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No articles found</h3>
            <p className="text-gray-500 max-w-sm">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try checking the spelling or exploring other tags.
            </p>
            {(searchQuery || selectedTag !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('All');
                }}
                className="mt-5 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-gray-100">
          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1.5">
            {currentPage > 3 && totalPages > 5 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  1
                </button>
                {currentPage > 4 && (
                  <span className="px-2 text-gray-400 select-none">...</span>
                )}
              </>
            )}

            {getPageNumbers().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white border border-blue-600 shadow-sm shadow-blue-100'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {currentPage < totalPages - 2 && totalPages > 5 && (
              <>
                {currentPage < totalPages - 3 && (
                  <span className="px-2 text-gray-400 select-none">...</span>
                )}
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
