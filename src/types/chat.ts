// ─── Message Types ──────────────────────────────────────────────

export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: number;
}

// ─── Streaming Types ────────────────────────────────────────────

export interface StreamChunk {
  type: 'token' | 'done' | 'lead' | 'error';
  content?: string;
  leadCaptured?: boolean;
  error?: string;
}

// ─── Lead Types ─────────────────────────────────────────────────

export interface LeadInfo {
  name: string;
  phone: string;
  email?: string;
}

export interface LeadCaptureResult {
  captured: boolean;
  whatsappSent: boolean;
}

// ─── Session Types ──────────────────────────────────────────────

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  lead?: LeadInfo;
  createdAt: number;
  updatedAt: number;
}

// ─── API Types ──────────────────────────────────────────────────

export interface ChatRequest {
  messages: Pick<ChatMessage, 'role' | 'content'>[];
}

export interface ChatApiResponse {
  reply: string;
  leadCaptured: boolean;
  leadInfo?: LeadInfo;
}

// ─── Suggestion Types ───────────────────────────────────────────

export interface Suggestion {
  id: string;
  label: string;
  prompt: string;
  icon?: string;
}

// ─── Component Props ────────────────────────────────────────────

export interface ChatBotProps {
  /** Override the default position */
  position?: 'bottom-left' | 'bottom-right';
}

export interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ChatHeaderProps {
  onClose: () => void;
}

export interface ChatMessageProps {
  message: ChatMessage;
  isLatest: boolean;
}

export interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export interface TypingIndicatorProps {
  visible: boolean;
}

export interface SuggestionCardsProps {
  suggestions: Suggestion[];
  onSelect: (prompt: string) => void;
  visible: boolean;
}

export interface LeadCaptureProps {
  captured: boolean;
  whatsappLink: string;
}

// ─── Service Interfaces (future-proofing) ───────────────────────

export interface IChatService {
  sendMessage(
    messages: Pick<ChatMessage, 'role' | 'content'>[]
  ): AsyncGenerator<string, void, unknown>;
}

export interface ILeadService {
  captureLead(lead: LeadInfo): Promise<LeadCaptureResult>;
}

export interface IAnalyticsService {
  trackEvent(event: string, data?: Record<string, unknown>): void;
}
