import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

// /our-story canonically lives at /about — noindex prevents accidental indexing
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OurStoryPage() {
  redirect('/about');
}
