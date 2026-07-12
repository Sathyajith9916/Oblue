'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import SuggestionCards from './SuggestionCards';
import LeadCapture from './LeadCapture';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { DEFAULT_SUGGESTIONS } from '@/lib/prompts';
import type { ChatMessage as ChatMessageType, LeadInfo } from '@/types/chat';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessageType[];
  isStreaming: boolean;
  leadCaptured: boolean;
  leadInfo: LeadInfo | null;
  onSend: (message: string) => void;
}

export default function ChatWindow({
  isOpen,
  onClose,
  messages,
  isStreaming,
  leadCaptured,
  onSend,
}: ChatWindowProps) {
  const [input, setInput] = useState('');
  const { scrollRef } = useAutoScroll();

  const hasUserMessages = messages.some((m) => m.role === 'user');

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;
    onSend(input.trim());
    setInput('');
  };

  const handleSuggestionSelect = (prompt: string) => {
    onSend(prompt);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed bottom-24 right-7 z-50 w-[380px] max-w-[calc(100vw-56px)] h-[560px] max-h-[calc(100vh-56px)] flex flex-col rounded-3xl overflow-hidden border border-[--border-strong] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      style={{ background: 'var(--surface-1)' }}
    >
      <ChatHeader onClose={onClose} />

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 scrollbar-thin"
      >
        {messages.map((msg, i) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            isLatest={i === messages.length - 1 && msg.role === 'assistant'}
          />
        ))}

        <TypingIndicator visible={isStreaming && messages[messages.length - 1]?.content === ''} />

        <LeadCapture captured={leadCaptured} />
      </div>

      {/* Suggestions (only before user sends first message) */}
      <SuggestionCards
        suggestions={DEFAULT_SUGGESTIONS}
        onSelect={handleSuggestionSelect}
        visible={!hasUserMessages && !isStreaming}
      />

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        disabled={isStreaming}
      />
    </motion.div>
  );
}
