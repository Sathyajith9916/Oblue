'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';

const containerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 18 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[--bg] pt-20">

      {/* ── BACKGROUND ORBS ── */}
      <div
        className="glow-orb w-[700px] h-[700px] -top-40 -left-32"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bottom-0 right-0"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)' }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] top-1/2 right-1/4"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
      />
      <div className="noise-overlay" />

      {/* ── HERO COPY ── */}
      <div className="container relative z-10 pt-16 pb-10 mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemV} className="mb-8">
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-glow" />
              AI-Powered Customer Acquisition
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemV}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.02] tracking-[-0.03em] max-w-5xl"
          >
            Turn Your Business Into an{' '}
            <span className="text-gradient-primary">
              AI‑Powered Customer&nbsp;Magnet
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemV}
            className="mt-8 text-lg md:text-xl text-[--text-secondary] max-w-2xl leading-relaxed font-light"
          >
            We help businesses generate more leads, automate customer support, dominate Google rankings, and scale revenue — using AI, automation, websites, and digital growth systems.
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={itemV}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5">
              Book Free Consultation
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-ghost text-sm px-7 py-3.5">
              Get Free Business Audit
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={itemV}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              '⚡ Fast 7-day setup',
              '🛡️ No lock-in contracts',
              '🤖 AI-first technology',
              '🎯 ROI-focused delivery',
              '📍 Based in Mysuru',
            ].map((t) => (
              <span key={t} className="text-xs font-medium text-[--text-muted] tracking-wide">
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── DASHBOARD MOCKUP ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 60, damping: 18 }}
          className="relative mt-20 mx-auto max-w-4xl animate-float"
        >
          {/* Glow under the card */}
          <div className="absolute inset-x-8 -bottom-8 h-24 bg-indigo-500/20 blur-3xl rounded-full" />

          <div className="gradient-border glass-strong rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[--border] bg-[--surface-2]">
              <span className="w-3 h-3 rounded-full bg-rose-500/70" />
              <span className="w-3 h-3 rounded-full bg-amber-400/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="ml-3 flex-1 bg-[--surface-3] rounded-md px-3 py-1 text-xs text-[--text-muted] font-mono">
                oblue-dashboard.ai/analytics
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-3 gap-px bg-[--border] p-px">
              {/* Stat 1 */}
              <div className="bg-[--surface-2] p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-widest">Active AI Agents</p>
                <p className="text-3xl font-display font-black text-[--text-primary]">4 Live</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Handling 94% queries</span>
                </div>
              </div>

              {/* Stat 2 — Bar Chart */}
              <div className="bg-[--surface-2] p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-widest">Weekly Leads</p>
                <p className="text-3xl font-display font-black text-[--text-primary]">+1,248</p>
                <div className="flex items-end gap-1 h-8">
                  {[30, 55, 40, 70, 50, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 6
                          ? 'linear-gradient(to top, #6366f1, #a5b4fc)'
                          : 'rgba(99,102,241,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-[--surface-2] p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-widest">Avg. Response</p>
                <p className="text-3xl font-display font-black text-[--text-primary]">&lt;15s</p>
                <span className="text-xs text-[--text-muted]">WhatsApp + Voice API</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[--text-muted]">Scroll</span>
        <ChevronDown size={14} className="text-[--text-muted] animate-bounce" />
      </div>
    </section>
  );
}
