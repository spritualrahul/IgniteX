import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy and DPDP Notice - IgniteX Digital Agency',
  description: 'DPDP-ready Privacy Policy for IgniteX covering consent, cookies, analytics, data principal rights, grievance redressal, retention, security, and third-party processors.',
  keywords: [
    'IgniteX privacy policy',
    'DPDP privacy notice',
    'Digital Personal Data Protection Act India',
    'data principal rights IgniteX',
    'cookie policy IgniteX',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy and DPDP Notice | IgniteX',
    description: 'How IgniteX collects, uses, protects, retains, and deletes personal data under India DPDP requirements.',
    url: 'https://www.ignitexsolution.com/privacy',
    siteName: 'IgniteX',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - IgniteX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy and DPDP Notice | IgniteX',
    description: 'Learn how IgniteX manages personal data, consent, cookies, and privacy requests.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

const policySections = [
  {
    title: '1. Who we are',
    body: [
      'IgniteX operates https://www.ignitexsolution.com and provides web development, design, digital marketing, SEO, consulting, and related technology services. For website enquiries and service delivery, IgniteX acts as the Data Fiduciary for personal data that it decides to collect and use.',
      'Privacy contact and grievance redressal: contact@ignitexsolution.com, +91-8935860306, IgniteX, Jamshedpur, Jharkhand, India.',
    ],
  },
  {
    title: '2. Personal data we collect',
    body: [
      'Contact and enquiry data: name, email address, phone number, country code, company or website URL if provided, subject, message, selected service, and consultation preferences.',
      'Booking data: selected date and time, meeting details, Google Meet link, service interest, and related communication records.',
      'Chatbot data: chat messages, selected service, callback preference, and phone number only when you choose to request a callback.',
      'Technical and usage data: IP address, browser, device information, pages visited, referring URLs, timestamps, approximate location, cookie identifiers, and event data. Non-essential analytics and marketing tags load only after consent.',
    ],
  },
  {
    title: '3. Purpose and legal basis',
    body: [
      'We process personal data for lawful purposes: responding to enquiries, scheduling consultations, providing requested services, maintaining records, securing the website, improving website performance, measuring campaigns, sending updates where permitted, complying with law, and establishing or defending legal claims.',
      'Where processing is based on consent, your consent is requested in clear language at the point of collection and can be withdrawn by contacting us. Withdrawal does not affect processing already completed before withdrawal or processing required by law.',
    ],
  },
  {
    title: '4. Cookies, analytics, and marketing tags',
    body: [
      'Essential cookies may be used to keep the website secure and functional. Analytics and marketing tools, including Google Tag Manager and tags that may support Google or Meta advertising measurement, are used only after you accept non-essential cookies.',
      'You may reject non-essential cookies from the consent banner. You may also clear the site consent record from your browser storage and revisit the site to choose again.',
    ],
  },
  {
    title: '5. Sharing and processors',
    body: [
      'We share personal data only where needed for the purposes above. Service providers may include EmailJS for enquiry delivery, Google Calendar and Google Meet for consultation booking, website hosting and security providers, analytics or advertising providers after consent, and professional advisers where required.',
      'We require processors to use personal data only for instructed purposes, apply reasonable security safeguards, and delete or return data when it is no longer required, subject to legal retention needs.',
    ],
  },
  {
    title: '6. Retention and deletion',
    body: [
      'We keep enquiry and consultation records only as long as needed to respond, provide services, maintain business records, resolve disputes, enforce agreements, or comply with law. When the specified purpose is no longer served, we delete or anonymise personal data unless retention is legally required.',
      'You may request erasure of personal data. We will erase it unless continued retention is necessary for the original purpose, legal compliance, fraud prevention, dispute resolution, or another lawful ground.',
    ],
  },
  {
    title: '7. Your DPDP rights',
    body: [
      'You may request access to a summary of personal data we process about you, correction of inaccurate or misleading data, completion of incomplete data, updating of outdated data, erasure where applicable, withdrawal of consent, grievance redressal, and nomination of another person to exercise your rights in the event of death or incapacity.',
      'To exercise rights, email contact@ignitexsolution.com with enough information to verify your identity and locate your request. We may ask for verification before acting on a request.',
    ],
  },
  {
    title: '8. Children and minors',
    body: [
      'Our website and services are intended for business users and are not directed at children. We do not knowingly track children, behaviourally monitor children, target advertising to children, or process children’s personal data without verifiable parent or guardian consent where required.',
    ],
  },
  {
    title: '9. Security and breach response',
    body: [
      'We use reasonable technical and organisational safeguards, including access controls, HTTPS, limited access to business tools, secure service providers, and periodic review of data flows. No online system is completely risk-free.',
      'If a personal data breach occurs, we will assess the impact and notify affected Data Principals and the Data Protection Board of India in the form and manner required by applicable DPDP law and rules.',
    ],
  },
  {
    title: '10. International processing',
    body: [
      'Some processors may store or process data outside India. We use such processors for lawful business purposes and monitor transfer restrictions that may be notified by the Government of India under DPDP requirements.',
    ],
  },
  {
    title: '11. Grievance process',
    body: [
      'Send privacy grievances to contact@ignitexsolution.com with the subject line “DPDP Grievance”. We aim to acknowledge requests promptly, investigate fairly, and provide a reasoned response. If you are not satisfied, you may use remedies available under applicable law, including approaching the Data Protection Board of India when that route is available.',
    ],
  },
  {
    title: '12. Updates',
    body: [
      'We may update this notice as laws, rules, technology, or our services change. Material changes will be posted on this page with a revised date.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Privacy Policy', url: 'https://www.ignitexsolution.com/privacy' },
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <span className="inline-flex rounded-md bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
              DPDP-ready notice
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              This notice explains how IgniteX collects, uses, shares, protects, and deletes personal data. It is designed around India&apos;s Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025, while also supporting practical privacy expectations for customers outside India.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p><strong className="text-slate-900">Last updated:</strong> August 13, 2026</p>
              <p><strong className="text-slate-900">Privacy contact:</strong> contact@ignitexsolution.com</p>
            </div>
          </section>

          <article className="mt-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700">
              {policySections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <hr />

              <h2>Contact us</h2>
              <ul>
                <li>Email: <a href="mailto:contact@ignitexsolution.com">contact@ignitexsolution.com</a></li>
                <li>Phone: <a href="tel:+918935860306">+91-8935860306</a></li>
                <li>Contact page: <a href="https://www.ignitexsolution.com/contact">https://www.ignitexsolution.com/contact</a></li>
                <li>Location: Jamshedpur, Jharkhand, India</li>
              </ul>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
