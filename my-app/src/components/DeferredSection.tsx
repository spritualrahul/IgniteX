'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Mounts expensive below-the-fold UI shortly before it enters the viewport. */
export function DeferredSection({ children, fallback, minHeight }: { children: ReactNode; fallback: ReactNode; minHeight: number }) {
  const root = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldRender(true);
      observer.disconnect();
    }, { rootMargin: '700px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={root} style={{ minHeight: shouldRender ? undefined : minHeight, contentVisibility: shouldRender ? 'visible' : 'auto' }}>{shouldRender ? children : fallback}</div>;
}
