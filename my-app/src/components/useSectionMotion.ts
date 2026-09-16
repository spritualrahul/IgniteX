'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

/** Local, hydration-safe GSAP scroll reveal for a fully mounted section. */
export function useSectionMotion(root: RefObject<HTMLElement | null>, itemsSelector?: string) {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !root.current) return;

    const items = itemsSelector
      ? Array.from(root.current.querySelectorAll<HTMLElement>(itemsSelector))
      : [root.current];
    if (!items.length) return;

    gsap.fromTo(items, { autoAlpha: 0, y: 36, scale: 0.985 }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.78,
      stagger: itemsSelector ? 0.1 : 0,
      ease: 'power3.out',
      clearProps: 'transform,visibility',
      scrollTrigger: { trigger: root.current, start: 'top 83%', once: true },
    });
  }, { scope: root });
}
