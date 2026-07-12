'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';
import { useChat } from '@/hooks/useChat';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isStreaming, leadCaptured, leadInfo, sendMessage } =
    useChat();

  return (
    <>
      <ChatBubble isOpen={isOpen} onClick={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            messages={messages}
            isStreaming={isStreaming}
            leadCaptured={leadCaptured}
            leadInfo={leadInfo}
            onSend={sendMessage}
          />
        )}
      </AnimatePresence>
    </>
  );
}
