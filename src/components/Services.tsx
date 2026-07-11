'use client';

import { motion, Variants } from 'framer-motion';
import { MessageSquare, Globe, Bot, UserCheck, Search, Send, MapPin, Share2, Database, PhoneCall, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    price: '₹4,999',
    tag: 'Most Popular',
    description: 'Turn WhatsApp into your 24/7 sales team. Instantly respond to every inquiry, capture leads, book appointments, and send broadcast promotions — all automated. Never miss a customer again.',
    bg: 'bg-gradient-to-br from-[#003d1a] to-[#001a0d]',
    border: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    tagBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    checkColor: 'text-emerald-400',
    ctaColor: 'text-emerald-400',
    theme: 'emerald',
    features: ['Auto Replies & FAQ Bot', 'Lead Collection System', 'Appointment Booking Flow', 'Broadcast Campaigns', 'Automated Follow-Ups'],
  },
  {
    icon: Globe,
    title: 'Premium Website',
    price: '₹9,999',
    tag: 'Foundation',
    description: 'Your digital storefront — built to convert visitors into paying customers. Fast-loading, mobile-first, SEO-ready websites that look world-class and generate real inquiries for your business.',
    bg: 'bg-gradient-to-br from-[#001a3d] to-[#000d1a]',
    border: 'border-blue-500/30',
    iconBg: 'bg-blue-500/15 border-blue-500/30',
    iconColor: 'text-blue-400',
    tagBg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    checkColor: 'text-blue-400',
    ctaColor: 'text-blue-400',
    theme: 'blue',
    features: ['Fully Mobile Responsive', 'Ultra-Fast Loading (<2s)', 'SEO Architecture Ready', 'Lead Capture Forms', 'Modern UI/UX Design'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    price: '₹7,999',
    tag: 'Always On',
    description: 'An intelligent AI assistant that answers questions, qualifies leads, and guides customers to purchase — 24/7 across your website, WhatsApp, Instagram and Facebook simultaneously.',
    bg: 'bg-gradient-to-br from-[#16003d] to-[#0a001a]',
    border: 'border-indigo-500/30',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
    iconColor: 'text-indigo-400',
    tagBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    checkColor: 'text-indigo-400',
    ctaColor: 'text-indigo-400',
    theme: 'indigo',
    features: ['Website Chat Widget', 'WhatsApp Integration', 'Instagram & Facebook', 'Lead Qualification', '24/7 Always On'],
  },
  {
    icon: UserCheck,
    title: 'AI Business Agents',
    price: '₹14,999',
    tag: 'Enterprise',
    description: 'A fully autonomous AI employee that handles customer support, qualifies leads, books appointments and integrates with your CRM — freeing your team to focus only on closing deals.',
    bg: 'bg-gradient-to-br from-[#1f003d] to-[#0d001a]',
    border: 'border-violet-500/30',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
    iconColor: 'text-violet-400',
    tagBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    checkColor: 'text-violet-400',
    ctaColor: 'text-violet-400',
    theme: 'violet',
    features: ['Customer Support Agent', 'Digital Sales Assistant', 'Lead Qualification', 'Booking Automation', 'CRM Integration'],
  },
  {
    icon: Search,
    title: 'Google SEO',
    price: '₹8,999',
    tag: 'Long-Term Growth',
    description: 'Dominate Google search for your city and niche. We optimize your website, build authority backlinks, and get you appearing when potential customers are actively searching for your services.',
    bg: 'bg-gradient-to-br from-[#2d1a00] to-[#1a0d00]',
    border: 'border-amber-500/30',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
    iconColor: 'text-amber-400',
    tagBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    checkColor: 'text-amber-400',
    ctaColor: 'text-amber-400',
    theme: 'amber',
    features: ['Keyword Research', 'Local SEO & Reviews', 'Competitor Analysis', 'Content Optimization', 'Monthly Reports'],
  },
  {
    icon: Send,
    title: 'Lead Generation',
    price: '₹12,999',
    tag: 'Revenue Boost',
    description: 'Stop waiting for customers — we actively go find them for you. Targeted outreach campaigns across LinkedIn, email, and WhatsApp that deliver pre-qualified, high-intent business leads.',
    bg: 'bg-gradient-to-br from-[#3d0015] to-[#1a0009]',
    border: 'border-pink-500/30',
    iconBg: 'bg-pink-500/15 border-pink-500/30',
    iconColor: 'text-pink-400',
    tagBg: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    checkColor: 'text-pink-400',
    ctaColor: 'text-pink-400',
    theme: 'pink',
    features: ['Prospect Research', 'LinkedIn Outreach', 'Cold Email Campaigns', 'WhatsApp Campaigns', 'Active Lead Tracking'],
  },
  {
    icon: MapPin,
    title: 'Google Business Profile',
    price: '₹4,999',
    tag: 'Local Visibility',
    description: 'Get discovered by local customers searching "near me." We fully optimize your Google Business Profile to appear in Maps, improve your star ratings, and drive walk-in & call inquiries.',
    bg: 'bg-gradient-to-br from-[#002d3d] to-[#001a24]',
    border: 'border-cyan-500/30',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    tagBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    checkColor: 'text-cyan-400',
    ctaColor: 'text-cyan-400',
    theme: 'cyan',
    features: ['Google Maps Top Ranking', 'Review Strategy', 'Profile Optimization', 'Local Visibility Boost'],
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    price: '₹6,999',
    tag: 'Brand Building',
    description: 'Consistent, AI-generated content across Instagram, Facebook, LinkedIn and more — scheduled automatically. We build your brand presence so you can focus on running your business.',
    bg: 'bg-gradient-to-br from-[#003d30] to-[#001a15]',
    border: 'border-teal-500/30',
    iconBg: 'bg-teal-500/15 border-teal-500/30',
    iconColor: 'text-teal-400',
    tagBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    checkColor: 'text-teal-400',
    ctaColor: 'text-teal-400',
    theme: 'teal',
    features: ['AI Content Creation', 'Multi-Channel Scheduling', 'Hashtag Research', 'Auto-Engagement', 'Analytics Dashboard'],
  },
  {
    icon: Database,
    title: 'CRM Setup & Automation',
    price: '₹9,999',
    tag: 'Sales System',
    description: 'Organize all your leads, track every deal, and automate follow-ups in a powerful CRM. Know exactly which leads are hot, which need follow-up, and never let a sale fall through the cracks.',
    bg: 'bg-gradient-to-br from-[#2d1400] to-[#1a0a00]',
    border: 'border-orange-500/30',
    iconBg: 'bg-orange-500/15 border-orange-500/30',
    iconColor: 'text-orange-400',
    tagBg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    checkColor: 'text-orange-400',
    ctaColor: 'text-orange-400',
    theme: 'orange',
    features: ['HubSpot / Zoho / GHL', 'Pipeline Management', 'Lead Tracking', 'Workflow Automations', 'Notification Alerts'],
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Calling Agents',
    price: '₹19,999',
    tag: 'Advanced AI',
    description: 'An AI that actually calls your leads, qualifies them in natural conversation, books appointments and instantly routes hot prospects to your sales team. Outbound calling at scale — 24/7.',
    bg: 'bg-gradient-to-br from-[#3d0010] to-[#1a0008]',
    border: 'border-rose-500/30',
    iconBg: 'bg-rose-500/15 border-rose-500/30',
    iconColor: 'text-rose-400',
    tagBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    checkColor: 'text-rose-400',
    ctaColor: 'text-rose-400',
    theme: 'rose',
    features: ['Automated Outbound Calls', 'Lead Qualification Voice', 'Appointment Reminders', 'Multilingual Support', 'Instant Status Routing'],
  },
];

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
          {services.map((s, i) => (
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
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2 transition-all"
                style={{ color: 'var(--c-cta-color)' }}
              >
                Get Started
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
