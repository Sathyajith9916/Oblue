'use client';

import { motion, Variants } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const problems = [
  'Slow response times — leads slip away in minutes',
  'Poor Google visibility & weak local SEO',
  'No website or an outdated, slow-loading design',
  'Painful manual follow-ups and missed opportunities',
  'Losing clients to more tech-savvy competitors',
  'Zero automated customer retention systems',
];

const cardV: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 16 } },
};

export default function Problems() {
  return (
    <section className="relative section-pad bg-[--surface-1] overflow-hidden">
      {/* Dividers */}
      <div className="divider absolute top-0 inset-x-0" />
      <div className="divider absolute bottom-0 inset-x-0" />

      {/* BG accent */}
      <div
        className="glow-orb w-[500px] h-[500px] -left-40 top-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.07) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <span className="badge badge-rose mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              The Growth Blocker
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.08] tracking-tight mb-6">
              Most Businesses{' '}
              <span className="text-gradient-warm">Lose Customers</span>{' '}
              Every Single Day
            </h2>
            <p className="text-[--text-secondary] text-lg leading-relaxed font-light mb-10">
              Without modern automation and strong digital systems, customer acquisition becomes an expensive game of chance. Manual workflows, slow response times, and weak search presence are silently draining your revenue.
            </p>

            {/* Resolution callout */}
            <div className="gradient-border rounded-2xl p-6 bg-[--surface-2]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-indigo-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-[--text-primary]">
                  We Fix All Of This.
                </h3>
              </div>
              <p className="text-[--text-secondary] text-sm leading-relaxed">
                oblue deploys self-improving AI, automated WhatsApp flows, high-performance SEO pipelines, and premium web designs to capture and close every lead.
              </p>
              <a href="/services" className="btn-primary mt-5 inline-flex text-sm px-5 py-2.5">
                Explore Our Solutions
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — problem cards */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-3"
          >
            {problems.map((p, i) => (
              <motion.div
                key={i}
                variants={cardV}
                className="card-hover flex items-center gap-4 p-4 rounded-2xl border border-[--border] bg-[--surface-2] group"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center group-hover:bg-rose-500/15 transition-colors">
                  <X size={16} className="text-rose-400" />
                </div>
                <p className="text-sm font-medium text-[--text-primary] leading-snug group-hover:text-rose-200 transition-colors">
                  {p}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
