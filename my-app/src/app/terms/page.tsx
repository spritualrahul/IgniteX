import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Service - IgniteX',
  description: 'Terms of Service for IgniteX website and digital services, including acceptable use, proposals, payments, intellectual property, privacy, and liability terms.',
  alternates: {
    canonical: 'https://www.ignitexsolution.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | IgniteX',
    description: 'The terms that apply when using IgniteX website and services.',
    url: 'https://www.ignitexsolution.com/terms',
    siteName: 'IgniteX',
    type: 'website',
  },
};

const termsSections = [
  {
    title: '1. Acceptance of terms',
    body: [
      'These Terms of Service apply when you access https://www.ignitexsolution.com, submit an enquiry, book a consultation, or engage IgniteX for web development, design, marketing, SEO, consulting, or related services.',
      'By using the website or requesting services, you agree to these terms. A signed proposal, statement of work, invoice, or written agreement may add project-specific terms.',
    ],
  },
  {
    title: '2. Services and proposals',
    body: [
      'Website content is provided for general information and does not create a binding service commitment. Project scope, timelines, deliverables, fees, dependencies, and acceptance criteria will be confirmed separately in writing.',
      'You agree to provide accurate information, timely approvals, required access, content, brand assets, and other materials needed to deliver the agreed work.',
    ],
  },
  {
    title: '3. Payments and taxes',
    body: [
      'Fees, milestones, taxes, payment dates, and refund terms are governed by the applicable proposal, invoice, or written agreement. Unless agreed otherwise, third-party platform, hosting, ad spend, plugin, font, stock asset, and subscription costs are billed separately or paid directly by you.',
    ],
  },
  {
    title: '4. Acceptable use',
    body: [
      'You must not misuse the website, attempt unauthorised access, interfere with security, submit unlawful or infringing content, impersonate others, upload malicious code, or use the website in a way that violates applicable law.',
    ],
  },
  {
    title: '5. Intellectual property',
    body: [
      'IgniteX website content, trademarks, designs, code, visuals, and materials are owned by IgniteX or its licensors unless stated otherwise. You may not copy, modify, redistribute, or exploit them without written permission.',
      'Project ownership, source files, licence terms, and reusable pre-existing tools or frameworks will be handled under the applicable project agreement.',
    ],
  },
  {
    title: '6. Privacy and DPDP compliance',
    body: [
      'Personal data submitted through the website is processed according to our Privacy Policy. You agree to provide authentic information and not submit personal data about another person unless you have authority to do so.',
      'Where your project involves processing personal data, you remain responsible for confirming your compliance obligations, notices, consents, retention rules, processor contracts, and other legal requirements for your business.',
    ],
  },
  {
    title: '7. Third-party services',
    body: [
      'The website and our work may integrate third-party services such as Google, Meta, EmailJS, hosting platforms, analytics tools, payment providers, advertising platforms, or content management systems. Your use of those services may be subject to their own terms and policies.',
    ],
  },
  {
    title: '8. Disclaimers and liability',
    body: [
      'The website is provided on an “as available” basis. We work to keep information accurate and systems reliable, but we do not guarantee that the website will be uninterrupted, error-free, or suitable for every purpose.',
      'To the maximum extent permitted by law, IgniteX will not be liable for indirect, incidental, special, consequential, punitive, or loss-of-profit damages arising from website use or reliance on website content.',
    ],
  },
  {
    title: '9. Suspension and termination',
    body: [
      'We may restrict access to the website or services if there is misuse, non-payment, security risk, unlawful activity, or breach of applicable terms. Project termination terms will be governed by the relevant written agreement.',
    ],
  },
  {
    title: '10. Governing law and disputes',
    body: [
      'These terms are governed by the laws of India. Subject to any mandatory legal requirement or written agreement to the contrary, courts with jurisdiction over Jamshedpur, Jharkhand will have jurisdiction for disputes.',
    ],
  },
  {
    title: '11. Changes',
    body: [
      'We may update these terms from time to time. The updated version will be posted on this page with a revised date.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: 'Home', url: 'https://www.ignitexsolution.com' },
          { name: 'Terms of Service', url: 'https://www.ignitexsolution.com/terms' },
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <span className="inline-flex rounded-md bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
              Legal terms
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              These terms explain the rules for using the IgniteX website and requesting our services.
            </p>
            <p className="mt-6 text-sm text-slate-600">
              <strong className="text-slate-900">Last updated:</strong> August 13, 2026
            </p>
          </section>

          <article className="mt-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700">
              {termsSections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <hr />

              <h2>Contact</h2>
              <p>
                For questions about these terms, contact <a href="mailto:contact@ignitexsolution.com">contact@ignitexsolution.com</a>.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
