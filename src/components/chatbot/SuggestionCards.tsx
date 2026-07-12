'use client';

import type { Suggestion } from '@/types/chat';

interface SuggestionCardsProps {
  suggestions: Suggestion[];
  onSelect: (prompt: string) => void;
  visible: boolean;
}

export default function SuggestionCards({
  suggestions,
  onSelect,
  visible,
}: SuggestionCardsProps) {
  if (!visible) return null;

  return (
    <div className="px-5 pb-3">
      <p className="text-[10px] font-semibold text-[--text-muted] uppercase tracking-widest mb-2.5">
        Quick questions
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.prompt)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[--text-secondary] border border-[--border] bg-[--surface-2] hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all duration-200"
          >
            <span>{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
