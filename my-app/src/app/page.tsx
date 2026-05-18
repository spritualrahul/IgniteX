import { Metadata } from 'next';
import { ReviewSchema, AggregateRatingSchema, BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';
import ClientPage from './client-page';

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
          { author: 'Dhivya Mohan', datePublished: '2025-03-12', reviewBody: 'IgniteX built a stunning, modern website for Kalam Study Hall that perfectly captures our educational vision. The responsive design and smooth user experience have significantly boosted our online enrollments.', ratingValue: 5 },
        ]}
      />
      <AggregateRatingSchema ratingValue={5} reviewCount={5} />

      {/* Structured Data - Service */}
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
        {/* 
          SSR-ONLY CONTENT FOR GOOGLEBOT
          This section is visually hidden from users but fully readable by search engines.
          It contains the critical SEO content: H1, hero text, services overview, and location info.
          The actual visual UI is rendered by ClientPage below.
        */}
        <div
          aria-hidden="false"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
        >
          <h1>Web Development & Digital Marketing Agency in Jamshedpur | IgniteX</h1>
          <p>
            Transform your digital presence with results that truly matter. IgniteX is a premium digital agency 
            in Jamshedpur, Jharkhand specializing in custom web development, SEO, digital marketing, UI/UX design, 
            and e-commerce solutions. From beautifully crafted websites to intelligent, AI-driven solutions, 
            we bring your ideas to life with care, precision, and purpose — one detail at a time.
          </p>
          <h2>Our Services</h2>
          <ul>
            <li>Web Development — Custom, high-performance websites and web applications built with React, Next.js, and Node.js. Responsive, fast, and scalable solutions tailored to your business needs.</li>
            <li>Digital Marketing — Data-driven digital marketing strategies including PPC, content marketing, and social media campaigns that maximize ROI and drive measurable business growth.</li>
            <li>SEO Services — Proven SEO strategies and technical optimization to dominate search rankings, drive organic traffic, and establish your brand as an authority in your industry.</li>
            <li>UI/UX Design — Beautiful, intuitive interfaces designed with user psychology and conversion optimization in mind.</li>
            <li>E-commerce Solutions — End-to-end e-commerce solutions that drive sales, streamline operations, and scale effortlessly.</li>
            <li>Performance Marketing — Strategic paid advertising and lead generation campaigns across Google Ads, Meta, and LinkedIn.</li>
          </ul>
          <h2>Why Choose IgniteX?</h2>
          <p>50+ projects delivered. 98% client satisfaction. 80% average ROI boost. Based in Jamshedpur, Jharkhand, India.</p>
          <p>Contact us: +91 8935860306 | contact@ignitexsolution.com</p>
        </div>

        {/* Actual visual UI — rendered by client component */}
        <ClientPage />
      </main>
    </>
  );
}