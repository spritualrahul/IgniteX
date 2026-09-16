'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

/** Global GSAP scroll progress, safe for every server and streamed route. */
export function SiteMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (progress.current) {
      gsap.set(progress.current, { transformOrigin: 'left center' });
      gsap.to(progress.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 },
      });
    }

  }, { scope: root });

  return (
    <>
      <div ref={progress} className="site-scroll-progress" aria-hidden="true" />
      <div ref={root}>{children}</div>
    </>
  );
}
