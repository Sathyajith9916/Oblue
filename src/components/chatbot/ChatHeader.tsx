'use client';

import { X } from 'lucide-react';

function ObyFace() {
  return (
    <svg viewBox="0 0 512 512" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="headerRingGrad" x1="100" y1="100" x2="412" y2="412" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5A9BFF" />
          <stop offset="55%" stopColor="#40D0FF" />
          <stop offset="100%" stopColor="#00FFEE" />
        </linearGradient>
        <radialGradient id="headerEyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#A8DCFF" />
          <stop offset="100%" stopColor="#3A7BFF" />
        </radialGradient>
        <filter id="headerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <circle cx="256" cy="256" r="256" fill="#0D1526" />

      {/* Ring */}
      <circle
        cx="256" cy="248" r="138"
        stroke="url(#headerRingGrad)"
        strokeWidth="36"
        fill="none"
        strokeLinecap="round"
        filter="url(#headerGlow)"
      />

      {/* Left eye */}
      <circle cx="210" cy="238" r="20" fill="url(#headerEyeGrad)" />
      <circle cx="210" cy="238" r="8" fill="#FFFFFF" />
      <circle cx="210" cy="238" r="4" fill="#3A7BFF" />

      {/* Right eye */}
      <circle cx="302" cy="238" r="20" fill="url(#headerEyeGrad)" />
      <circle cx="302" cy="238" r="8" fill="#FFFFFF" />
      <circle cx="302" cy="238" r="4" fill="#3A7BFF" />

      {/* Mouth */}
      <path
        d="M 228 282 Q 256 306 284 282"
        stroke="#4DAAFF"
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Signal arcs */}
      <path d="M 356 130 A 132 132 0 0 1 394 200" stroke="#00E5FF" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M 375 108 A 162 162 0 0 1 422 202" stroke="#3A7BFF" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div
      className="flex items-center justify-between px-5 py-4 border-b border-[--border] shrink-0"
      style={{
        background:
          'linear-gradient(135deg, rgba(58,123,255,0.12), rgba(28,181,255,0.08))',
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
          <ObyFace />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-[--text-primary]">
            Oby
          </h3>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-medium">
              Online now
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-xl flex items-center justify-center text-[--text-muted] hover:text-[--text-primary] hover:bg-white/5 transition-all"
        aria-label="Close chat"
      >
        <X size={16} />
      </button>
    </div>
  );
}
