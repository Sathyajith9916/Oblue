'use client';

import { motion, Variants } from 'framer-motion';
import { MessageSquare, Globe, Bot, UserCheck, Search, Send, MapPin, Share2, Database, PhoneCall, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { servicesData } from '@/data/services';

const cardV: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};

export default function Services() {
  return (
    <section id="services" className="relative section-pad bg-[--bg] overflow-hidden">
      <div
        className="glow-orb w-[600px] h-[600px] top-0 right-0"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            10 Growth Services
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
            Premium Solutions That{' '}
            <span className="text-gradient-primary">Actually Convert</span>
          </h2>
          <p className="text-[--text-secondary] text-lg leading-relaxed font-light">
            SaaS-grade AI systems, high-conversion websites, and automated acquisition funnels — built for Mysuru businesses ready to scale.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicesData.map((s, i) => (
            <motion.div
              key={i}
              variants={cardV}
              className={`card-hover relative flex flex-col p-6 rounded-3xl border service-card-themed service-card-${s.theme} group overflow-hidden`}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)' }}
              />

              {/* Top row: Icon + Price + Tag */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl border flex items-center justify-center border-[var(--c-icon-border)] bg-[var(--c-icon-bg)] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <s.icon size={22} style={{ color: 'var(--c-icon-color)' }} />
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--c-tag-border)] bg-[var(--c-tag-bg)]" style={{ color: 'var(--c-tag-text)' }}>
                    {s.tag}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[--text-muted]">From</p>
                    <p className="text-lg font-display font-black text-[--text-primary]">{s.price}</p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-[--text-primary] mb-3">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[--text-secondary] leading-relaxed font-light mb-5">
                {s.description}
              </p>

              {/* Divider */}
              <div className="divider mb-4" />

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-xs text-[--text-secondary] font-light leading-snug">
                    <Check size={11} style={{ color: 'var(--c-check-color)' }} className="shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2 transition-all"
                style={{ color: 'var(--c-cta-color)' }}
              >
                Read More
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[--text-muted] text-sm mb-4 font-light">Not sure which service is right for you?</p>
          <Link href="/contact" className="btn-primary text-sm px-7 py-3">
            Get a Free Recommendation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
