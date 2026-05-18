import { Metadata } from 'next';
import Link from 'next/link';
import { ReviewSchema, AggregateRatingSchema, BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';
import ClientHomeSections from './client-page';

export const metadata: Metadata = {
  title: 'IgniteX - Top Website Development & Digital Marketing Agency in Jamshedpur',
  description: 'IgniteX is a premium digital agency in Jamshedpur specializing in web development, SEO, digital marketing, UI/UX design, and e-commerce solutions. 50+ projects delivered with 80% average ROI.',
  keywords: [
    'website development agency Jamshedpur',
    'digital marketing agency Jamshedpur',
    'SEO services Jamshedpur',
    'web development company India',
    'e-commerce development',
    'UI/UX design services',
    'performance marketing',
    'lead generation agency',
    'branding agency India',
    'social media marketing',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com',
  },
  openGraph: {
    title: 'IgniteX - Premium Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with premium web development, SEO, and digital marketing services. 50+ projects, 98% client satisfaction.',
    url: 'https://www.ignitexsolution.com',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IgniteX - Premium Digital Agency | Beyond Deadline Before Time',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IgniteX - Premium Web Development & Digital Marketing Agency',
    description: 'Transform your digital presence with premium web development, SEO, and growth marketing. 50+ projects, 98% satisfaction.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data - Breadcrumb */}
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
        ]}
      />

      {/* Structured Data - Reviews */}
      <ReviewSchema
        reviews={[
          { author: 'Layak Singh', datePublished: '2024-09-15', reviewBody: 'IgniteX transformed our digital infrastructure with their cutting-edge AI solutions. Their team delivered exceptional results that exceeded our expectations.', ratingValue: 5 },
          { author: 'Rahul Sharma', datePublished: '2024-08-22', reviewBody: 'The platform built by IgniteX has been instrumental in scaling our fitness business. Their attention to detail and technical expertise is unmatched.', ratingValue: 5 },
          { author: 'Priya Patel', datePublished: '2024-07-10', reviewBody: 'Working with IgniteX was a game-changer for our digital marketing strategy. Their innovative approach delivered outstanding results.', ratingValue: 5 },
          { author: 'Amit Verma', datePublished: '2024-06-05', reviewBody: 'The team at IgniteX built us a robust fintech solution that handles thousands of transactions daily with zero downtime.', ratingValue: 5 },
        ]}
      />
      <AggregateRatingSchema ratingValue={5} reviewCount={4} />

      {/* Structured Data - Service (all 10 services) */}
      <ServiceSchema name="Web Development" description="Custom, high-performance websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js." url="https://www.ignitexsolution.com/services/web-development" />
      <ServiceSchema name="Digital Marketing" description="Data-driven digital marketing strategies including PPC, content marketing, and social media that maximize ROI." url="https://www.ignitexsolution.com/services/digital-marketing" />
      <ServiceSchema name="SEO Services" description="Proven SEO strategies and technical optimization to dominate search rankings and drive organic traffic." url="https://www.ignitexsolution.com/services/seo" />
      <ServiceSchema name="UI/UX Design" description="Beautiful, intuitive interfaces designed with user psychology and conversion optimization in mind." url="https://www.ignitexsolution.com/services" />
      <ServiceSchema name="E-commerce Solutions" description="End-to-end e-commerce solutions that drive sales, streamline operations, and scale effortlessly." url="https://www.ignitexsolution.com/services" />

      {/* Structured Data - FAQ */}
      <FAQSchema
        faqs={[
          { question: 'What services does IgniteX offer?', answer: 'IgniteX offers comprehensive digital services including web development, SEO, digital marketing, performance marketing, social media management, branding, UI/UX design, lead generation, e-commerce solutions, and business growth consulting.' },
          { question: 'How long does a typical project take?', answer: 'Timelines vary based on scope. A standard website takes 4-6 weeks, while complex web applications can take 8-12 weeks. We pride ourselves on delivering ahead of schedule.' },
          { question: 'Do you offer ongoing support and maintenance?', answer: 'Yes, we offer flexible maintenance plans including performance monitoring, security updates, content updates, and 24/7 priority support.' },
          { question: 'What is your pricing structure?', answer: 'We offer transparent, project-based pricing with no hidden fees. Our packages range from startup-friendly tiers to enterprise solutions. Contact us for a custom quote.' },
          { question: 'Can you work with our existing tech stack?', answer: 'Absolutely! Our team is proficient across all major technologies including React, Next.js, WordPress, Shopify, and custom stacks. We integrate seamlessly with existing infrastructure.' },
          { question: 'Do you guarantee results for SEO and marketing?', answer: 'While no ethical agency guarantees specific rankings, we guarantee measurable improvement. Our clients typically see 80-300% improvement in key metrics within the first 6 months.' },
        ]}
      />

      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* ========================================
            SSR-RENDERED ABOVE-THE-FOLD CONTENT
            This HTML is visible to Googlebot before JS runs.
            ======================================== */}
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "'Oswald', Poppins, sans-serif" }}>
                  <span className="text-gray-900">Igniting </span>
                  <span className="text-red-600">Your Digital Presence.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed tracking-tight">
                  Transform your digital presence with results that truly matter. From beautifully crafted websites to intelligent, AI-driven solutions, we bring your ideas to life with care, precision, and purpose — one detail at a time.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded shadow-lg text-lg transition-colors duration-300"
                  >
                    Connect with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSR-rendered services overview for Googlebot */}
        <section id="services-overview" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We deliver comprehensive digital solutions to help your business grow — from custom web development and SEO to performance marketing and brand strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🌐 Web Development</h3>
                <p className="text-gray-600">Custom, high-performance websites and web applications built with React, Next.js, and Node.js. Responsive, fast, and scalable solutions tailored to your business needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">📈 Digital Marketing</h3>
                <p className="text-gray-600">Data-driven digital marketing strategies including PPC, content marketing, and social media campaigns that maximize ROI and drive measurable business growth.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🔍 SEO Services</h3>
                <p className="text-gray-600">Proven SEO strategies and technical optimization to dominate search rankings, drive organic traffic, and establish your brand as an authority in your industry.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🎨 UI/UX Design</h3>
                <p className="text-gray-600">Beautiful, intuitive interfaces designed with user psychology and conversion optimization in mind. We create experiences that delight users and drive business results.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">🛒 E-commerce Solutions</h3>
                <p className="text-gray-600">End-to-end e-commerce solutions that drive sales, streamline operations, and scale effortlessly. From Shopify to custom platforms, we build stores that convert.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 Performance Marketing</h3>
                <p className="text-gray-600">Strategic paid advertising and lead generation campaigns across Google Ads, Meta, and LinkedIn. We optimize for conversions, not just clicks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client-side interactive sections (hydrate after SSR) */}
        <ClientHomeSections />
      </main>
    </>
  );
}