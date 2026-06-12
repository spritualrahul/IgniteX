'use client';

import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[350px] bg-slate-100 animate-pulse rounded-lg" /> }
);
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left — copy */}
        <div>
          <span className="text-red-600 text-xs font-semibold uppercase tracking-[0.22em] mb-4 block">
            What We Offer
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.12] mb-6"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Services Built to <span className="text-red-600">Grow</span> Your Business
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
            From high-converting websites to data-driven marketing — we deliver end-to-end
            digital solutions that are fast, reliable, and designed around your goals.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md shadow-red-600/10 flex items-center gap-2"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-red-600 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              Explore Services <ArrowRight size={16} className="text-red-600" />
            </Link>
          </div>
        </div>

        {/* Right — Lottie */}
        <div className="flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/f0cb6b1a-f39a-4bd2-96c5-a5be436f3ac2/Vl59knDbNJ.lottie"
            loop
            autoplay
            style={{ width: '100%', maxWidth: 520, height: 'auto' }}
          />
        </div>

      </div>
    </section>
  );
}
