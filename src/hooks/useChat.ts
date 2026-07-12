'use client';

import { useState, useCallback, useRef } from 'react';
import type { ChatMessage, LeadInfo } from '@/types/chat';
import { streamChat } from '@/services/chatService';

// ─── Helpers ────────────────────────────────────────────────────

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const LEAD_TAG_REGEX = /\[LEAD:name=([^:]+):phone=([^\]]+)\]/;

function extractLeadInfo(text: string): { clean: string; lead?: LeadInfo } {
  const match = text.match(LEAD_TAG_REGEX);
  if (!match) return { clean: text };

  return {
    clean: text.replace(LEAD_TAG_REGEX, '').trim(),
    lead: { name: match[1], phone: match[2] },
  };
}

// ─── Initial Messages ───────────────────────────────────────────

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hey! 👋 I'm Oby, oblue's AI assistant. I can help you with:\n\n• Our services & pricing\n• Which package fits your business\n• How AI automation can grow your revenue\n\nWhat would you like to know?",
  timestamp: Date.now(),
};

// ─── Context Window ─────────────────────────────────────────────

const MAX_CONTEXT_MESSAGES = 20;

function trimForAPI(messages: ChatMessage[]): Pick<ChatMessage, 'role' | 'content'>[] {
  const recent = messages.slice(-MAX_CONTEXT_MESSAGES);
  return recent.map((m) => ({ role: m.role, content: m.content }));
}

// ─── Hook ───────────────────────────────────────────────────────

export interface UseChatReturn {
  messages: ChatMessage[];
  isStreaming: boolean;
  leadCaptured: boolean;
  leadInfo: LeadInfo | null;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      // Add user message
      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsStreaming(true);

      // Create placeholder for assistant response
      const assistantId = generateId();
      const assistantMsg: ChatMessage = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);

      try {
        const allMessages = [...messages, userMsg];
        const apiMessages = trimForAPI(allMessages);

        let fullContent = '';

        for await (const token of streamChat(apiMessages)) {
          fullContent += token;

          // Check for lead tag in accumulated content
          const { clean, lead } = extractLeadInfo(fullContent);

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: clean } : m
            )
          );

          // If lead was detected in this chunk
          if (lead && !leadCaptured) {
            setLeadCaptured(true);
            setLeadInfo(lead);
          }
        }

        // Final check for lead tag
        const finalCheck = extractLeadInfo(fullContent);
        if (finalCheck.lead && !leadCaptured) {
          setLeadCaptured(true);
          setLeadInfo(finalCheck.lead);
        }

        // Ensure final content is clean
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: finalCheck.clean || fullContent }
              : m
          )
        );
      } catch (err) {
        console.error('Chat error:', err);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content:
                    "Sorry, I'm having connection issues. Please WhatsApp us at +91 93809 08118! 🙏",
                }
              : m
          )
        );
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming, leadCaptured]
  );

  const clearChat = useCallback(() => {
    setMessages([WELCOME_MESSAGE]);
    setIsStreaming(false);
    setLeadCaptured(false);
    setLeadInfo(null);
  }, []);

  return {
    messages,
    isStreaming,
    leadCaptured,
    leadInfo,
    sendMessage,
    clearChat,
  };
}
