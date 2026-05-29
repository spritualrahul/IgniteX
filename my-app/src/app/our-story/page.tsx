import { redirect } from 'next/navigation';

// /our-story canonically lives at /about
export default function OurStoryPage() {
  redirect('/about');
}
