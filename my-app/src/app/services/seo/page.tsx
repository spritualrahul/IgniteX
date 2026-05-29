import { redirect } from 'next/navigation';

// 301 redirect handled in next.config.ts redirects().
// This component is a fallback for App Router catch — permanent redirect to canonical URL.
export default function SeoRedirectPage() {
  redirect('/services/seo-services');
}
