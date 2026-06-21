import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { BreadcrumbListSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy — IgniteX Digital Agency',
  description: 'Privacy Policy for IgniteX. Learn how we collect, use, and protect your data, including details regarding cookies, analytics, and Meta Ads / Facebook Pixel integration.',
  keywords: [
    'privacy policy IgniteX',
    'data protection policy',
    'meta ads privacy compliance',
    'facebook pixel privacy',
    'cookie policy Jamshedpur',
  ],
  alternates: {
    canonical: 'https://www.ignitexsolution.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | IgniteX - Premium Digital Agency',
    description: 'Read the privacy policy of IgniteX. Discover how we protect your personal information and maintain transparency with third-party tracking services.',
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
    title: 'Privacy Policy | IgniteX',
    description: 'Learn how IgniteX manages data privacy and user information.',
    images: ['/images/twitter-image.jpg'],
    creator: '@ignitex',
  },
};

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
      <main className="min-h-screen bg-slate-50/50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-10 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl -ml-20 -mb-20"></div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-xs bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
              Legal Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl">
              At IgniteX, transparency is one of our core values. This policy outlines how we handle, process, and protect your information when you visit our website or interact with our digital services.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 justify-center md:justify-start">
              <span><strong>Last Updated:</strong> June 21, 2026</span>
              <span className="hidden md:inline">•</span>
              <span><strong>Effective Date:</strong> October 1, 2025</span>
            </div>
          </div>

          {/* Policy Content Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700">
              
              <h2>1. Introduction</h2>
              <p>
                IgniteX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website <a href="https://www.ignitexsolution.com" target="_blank" rel="noopener noreferrer">https://www.ignitexsolution.com</a> (the &quot;Service&quot;). This Privacy Policy explains our practices regarding the collection, use, and disclosure of personal data when you use our website, and the choices you have associated with that data.
              </p>
              <p>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>

              <hr />

              <h2>2. Information We Collect</h2>
              <p>We collect several different types of information for various purposes to provide and improve our services to you:</p>
              
              <h3>Personal Data</h3>
              <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:</p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Company name & website URL</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h3>Usage Data</h3>
              <p>We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>

              <hr />

              <h2>3. Tracking Technologies, Cookies & Meta Ads</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
              </p>
              <p>
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
              </p>

              <blockquote>
                <strong>Meta Ads & Facebook Pixel Compliance Notice:</strong><br />
                We utilize third-party advertising tools, specifically <strong>Meta Ads</strong>, <strong>Facebook Pixel</strong>, and the <strong>Meta Conversions API</strong>. These services allow us to track user behavior after redirecting to our website by clicking on a Meta (Facebook/Instagram) advertisement. This allows us to measure the effectiveness of our advertisements, optimize ad campaigns, and build targeted custom audiences. 
                <br /><br />
                The data collected via Meta tools is stored and processed by Meta. Meta may connect this data with your Facebook or Instagram account and use it for their own advertising purposes in accordance with Meta&apos;s Data Policy. You can opt out of Meta&apos;s cookie-based advertising tracking through your Facebook settings or browser opt-out systems.
              </blockquote>

              <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>

              <hr />

              <h2>4. Use of Data</h2>
              <p>IgniteX uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To run, optimize, and target promotional campaigns (such as Meta Ads and Google Ads)</li>
              </ul>

              <hr />

              <h2>5. Transfer of Data</h2>
              <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
              <p>If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

              <hr />

              <h2>6. Disclosure of Data</h2>
              <p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
              <ul>
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of IgniteX</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>

              <hr />

              <h2>7. Security of Data</h2>
              <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

              <hr />

              <h2>8. Your Data Protection Rights</h2>
              <p>We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <ul>
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict or object to processing:</strong> You have the right to request that we restrict or object to the processing of your personal data, under certain conditions.</li>
              </ul>

              <hr />

              <h2>9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>By email: <a href="mailto:contact@ignitexsolution.com">contact@ignitexsolution.com</a></li>
                <li>By visiting this page on our website: <a href="https://www.ignitexsolution.com/contact">https://www.ignitexsolution.com/contact</a></li>
                <li>By phone: +91-8935860306</li>
                <li>Location: Jamshedpur, Jharkhand, India</li>
              </ul>

            </article>
          </div>
        </div>
      </main>
    </>
  );
}
