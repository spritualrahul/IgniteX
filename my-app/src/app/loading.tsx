'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-64 h-64 flex flex-col items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/ea738c5f-4467-4675-adec-0ba4cadc202b/VknpLHeJzW.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
        <div className="mt-4 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}
