import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Ecommerce Development India — Build a High-Converting Online Store',
  description:
    'IgniteX builds high-performance ecommerce websites in India — custom storefronts, Shopify, WooCommerce, and headless commerce. Fast, secure, mobile-first online stores that convert visitors into buyers.',
  keywords: [
    'ecommerce development India',
    'ecommerce website development Jamshedpur',
    'Shopify development India',
    'WooCommerce development',
    'custom ecommerce website',
    'online store development India',
    'headless commerce India',
    'B2B ecommerce development',
    'ecommerce SEO India',
    'buy ecommerce website India',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/ecommerce',
  },
  openGraph: {
    title: 'Ecommerce Development India | IgniteX — Stores That Sell',
    description:
      'Build a high-converting online store with IgniteX. Custom ecommerce development, Shopify, WooCommerce, and headless commerce solutions for Indian businesses.',
    url: 'https://www.ignitexsolution.com/services/ecommerce',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Development India — IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecommerce Development India | IgniteX',
    description:
      'Custom ecommerce development in India — Shopify, WooCommerce, headless commerce.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const features = [
  'Custom storefront design aligned to your brand identity',
  'Mobile-first, blazing-fast page speeds (Core Web Vitals optimised)',
  'Secure payment gateway integration (Razorpay, Stripe, PayU)',
  'Inventory management, order tracking, and admin dashboard',
  'Product catalogue with search, filters, and variant support',
  'Abandoned cart recovery and email automation',
  'Ecommerce SEO — product schema, category pages, sitemaps',
  'Multi-currency and GST-compliant tax calculation',
];

const platforms = [
  { name: 'Custom Next.js', desc: 'Maximum performance and flexibility for high-traffic stores.' },
  { name: 'Shopify', desc: 'Fast launch with powerful apps and payment integrations.' },
  { name: 'WooCommerce', desc: 'WordPress-based flexibility with deep customisation.' },
  { name: 'Headless Commerce', desc: 'Decouple frontend from backend for unmatched speed and scalability.' },
];

const faqs = [
  {
    question: 'How much does ecommerce website development cost in India?',
    answer:
      'Ecommerce website costs vary by platform and feature complexity. A Shopify store can be set up from ₹30,000–₹1,00,000, while a fully custom Next.js ecommerce solution ranges from ₹1,00,000–₹5,00,000+. We provide a detailed quote after understanding your product catalogue, integrations, and growth goals.',
  },
  {
    question: 'Which ecommerce platform should I use — Shopify, WooCommerce, or custom?',
    answer:
      'It depends on your needs. Shopify is ideal for fast launches with less technical overhead. WooCommerce suits businesses already using WordPress. Custom development (Next.js) gives maximum performance and scalability for high-traffic stores or unique business logic. We recommend the right platform after understanding your volume, budget, and long-term plans.',
  },
  {
    question: 'Do you integrate Indian payment gateways like Razorpay?',
    answer:
      'Yes. We integrate all major Indian payment gateways including Razorpay, PayU, Paytm, CCAvenue, and Cashfree. We also support UPI, net banking, and EMI options to maximise checkout conversion for Indian shoppers.',
  },
  {
    question: 'Can you add SEO to my ecommerce website?',
    answer:
      'Absolutely. Every ecommerce site we build includes technical SEO foundations — proper URL structures, product schema markup, optimised meta tags, XML sitemaps, fast page speeds, and breadcrumb navigation — all of which help your products rank higher on Google.',
  },
  {
    question: 'Do you provide ongoing ecommerce support after launch?',
    answer:
      'Yes. We offer maintenance packages covering bug fixes, plugin updates, security patches, product catalogue updates, and performance monitoring. You can also scale up support as your store grows.',
  },
];

export default function EcommercePage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'Ecommerce Development', url: 'https://www.ignitexsolution.com/services/ecommerce' },
        ]}
      />
      <ServiceSchema
        name="Ecommerce Development"
        description="High-performance ecommerce website development in India — custom storefronts, Shopify, WooCommerce, and headless commerce solutions that convert visitors into buyers."
        url="https://www.ignitexsolution.com/services/ecommerce"
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Ecommerce Development · India
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ecommerce Development{' '}
              <span className="text-red-500">India</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Your online store should be your best salesperson — open 24/7, fast on every device, and
              optimised to convert. We build ecommerce websites that load fast, rank on Google, and
              turn browsers into buyers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Build My Online Store <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Platforms We <span className="text-red-600">Build On</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map(({ name, desc }) => (
                <div key={name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{name}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything Your Store <span className="text-red-600">Needs</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <Check className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{f}</p>
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
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get a free ecommerce consultation. We&apos;ll recommend the right platform, estimate
              costs, and show you a roadmap to launch in weeks — not months.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
