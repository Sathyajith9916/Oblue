'use client';

import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, CreditCard } from 'lucide-react';

const links = {
  Services: [
    { l: 'WhatsApp Automation', h: '/services' },
    { l: 'AI Chatbots',         h: '/services' },
    { l: 'Google SEO',          h: '/services' },
    { l: 'Lead Generation',     h: '/services' },
    { l: 'Premium Websites',    h: '/services' },
    { l: 'AI Voice Agents',     h: '/services' },
  ],
  Company: [
    { l: 'About Us',  h: '/about' },
    { l: 'Process',   h: '/#process' },
    { l: 'Pricing',   h: '/#pricing' },
    { l: 'Results',   h: '/#testimonials' },
    { l: 'FAQ',       h: '/#faq' },
    { l: 'Pay Now',   h: '/payment' },
  ],
};

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter,   href: '#', label: 'Twitter/X' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { Icon: Youtube,   href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[--surface-1] border-t border-[--border] pt-20 pb-8 overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[400px] -bottom-20 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* CTA Banner */}
        <div className="gradient-border rounded-3xl p-10 mb-20 text-center bg-[--surface-2]">
          <span className="badge mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Limited Spots — Mysuru Region
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-4">
            Ready to{' '}
            <span className="text-gradient-primary">Transform Your Business?</span>
          </h2>
          <p className="text-[--text-secondary] font-light mb-8 max-w-xl mx-auto">
            Book a free consultation and receive a complimentary business growth audit — no commitment, no pressure. We're based in Mysuru.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary inline-flex text-sm px-8 py-3.5">
              Book Free Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/payment" className="btn-ghost inline-flex text-sm px-6 py-3.5">
              <CreditCard size={14} /> Pay & Get Started
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display font-black text-2xl tracking-tight mb-4 block">
              <span className="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>o</span>
              <span style={{ color: 'var(--text-primary)' }}>blue</span>
            </Link>
            <p className="text-sm text-[--text-muted] leading-relaxed font-light mb-2">
              AI Automation & Digital Growth Agency
            </p>
            <p className="text-xs text-[--text-muted] font-medium mb-6">Mysuru, Karnataka, India</p>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[--border] text-[--text-muted] hover:text-[--text-primary] hover:border-[--border-strong] hover:bg-white/5 transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-5">{title}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(({ l, h }) => (
                  <li key={l}>
                    <Link href={h} className="text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors duration-200 font-light">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+919380908118" className="flex items-start gap-3 text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors font-light group">
                  <Phone size={14} className="mt-0.5 shrink-0 text-[--text-muted] group-hover:text-emerald-400 transition-colors" />
                  +91 93809 08118
                </a>
              </li>
              <li>
                <a href="mailto:hello@oblue.in" className="flex items-start gap-3 text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors font-light group">
                  <Mail size={14} className="mt-0.5 shrink-0 text-[--text-muted] group-hover:text-indigo-400 transition-colors" />
                  hello@oblue.in
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-[--text-secondary] font-light">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[--text-muted]" />
                  Mysuru, Karnataka · Remote Worldwide
                </span>
              </li>
              <li className="pt-2">
                <a href="https://wa.me/919380908118" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[--text-muted] font-light">
            © {new Date().getFullYear()} oblue, Mysuru. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((t) => (
              <a key={t} href="#" className="text-xs text-[--text-muted] hover:text-[--text-secondary] transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
