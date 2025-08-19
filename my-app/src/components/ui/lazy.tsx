import { Suspense, lazy, ComponentType, ReactNode } from 'react';
import { Skeleton } from './skeleton';

type LazyComponent<T = unknown> = Promise<{ default: ComponentType<T> }>;

export function lazyLoad<T = unknown>(
  importFunc: () => LazyComponent<T>,
  fallback: ReactNode = <Skeleton className="w-full h-[400px]" />
) {
  const LazyComponent = lazy(importFunc);
  
  function WrappedComponent(props: T) {
    return (
      <Suspense fallback={fallback}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <LazyComponent {...props as any} />
      </Suspense>
    );
  }
  
  WrappedComponent.displayName = 'LazyLoadedComponent';
  return WrappedComponent as ComponentType<T>;
}
