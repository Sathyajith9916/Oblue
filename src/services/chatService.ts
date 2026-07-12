import type { ChatMessage, LeadInfo, LeadCaptureResult } from '@/types/chat';

// ─── Chat Service ───────────────────────────────────────────────

/**
 * Sends messages to the chat API and returns a streaming response.
 * Yields tokens as they arrive from the AI.
 */
export async function* streamChat(
  messages: Pick<ChatMessage, 'role' | 'content'>[]
): AsyncGenerator<string, void, unknown> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    throw new Error(`Chat API error: ${res.status}`);
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error('No response body');

  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6);
        if (data === '[DONE]') return;

        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'token' && parsed.content) {
            yield parsed.content;
          } else if (parsed.type === 'lead') {
            // Lead was captured — the caller handles this via the done event
          } else if (parsed.type === 'error') {
            throw new Error(parsed.error || 'Stream error');
          }
        } catch (e) {
          if (e instanceof SyntaxError) continue; // skip malformed chunks
          throw e;
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Sends messages and returns the full response (non-streaming fallback).
 */
export async function sendChatMessage(
  messages: Pick<ChatMessage, 'role' | 'content'>[]
): Promise<{ reply: string; leadCaptured: boolean; leadInfo?: LeadInfo }> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    throw new Error(`Chat API error: ${res.status}`);
  }

  return res.json();
}

// ─── Lead Service ───────────────────────────────────────────────

const WA_LINK =
  'https://wa.me/919380908118?text=Hi%20oblue!%20I%20was%20chatting%20with%20your%20AI%20and%20want%20to%20talk%20to%20your%20team.';

/**
 * Returns the WhatsApp deep link for continuing the conversation.
 */
export function getWhatsAppLink(): string {
  return WA_LINK;
}

// ─── Analytics Service (stub for future) ────────────────────────

export const analytics = {
  trackEvent(event: string, data?: Record<string, unknown>) {
    // Future: send to PostHog, Mixpanel, etc.
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${event}`, data);
    }
  },
};
