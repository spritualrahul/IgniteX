'use client';

import dynamic from 'next/dynamic';

const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  ssr: false,
});

export default function ChatBotWrapper() {
  return <ChatBot />;
}
