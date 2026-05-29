import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO Services in Jamshedpur — Rank Higher, Get More Customers',
  description:
    'IgniteX offers expert SEO services in Jamshedpur — technical SEO, local SEO, keyword research, on-page optimization, and link building. Drive organic traffic and dominate search rankings.',
  keywords: [
    'SEO services Jamshedpur',
    'SEO agency Jamshedpur',
    'local SEO Jamshedpur',
    'technical SEO India',
    'search engine optimization Jharkhand',
    'best SEO company Jamshedpur',
    'organic traffic growth',
    'keyword ranking services',
    'SEO audit Jamshedpur',
    'on-page SEO optimization',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/seo-services',
  },
  openGraph: {
    title: 'SEO Services Jamshedpur | IgniteX — Rank #1 on Google',
    description:
      'Get your business to the top of Google with proven SEO strategies. IgniteX delivers technical SEO, local SEO, and content optimization for businesses in Jamshedpur and across India.',
    url: 'https://www.ignitexsolution.com/services/seo-services',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services Jamshedpur — IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services Jamshedpur | IgniteX',
    description:
      'Dominate search rankings with IgniteX SEO services in Jamshedpur. Technical SEO, local SEO, and content strategy.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const benefits = [
  'Complete technical SEO audit and fixes (Core Web Vitals, crawlability, schema)',
  'Keyword research targeting high-intent, local Jamshedpur searches',
  'On-page optimization — titles, meta tags, headings, content structure',
  'Local SEO — Google Business Profile optimization and local citations',
  'High-authority backlink building from relevant industry sources',
  'Monthly ranking reports and transparent performance dashboards',
  'Competitor gap analysis to find quick-win opportunities',
  'Content strategy aligned to your target buyer journey',
];

const process = [
  { step: '01', title: 'SEO Audit', desc: 'We diagnose your site — technical health, current rankings, keyword gaps, and competitor benchmarks.' },
  { step: '02', title: 'Strategy', desc: 'We build a keyword map and content plan targeting the highest-ROI search terms for your business.' },
  { step: '03', title: 'Optimization', desc: 'On-page fixes, technical SEO, schema markup, site speed, and content improvements are implemented.' },
  { step: '04', title: 'Link Building', desc: 'We earn authoritative backlinks through outreach, PR, and digital partnerships.' },
  { step: '05', title: 'Track & Grow', desc: 'Monthly reporting shows rank movement, traffic growth, and leads generated — with continuous refinement.' },
];

const faqs = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a long-term investment. Most clients start seeing measurable ranking improvements in 3–4 months, with significant organic traffic growth by 6 months. For local SEO in Jamshedpur, results can appear faster due to lower competition.',
  },
  {
    question: 'What is local SEO and do I need it in Jamshedpur?',
    answer:
      'Local SEO optimizes your online presence to attract customers searching for services in a specific location — for example, "web development agency Jamshedpur". If your business serves local customers, local SEO is essential. We optimize your Google Business Profile, local citations, and geo-targeted content.',
  },
  {
    question: 'Do you guarantee first-page Google rankings?',
    answer:
      "No ethical SEO agency can guarantee specific rankings — Google's algorithm is unpredictable. What we guarantee is a proven, white-hat strategy, transparent reporting, and measurable improvement in organic traffic and keyword positions. Most of our clients achieve first-page rankings for primary keywords within 6 months.",
  },
  {
    question: 'What does your SEO service include?',
    answer:
      'Our SEO service includes a full site audit, technical fixes, keyword research, on-page optimization, content recommendations, link building, Google Business Profile optimization, and monthly performance reporting. Everything is tailored to your industry and goals.',
  },
  {
    question: 'How much do SEO services cost in Jamshedpur?',
    answer:
      'Our SEO packages start at a competitive monthly retainer suitable for small businesses, with enterprise plans for larger sites. We offer transparent, results-driven pricing. Contact us for a custom quote based on your site size, goals, and current rankings.',
  },
];

export default function SeoServicesPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'SEO Services', url: 'https://www.ignitexsolution.com/services/seo-services' },
        ]}
      />
      <ServiceSchema
        name="SEO Services"
        description="Expert SEO services in Jamshedpur — technical SEO, local SEO, keyword research, on-page optimization, and link building to drive organic traffic and dominate search rankings."
        url="https://www.ignitexsolution.com/services/seo-services"
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
              SEO Services · Jamshedpur
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SEO Services in{' '}
              <span className="text-red-500">Jamshedpur</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get your business to the top of Google. We deliver proven, white-hat SEO strategies —
              technical optimization, local SEO, and content that ranks — so your customers find you
              before they find your competitors.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free SEO Audit <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What&apos;s Included in Our{' '}
                <span className="text-red-600">SEO Package</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A full-stack SEO service covering every factor that impacts your Google rankings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <Check className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-red-600">SEO Process</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                A systematic, data-driven approach that delivers consistent ranking improvements.
              </p>
            </div>
            <div className="space-y-6">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <span className="text-red-600 font-bold text-2xl flex-shrink-0 w-12">{step}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked{' '}
                <span className="text-red-600">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ question, answer }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{question}</h3>
                  <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Rank #1 on Google?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit worth ₹5,000 — we&apos;ll show you exactly what&apos;s holding
              your site back and how to fix it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start Your SEO Journey <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
