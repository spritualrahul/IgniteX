import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Jamshedpur — Grow Your Business Online',
  description:
    'IgniteX is a results-driven digital marketing agency in Jamshedpur. We offer social media marketing, PPC, content marketing, email campaigns, and lead generation to grow your business online.',
  keywords: [
    'top digital marketing agency Jamshedpur',
    'best digital marketing company in Jharkhand',
    'social media management services Jamshedpur',
    'performance marketing agency Jamshedpur',
    'B2B lead generation services India',
    'ecommerce digital marketing India',
    'SEO and digital marketing services Jamshedpur',
    'Facebook and Instagram ads management',
    'Google Ads expert Jamshedpur',
    'online brand reputation management',
    'digital marketing consultant Jharkhand',
    'conversion rate optimization services',
    'web design agency Jamshedpur',
    'website development company Jharkhand',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing Agency Jamshedpur | IgniteX',
    description:
      'Grow your business online with IgniteX — a full-service digital marketing agency in Jamshedpur. Social media, PPC, content marketing, and lead generation that deliver real ROI.',
    url: 'https://www.ignitexsolution.com/services/digital-marketing',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency Jamshedpur — IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency Jamshedpur | IgniteX',
    description:
      'Full-service digital marketing in Jamshedpur — social media, PPC, content, and lead generation.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const services = [
  {
    title: 'Social Media Marketing',
    desc: 'Engaging content, consistent branding, and community management across Instagram, Facebook, and LinkedIn.',
  },
  {
    title: 'Pay-Per-Click Advertising (PPC)',
    desc: 'Data-driven Google Ads and Meta Ads campaigns that maximise ROI and keep cost-per-lead low.',
  },
  {
    title: 'Content Marketing',
    desc: 'Blog posts, landing pages, and video scripts crafted to educate, engage, and convert your target audience.',
  },
  {
    title: 'Email Marketing',
    desc: 'Automated email sequences and newsletters that nurture leads and drive repeat purchases.',
  },
  {
    title: 'Lead Generation',
    desc: 'Multi-channel funnels — organic, paid, and referral — designed to fill your pipeline with qualified leads.',
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Clear dashboards showing traffic, conversions, cost-per-acquisition, and ROI every month.',
  },
];

const benefits = [
  'Custom strategy built around your business goals and target audience',
  'Dedicated account manager — one point of contact, full transparency',
  'A/B tested creatives and copy that continuously improve performance',
  'Local Jamshedpur market expertise combined with national reach',
  '80% average ROI improvement across our client portfolio',
  'No lock-in contracts — results-driven monthly engagement',
];

const faqs = [
  {
    question: 'What digital marketing services does IgniteX offer in Jamshedpur?',
    answer:
      'IgniteX offers a full suite of digital marketing services including social media marketing, PPC (Google Ads, Meta Ads), content marketing, email marketing, lead generation, SEO, and analytics. We tailor every campaign to your specific business goals and local Jamshedpur market.',
  },
  {
    question: 'How much does digital marketing cost in Jamshedpur?',
    answer:
      'Digital marketing costs depend on the channels you use, campaign size, and goals. We offer flexible packages starting from budget-friendly plans for small businesses to comprehensive growth packages for established companies. Contact us for a custom quote.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'Paid channels like Google Ads and Meta Ads can generate leads within the first week. SEO and content marketing typically show measurable results in 3–6 months. Social media growth depends on your starting baseline and content consistency.',
  },
  {
    question: 'Do you manage social media pages for businesses in Jamshedpur?',
    answer:
      'Yes, we provide complete social media management — content creation, posting, community management, and paid promotions for Instagram, Facebook, LinkedIn, and other platforms relevant to your audience.',
  },
  {
    question: 'Can you run Google Ads for my local business in Jamshedpur?',
    answer:
      'Absolutely. We specialise in local Google Ads campaigns targeting Jamshedpur and Jharkhand audiences. Our campaigns use geo-targeting, local keywords, and call extensions to drive high-quality leads to your business.',
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'Digital Marketing', url: 'https://www.ignitexsolution.com/services/digital-marketing' },
        ]}
      />
      <ServiceSchema
        name="Digital Marketing Services"
        description="Full-service digital marketing agency in Jamshedpur offering social media marketing, PPC, content marketing, lead generation, and analytics for business growth."
        url="https://www.ignitexsolution.com/services/digital-marketing"
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Digital Marketing · Jamshedpur
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Marketing Agency in{' '}
              <span className="text-red-500">Jamshedpur</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop guessing, start growing. We build data-driven digital marketing campaigns that
              attract your ideal customers, generate qualified leads, and deliver measurable ROI —
              month after month.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Strategy Call <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Digital Marketing <span className="text-red-600">Services</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Everything you need to dominate your market online — from social media to paid ads to content.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
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
                Why Choose IgniteX for{' '}
                <span className="text-red-600">Digital Marketing?</span>
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
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy call. We&apos;ll audit your current digital presence and
              show you exactly how to generate more leads and revenue.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Book a Free Strategy Call <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
