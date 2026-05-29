import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency India — Paid Ads That Drive Real ROI',
  description:
    'IgniteX is a performance marketing agency in India specialising in Google Ads, Meta Ads, LinkedIn Ads, and conversion funnel optimisation. We deliver measurable results — leads, sales, and ROI.',
  keywords: [
    'performance marketing agency India',
    'performance marketing Jamshedpur',
    'Google Ads agency India',
    'Meta Ads agency',
    'paid advertising agency India',
    'PPC management India',
    'conversion rate optimisation',
    'lead generation campaigns India',
    'ROI-driven marketing',
    'Facebook ads management India',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/performance-marketing',
  },
  openGraph: {
    title: 'Performance Marketing Agency India | IgniteX — Ads That Convert',
    description:
      'Drive qualified leads and sales with IgniteX performance marketing. Google Ads, Meta Ads, and full-funnel campaigns built for maximum ROI.',
    url: 'https://www.ignitexsolution.com/services/performance-marketing',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Performance Marketing Agency India — IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency India | IgniteX',
    description:
      'Google Ads, Meta Ads, and full-funnel performance marketing for maximum ROI.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const channels = [
  {
    name: 'Google Search Ads',
    desc: 'Capture high-intent buyers searching for your products or services right now.',
  },
  {
    name: 'Google Display & YouTube',
    desc: 'Build brand awareness and retarget warm audiences across Google's network.',
  },
  {
    name: 'Meta Ads (Facebook & Instagram)',
    desc: 'Precision-targeted campaigns reaching your ideal audience by interest, behaviour, and demographics.',
  },
  {
    name: 'LinkedIn Ads',
    desc: 'B2B lead generation reaching decision-makers by industry, company size, and job title.',
  },
];

const benefits = [
  'Full campaign setup — targeting, creatives, copy, and landing pages',
  'Daily bid management and budget optimisation for maximum efficiency',
  'A/B testing of ad creatives and landing pages continuously',
  'Conversion tracking and attribution across all touchpoints',
  'Retargeting campaigns to recapture high-intent website visitors',
  'Transparent weekly reports with impressions, clicks, cost-per-lead, and ROI',
  'Average 80% improvement in cost-per-acquisition within 90 days',
  'Dedicated campaign manager — no junior account executives',
];

const faqs = [
  {
    question: 'What is performance marketing?',
    answer:
      'Performance marketing is a results-driven approach to digital advertising where you only pay for specific outcomes — clicks, leads, or sales. Unlike traditional marketing, every rupee spent is trackable. It includes Google Ads, Meta Ads, affiliate marketing, and any paid channel where ROI can be directly measured.',
  },
  {
    question: 'How much should I spend on Google Ads in India?',
    answer:
      'For small businesses, a starting budget of ₹15,000–₹30,000/month on Google Ads is recommended to gather meaningful data. For competitive industries, ₹50,000–₹2,00,000/month delivers faster results. We recommend a budget based on your industry\'s average cost-per-click and your target cost-per-lead.',
  },
  {
    question: 'How quickly can I see results from paid ads?',
    answer:
      'Google Search Ads can generate leads within 24–48 hours of launch. Meta Ads typically take 1–2 weeks for the algorithm to optimise. Full campaign optimisation for maximum efficiency usually takes 4–6 weeks as we gather conversion data and refine targeting.',
  },
  {
    question: 'Do you manage both Google and Meta ads?',
    answer:
      'Yes. We manage campaigns across all major paid channels — Google Search, Display, YouTube, Facebook, Instagram, and LinkedIn. We recommend the right channel mix based on your audience, goals, and budget.',
  },
  {
    question: 'How do you measure the success of performance marketing campaigns?',
    answer:
      'We set up end-to-end conversion tracking from ad click to lead or purchase. Key metrics we track include: cost per click (CPC), cost per lead (CPL), return on ad spend (ROAS), conversion rate, and overall ROI. You get transparent monthly reports showing exactly how your budget is performing.',
  },
];

export default function PerformanceMarketingPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'Performance Marketing', url: 'https://www.ignitexsolution.com/services/performance-marketing' },
        ]}
      />
      <ServiceSchema
        name="Performance Marketing"
        description="Performance marketing agency in India specialising in Google Ads, Meta Ads, LinkedIn Ads, and conversion funnel optimisation for measurable ROI."
        url="https://www.ignitexsolution.com/services/performance-marketing"
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Performance Marketing · India
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Performance Marketing Agency{' '}
              <span className="text-red-500">India</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Every rupee you spend should generate a measurable return. We build and manage paid
              advertising campaigns across Google, Meta, and LinkedIn — optimised daily for
              maximum leads, sales, and ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Ad Audit <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Channels */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Channels We <span className="text-red-600">Manage</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {channels.map(({ name, desc }) => (
                <div key={name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{name}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You Get With <span className="text-red-600">IgniteX</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <Check className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{b}</p>
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
                Frequently Asked <span className="text-red-600">Questions</span>
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
              Ready to Scale with Paid Ads?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a free ad account audit. We&apos;ll analyse your current campaigns and show you
              exactly where you&apos;re losing money and how to maximise your ad spend ROI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get My Free Ad Audit <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
