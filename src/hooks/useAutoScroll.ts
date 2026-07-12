'use client';

import { useEffect, useRef, useCallback } from 'react';

export interface UseAutoScrollReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  forceScroll: () => void;
}

/**
 * Automatically scrolls to the bottom when new content appears.
 * Stops auto-scrolling if the user scrolls up manually.
 * Resumes when the user scrolls back to the bottom.
 */
export function useAutoScroll(): UseAutoScrollReturn {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolledUp = useRef(false);
  const lastHeight = useRef(0);

  const checkIfAtBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return false;
    const threshold = 80;
    return el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
  }, []);

  const forceScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    isUserScrolledUp.current = false;
  }, []);

  // Detect manual scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      isUserScrolledUp.current = !checkIfAtBottom();
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [checkIfAtBottom]);

  // Auto-scroll on content change (only if user hasn't scrolled up)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const currentHeight = el.scrollHeight;
    if (currentHeight !== lastHeight.current) {
      lastHeight.current = currentHeight;

      if (!isUserScrolledUp.current) {
        requestAnimationFrame(() => {
          el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
        });
      }
    }
  });

  return { scrollRef, forceScroll };
}
