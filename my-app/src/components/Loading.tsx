'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-64 h-64">
        <DotLottieReact
          src="/Loading.lottie" // Using the existing Lottie file
          loop
          autoplay
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
