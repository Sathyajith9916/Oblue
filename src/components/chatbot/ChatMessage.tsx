'use client';

import { useState } from 'react';
import { User, Copy, Check } from 'lucide-react';
import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
  isLatest: boolean;
}

function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

function renderMarkdown(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`(.*?)`/g, '<code class="chat-code">$1</code>')
    // Line breaks
    .replace(/\n/g, '<br />');
}

export default function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex items-start gap-2 max-w-[85%] ${
          isUser ? 'flex-row-reverse' : ''
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
            isUser
              ? 'bg-indigo-500/15 border border-indigo-500/30'
              : 'bg-[--surface-3] border border-[--border]'
          }`}
        >
          {isUser ? (
            <User size={13} className="text-indigo-400" />
          ) : (
            <svg viewBox="0 0 512 512" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="256" fill="#0D1526" />
              <circle cx="210" cy="238" r="20" fill="#A8DCFF" />
              <circle cx="210" cy="238" r="8" fill="#FFFFFF" />
              <circle cx="302" cy="238" r="20" fill="#A8DCFF" />
              <circle cx="302" cy="238" r="8" fill="#FFFFFF" />
              <path d="M 228 282 Q 256 306 284 282" stroke="#4DAAFF" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.85" />
            </svg>
          )}
        </div>

        {/* Bubble */}
        <div className="group relative">
          <div
            className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              isUser
                ? 'bg-indigo-500/15 border border-indigo-500/25 text-[--text-primary] rounded-br-md'
                : 'bg-[--surface-3] border border-[--border] text-[--text-secondary] rounded-bl-md'
            }`}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />

          {/* Timestamp + Copy (assistant only) */}
          {!isUser && message.content && (
            <div className="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[9px] text-[--text-muted]">
                {formatTime(message.timestamp)}
              </span>
              <button
                onClick={handleCopy}
                className="text-[--text-muted] hover:text-indigo-400 transition-colors"
                aria-label="Copy message"
              >
                {copied ? (
                  <Check size={10} className="text-emerald-400" />
                ) : (
                  <Copy size={10} />
                )}
              </button>
            </div>
          )}

          {/* Streaming cursor */}
          {isLatest && !isUser && (
            <span className="inline-block w-0.5 h-4 bg-indigo-400 ml-0.5 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}
