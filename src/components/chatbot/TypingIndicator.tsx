'use client';

interface TypingIndicatorProps {
  visible: boolean;
}

export default function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;

  return (
    <div className="flex justify-start">
      <div className="flex items-start gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-[--surface-3] border border-[--border]">
          <svg viewBox="0 0 512 512" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
            <circle cx="256" cy="256" r="256" fill="#0D1526" />
            <circle cx="210" cy="238" r="20" fill="#A8DCFF" />
            <circle cx="210" cy="238" r="8" fill="#FFFFFF" />
            <circle cx="302" cy="238" r="20" fill="#A8DCFF" />
            <circle cx="302" cy="238" r="8" fill="#FFFFFF" />
            <path d="M 228 282 Q 256 306 284 282" stroke="#4DAAFF" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.85" />
          </svg>
        </div>
        <div className="rounded-2xl rounded-bl-md px-4 py-3 bg-[--surface-3] border border-[--border]">
          <div className="flex gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-[--text-muted] animate-bounce"
              style={{ animationDelay: '0ms' }}
            />
            <span
              className="w-2 h-2 rounded-full bg-[--text-muted] animate-bounce"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="w-2 h-2 rounded-full bg-[--text-muted] animate-bounce"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
