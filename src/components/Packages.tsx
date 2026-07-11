'use client';

import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    sub: 'Perfect to launch with',
    cta: 'Get Started',
    popular: false,
    features: [
      'Premium Business Website',
      'WhatsApp Basic Setup',
      'Google Business Profile',
      'Local SEO Optimization',
      'Email/Contact Integration',
    ],
  },
  {
    name: 'Growth',
    price: '₹24,999',
    sub: 'Best value for scaling',
    cta: 'Scale My Business',
    popular: true,
    features: [
      'Everything in Starter',
      'Advanced SEO & Maps',
      'AI Chatbot (24/7)',
      'Lead Generation Campaigns',
      'Monthly Analytics Reports',
      'Dedicated Slack Support',
    ],
  },
  {
    name: 'Scale',
    price: '₹59,999+',
    sub: 'Full automation suite',
    cta: 'Book Strategy Call',
    popular: false,
    features: [
      'AI Business Agents',
      'Voice Calling Agent',
      'Full CRM Setup & Sync',
      'Multi-Channel Marketing',
      'Complete Workflow Automation',
      'Bi-weekly Strategy Reviews',
    ],
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="relative section-pad bg-[--surface-1] overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="divider absolute bottom-0 inset-x-0" />
      <div
        className="glow-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Transparent Pricing
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
            Plans for Every{' '}
            <span className="text-gradient-primary">Growth Stage</span>
          </h2>
          <p className="text-[--text-secondary] text-lg leading-relaxed font-light">
            Zero hidden fees. Zero complex retainers. Pick the plan that matches your ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 80, damping: 18 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? 'card-popular md:scale-[1.04] md:-mt-2 md:-mb-2 z-10'
                  : 'border-[--border] bg-[--surface-2] hover:border-[--border-strong] hover:bg-[--surface-3]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
                    <Sparkles size={11} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan meta */}
              <div className="mb-8">
                <h3 className="font-display font-black text-xl text-[--text-primary] mb-1">{plan.name}</h3>
                <p className="text-xs text-[--text-muted] mb-5 font-medium">{plan.sub}</p>
                <div className="flex items-end gap-2">
                  <span className="font-display font-black text-4xl text-[--text-primary] tracking-tight">{plan.price}</span>
                  <span className="text-xs text-[--text-muted] mb-1.5 font-medium">/ flat setup</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3.5 flex-1 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-[--text-secondary] font-light">
                    <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? 'bg-indigo-500/15 border border-indigo-500/30' : 'bg-[--surface-4] border border-[--border-strong]'
                    }`}>
                      <Check size={10} className={plan.popular ? 'text-indigo-400' : 'text-[--text-muted]'} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={plan.popular ? 'btn-primary justify-center text-sm' : 'btn-ghost justify-center text-sm'}
              >
                {plan.name === 'Scale' ? (
                  <><Zap size={14} className="text-amber-400" />{plan.cta}</>
                ) : (
                  <>{plan.cta}<ArrowRight size={14} /></>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
