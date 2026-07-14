'use client';

import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Target, Zap, Heart } from 'lucide-react';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Zap, color: 'indigo',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20', iconColor: 'text-indigo-400',
    title: 'AI-First Architecture',
    desc: 'Every system we build is natively powered by LLMs and automation frameworks — not retrofitted afterthoughts.',
  },
  {
    icon: Target, color: 'emerald',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20', iconColor: 'text-emerald-400',
    title: 'Revenue-Focused Delivery',
    desc: 'We measure success in leads, bookings, and conversions — not impressions. If it doesn\'t drive revenue, we rewrite it.',
  },
  {
    icon: ShieldCheck, color: 'cyan',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20', iconColor: 'text-cyan-400',
    title: 'Radical Transparency',
    desc: 'Flat-rate pricing, no hidden retainers. Weekly sprint updates with clear deliverables so you always know what\'s happening.',
  },
  {
    icon: Heart, color: 'rose',
    iconBg: 'bg-rose-500/10 border-rose-500/20', iconColor: 'text-rose-400',
    title: 'Client-First Mentality',
    desc: 'Your business goals are our KPIs. Every automation we build is personalized to your exact workflows and customer journey.',
  },
  {
    icon: Users, color: 'violet',
    iconBg: 'bg-violet-500/10 border-violet-500/20', iconColor: 'text-violet-400',
    title: 'Expert Team',
    desc: 'A blend of AI engineers, UX designers, SEO strategists, and digital marketers working as one coordinated unit.',
  },
  {
    icon: Award, color: 'amber',
    iconBg: 'bg-amber-500/10 border-amber-500/20', iconColor: 'text-amber-400',
    title: 'Proven Frameworks',
    desc: 'Battle-tested systems refined across 100+ projects. We apply proven architectures, not experimental ideas on your business.',
  },
];

export default function AboutContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[--bg] pt-24 pb-16">
        <div
          className="glow-orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />
        <div className="noise-overlay" />
        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18 }}
            className="mb-6"
          >
            <span className="badge">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Engineered to{' '}
            <span className="text-gradient-primary">Automate & Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.2 }}
            className="text-lg md:text-xl text-[--text-secondary] font-light leading-relaxed max-w-3xl mx-auto mb-10"
          >
            oblue was founded in <strong className="text-[--text-primary]">Mysuru, Karnataka</strong> — from a simple observation: local businesses were losing customers not because of bad products, but because of slow, manual, and disconnected systems. We set out to fix that — with AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary text-sm px-7 py-3.5">
              Work With Us
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative section-pad-sm bg-[--surface-1] overflow-hidden">
        <div className="divider absolute top-0 inset-x-0" />
        <div className="divider absolute bottom-0 inset-x-0" />
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="gradient-border rounded-3xl p-10 md:p-14 bg-[--surface-2] text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-display font-bold text-[--text-primary] leading-relaxed">
              "We are a team of AI experts, software engineers, and growth marketers — building{' '}
              <span className="text-gradient-primary">autonomous business engines</span>{' '}
              that replace manual processes with self-improving AI pipelines. We don't just build websites. We build customer acquisition machines."
            </p>
            <p className="mt-6 text-sm text-[--text-muted] font-semibold tracking-widest uppercase">— The oblue Team</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative section-pad-sm bg-[--bg] overflow-hidden border-b border-[--border]">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Leadership
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
              Meet the <span className="text-gradient-primary">Founders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 80, damping: 18 }}
              className="flex flex-col items-center p-8 rounded-3xl border border-[--border] bg-[--surface-2] card-hover"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[--border-strong] shadow-xl">
                <Image src="/founder.jpg.png" alt="Sathyajith G S" fill className="object-cover" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[--text-primary] mb-1">Sathyajith G S</h3>
              <p className="text-indigo-400 font-semibold text-sm mb-4 tracking-wider uppercase">Founder & CEO</p>
              <p className="text-center text-[--text-secondary] font-light leading-relaxed">
                Visionary behind oblue. Combines deep expertise in automation and AI with a passion for helping businesses build scalable acquisition machines.
              </p>
            </motion.div>

            {/* Co-Founder */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 80, damping: 18 }}
              className="flex flex-col items-center p-8 rounded-3xl border border-[--border] bg-[--surface-2] card-hover"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[--border-strong] shadow-xl">
                <Image src="/cofounder.jpg.png" alt="Ayaan" fill className="object-cover" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[--text-primary] mb-1">Ayaan</h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4 tracking-wider uppercase">Co-Founder & CTO</p>
              <p className="text-center text-[--text-secondary] font-light leading-relaxed">
                The technical powerhouse. Expert in building autonomous systems, prompt engineering, and transforming complex workflows into seamless automated processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-pad bg-[--bg]">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Our Values
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
              What Drives{' '}
              <span className="text-gradient-primary">Everything We Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 80, damping: 18 }}
                className="card-hover flex flex-col gap-5 p-7 rounded-3xl border border-[--border] bg-[--surface-2] group"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${v.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon size={22} className={v.iconColor} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[--text-primary] mb-2">{v.title}</h3>
                  <p className="text-sm text-[--text-secondary] leading-relaxed font-light">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared sections */}
      <WhyUs />
      <Process />
    </main>
  );
}
