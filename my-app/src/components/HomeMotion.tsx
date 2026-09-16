'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Coordinates high-visibility yet restrained motion after React hydration has
 * completed, so GSAP never mutates streamed markup during hydration.
 */
export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const revealStagger = (container: HTMLElement) => {
        const items = Array.from(container.children).filter(
          (item) => !item.classList.contains('hidden'),
        );
        if (!items.length) return;

        gsap.fromTo(items, { autoAlpha: 0, y: 34, scale: 0.97 }, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.72,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,visibility',
          scrollTrigger: { trigger: container, start: 'top 82%', once: true },
        });
      };

      const animateHero = () => {
        const heroItems = root.current?.querySelectorAll<HTMLElement>('[data-gsap-hero]');
        if (!heroItems?.length) return;
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 38 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power4.out',
            clearProps: 'transform,visibility',
          },
        );
      };

      animateHero();

      const heroArt = root.current?.querySelector<HTMLElement>('[data-gsap-float]');
      if (heroArt) {
        gsap.to(heroArt, { y: -16, duration: 2.8, ease: 'sine.inOut', repeat: -1, yoyo: true });
      }

      root.current?.querySelectorAll<HTMLElement>('[data-gsap-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        });
      });

      const magneticButtons = root.current?.querySelectorAll<HTMLElement>('[data-gsap-magnetic]') ?? [];
      const magneticCleanup = Array.from(magneticButtons).map((button) => {
        const move = (event: PointerEvent) => {
          const bounds = button.getBoundingClientRect();
          gsap.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.12, y: (event.clientY - bounds.top - bounds.height / 2) * 0.18, duration: 0.28, ease: 'power2.out' });
        };
        const leave = () => gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.45)' });
        button.addEventListener('pointermove', move);
        button.addEventListener('pointerleave', leave);
        return () => {
          button.removeEventListener('pointermove', move);
          button.removeEventListener('pointerleave', leave);
        };
      });

      // Only animate homepage-owned markup here. Lazy sections register their
      // own GSAP effects after they hydrate, avoiding SSR/client mismatches.
      root.current?.querySelectorAll<HTMLElement>('[data-gsap-home-signal]').forEach(revealStagger);
      ScrollTrigger.refresh();

      return () => {
        magneticCleanup.forEach((cleanup) => cleanup());
      };
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
