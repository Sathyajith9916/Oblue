'use client';

import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/services/chatService';

interface LeadCaptureProps {
  captured: boolean;
}

export default function LeadCapture({ captured }: LeadCaptureProps) {
  if (!captured) return null;

  return (
    <div className="flex justify-center mt-2">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
        }}
      >
        Continue on WhatsApp
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
