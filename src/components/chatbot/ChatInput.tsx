'use client';

import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div
      className="px-4 py-3 border-t border-[--border] shrink-0"
      style={{ background: 'var(--surface-2)' }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
        className="flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about our services..."
          className="flex-1 bg-[--surface-3] border border-[--border] rounded-xl px-4 py-2.5 text-sm text-[--text-primary] placeholder:text-[--text-muted] outline-none focus:border-indigo-500/50 transition-colors"
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          style={{
            background: value.trim()
              ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
              : 'var(--surface-3)',
          }}
        >
          <Send
            size={15}
            className={value.trim() ? 'text-white' : 'text-[--text-muted]'}
          />
        </button>
      </form>
      <p className="text-[9px] text-[--text-muted] text-center mt-2 font-light">
        Powered by oblue AI · Mysuru
      </p>
    </div>
  );
}
