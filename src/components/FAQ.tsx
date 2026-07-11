'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast will I see results?',
    a: 'Most clients see measurable improvement within 30 days. WhatsApp automation and chatbots deliver immediate results. SEO improvements typically take 60–90 days to compound, but we track weekly momentum from day one.',
  },
  {
    q: 'Do I need technical knowledge to use these services?',
    a: 'Absolutely not. We handle all technical setup, integrations, training, and maintenance. You just focus on running your business — we handle the tech stack entirely.',
  },
  {
    q: 'Are your contracts flexible?',
    a: 'We offer flat-rate project-based pricing with no long lock-in. Monthly retainer options are available for ongoing optimization, but there are no cancellation penalties.',
  },
  {
    q: 'What platforms do your AI chatbots support?',
    a: 'Our AI assistants integrate with websites, WhatsApp Business, Instagram DMs, Facebook Messenger, Telegram, and any CRM system (HubSpot, Zoho, GoHighLevel).',
  },
  {
    q: 'How does the free audit work?',
    a: 'We analyze your current website speed, SEO performance, competitor rankings, social presence, and conversion funnel — then present a comprehensive growth roadmap at no cost or obligation.',
  },
  {
    q: 'Can you work with my existing website?',
    a: 'Yes. We can enhance your existing website with SEO, speed optimization, and AI integrations, or build a brand-new high-conversion site from scratch — your choice.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-pad bg-[--surface-1] overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="divider absolute bottom-0 inset-x-0" />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              FAQ
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
              Frequently{' '}
              <span className="text-gradient-primary">Asked</span>{' '}
              Questions
            </h2>
            <p className="text-[--text-secondary] text-base leading-relaxed font-light mb-8">
              Still have questions? Book a free call and we'll walk you through everything.
            </p>
            <a href="/contact" className="btn-primary text-sm px-6 py-3">
              Book Free Call
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  open === i ? 'border-indigo-500/30 bg-[--surface-2]' : 'border-[--border] bg-[--surface-2]/50 hover:border-[--border-strong]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${open === i ? 'text-indigo-300' : 'text-[--text-primary]'}`}>
                    {f.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border transition-all ${
                    open === i
                      ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400 rotate-0'
                      : 'bg-[--surface-3] border-[--border] text-[--text-muted]'
                  }`}>
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-6 pb-5 border-t border-[--border] pt-4">
                        <p className="text-sm text-[--text-secondary] leading-relaxed font-light">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
