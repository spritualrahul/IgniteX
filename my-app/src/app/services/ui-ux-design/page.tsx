import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema, FAQSchema, ServiceSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'UI UX Design Agency in India — User-Centred Digital Design',
  description:
    'IgniteX is a UI/UX design agency in India delivering intuitive, beautiful, and conversion-optimised interfaces for web apps, mobile apps, and SaaS products. Based in Jamshedpur.',
  keywords: [
    'UI UX design agency India',
    'UX design company Jamshedpur',
    'user interface design India',
    'product design agency',
    'mobile app UI design',
    'web app UX design',
    'SaaS UI design India',
    'conversion rate optimisation design',
    'wireframing prototyping India',
    'Figma design agency',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI UX Design Agency India | IgniteX — Beautiful, Conversion-Driven Design',
    description:
      'Transform user experiences with IgniteX UI/UX design services. We create intuitive interfaces that users love and that drive measurable business results.',
    url: 'https://www.ignitexsolution.com/services/ui-ux-design',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UI UX Design Agency India — IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design Agency India | IgniteX',
    description:
      'Beautiful, conversion-focused UI/UX design for web apps, mobile apps, and SaaS products.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const deliverables = [
  'User research and persona development',
  'Information architecture and user flow mapping',
  'Wireframes and interactive prototypes (Figma)',
  'High-fidelity UI design with design system',
  'Usability testing and iteration',
  'Developer handoff with design tokens and specs',
  'Mobile-first responsive design',
  'Accessibility-compliant interfaces (WCAG 2.1)',
];

const processSteps = [
  { num: '01', title: 'Discover', desc: 'We study your users, business goals, and competitive landscape to identify design opportunities.' },
  { num: '02', title: 'Define', desc: 'User personas, journey maps, and information architecture establish the foundation for design decisions.' },
  { num: '03', title: 'Design', desc: 'Wireframes, prototypes, and high-fidelity UI screens are crafted and refined through feedback cycles.' },
  { num: '04', title: 'Test', desc: 'Usability testing with real users surfaces friction and validates design decisions before development.' },
  { num: '05', title: 'Deliver', desc: 'Complete design system, Figma files, and developer-ready specs handed off for seamless implementation.' },
];

const faqs = [
  {
    question: 'What is UI/UX design and why does my business need it?',
    answer:
      'UI (User Interface) design focuses on the visual elements of a product — layouts, colours, typography. UX (User Experience) design focuses on the overall experience — how easy and enjoyable it is to use. Together, great UI/UX design reduces user friction, increases conversions, and builds brand trust. Businesses with well-designed products see up to 400% higher conversion rates.',
  },
  {
    question: 'What tools do you use for UI/UX design?',
    answer:
      'We primarily use Figma for wireframing, prototyping, and high-fidelity UI design. We also use tools like Maze for usability testing, Notion for documentation, and Zeplin or Figma Dev Mode for developer handoffs.',
  },
  {
    question: 'Do you design for both mobile and web?',
    answer:
      'Yes. All our designs are mobile-first and responsive, covering web browsers, iOS, and Android. We design consistent experiences across all screen sizes with a unified design system.',
  },
  {
    question: 'Can you redesign our existing product?',
    answer:
      'Absolutely. We start with a UX audit of your current product to identify pain points and opportunities, then redesign with a focus on usability improvements and conversion optimisation — without losing your brand identity.',
  },
  {
    question: 'How long does a UI/UX design project take?',
    answer:
      'A focused landing page or marketing site design takes 2–3 weeks. A full product design (web app or mobile app) typically spans 6–10 weeks depending on complexity, number of screens, and feedback rounds.',
  },
];

export default function UiUxDesignPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Services', url: 'https://www.ignitexsolution.com/services' },
          { name: 'UI/UX Design', url: 'https://www.ignitexsolution.com/services/ui-ux-design' },
        ]}
      />
      <ServiceSchema
        name="UI/UX Design Services"
        description="User-centred UI/UX design agency in India delivering wireframes, prototypes, and high-fidelity interfaces for web apps, mobile apps, and SaaS products."
        url="https://www.ignitexsolution.com/services/ui-ux-design"
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-red-400 text-sm font-semibold tracking-widest uppercase mb-4">
              UI/UX Design · India
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              UI/UX Design Agency{' '}
              <span className="text-red-500">India</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Design that users love and that drives business results. We craft intuitive, beautiful
              interfaces — from research and wireframes to pixel-perfect UI — for web apps, mobile
              apps, and SaaS products.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start Your Design Project <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You <span className="text-red-600">Receive</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                End-to-end design deliverables — from research to developer-ready files.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <Check className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
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
                Our Design <span className="text-red-600">Process</span>
              </h2>
            </div>
            <div className="space-y-6">
              {processSteps.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <span className="text-red-600 font-bold text-2xl flex-shrink-0 w-12">{num}</span>
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
              Let&apos;s Design Something Remarkable
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Share your project and get a free design consultation. We&apos;ll show you how great
              UX can directly improve your conversion rates and user retention.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Design Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
