import React from 'react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[400px] bg-slate-100 animate-pulse rounded-lg" /> }
);

const DeviceShowcase = () => {
  return (
    <DotLottieReact
      src="/f7Z6wdk9pT.lottie"
      loop
      autoplay
    />
  );
};

export default DeviceShowcase;
