'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Copy, Check, ArrowRight, CreditCard, Phone, Zap } from 'lucide-react';
import Link from 'next/link';

const UPI_ID  = '9380908118@ybl';        // PhonePe UPI ID
const PHONE   = '9380908118';
const PAYEE   = 'oblue';

// QR via quickchart.io (free, no account needed)
const PHONEPE_QR = `https://quickchart.io/qr?text=${encodeURIComponent(`upi://pay?pa=${UPI_ID}&pn=${PAYEE}&cu=INR`)}&size=260&margin=2&dark=6366f1&light=0a0a0f`;
const GPAY_QR    = `https://quickchart.io/qr?text=${encodeURIComponent(`upi://pay?pa=${UPI_ID}&pn=${PAYEE}&cu=INR`)}&size=260&margin=2&dark=128C7E&light=0a0a0f`;

const packages = [
  { name: 'Starter',          price: '₹9,999',   tag: 'Launch Ready',  color: 'blue',    hex: '#3b82f6' },
  { name: 'WhatsApp Setup',   price: '₹4,999',   tag: 'Most Popular',  color: 'emerald', hex: '#10b981' },
  { name: 'Growth Bundle',    price: '₹24,999',  tag: 'Best Value',    color: 'indigo',  hex: '#6366f1' },
  { name: 'AI Chatbot',       price: '₹7,999',   tag: 'AI-Powered',    color: 'violet',  hex: '#8b5cf6' },
  { name: 'Google SEO',       price: '₹8,999',   tag: 'Long-Term ROI', color: 'amber',   hex: '#f59e0b' },
  { name: 'Lead Generation',  price: '₹12,999',  tag: 'Fast Revenue',  color: 'pink',    hex: '#ec4899' },
  { name: 'Scale Package',    price: '₹59,999+', tag: 'Enterprise',    color: 'rose',    hex: '#f43f5e' },
  { name: 'Custom',           price: 'Custom',   tag: 'Ask Us',        color: 'teal',    hex: '#14b8a6' },
];

const steps = [
  { num: '01', title: 'Choose Your Package', desc: 'Select the service or bundle you want to purchase below.' },
  { num: '02', title: 'Scan & Pay',          desc: 'Use PhonePe, Google Pay, or any UPI app to complete payment.' },
  { num: '03', title: 'Send Screenshot',     desc: 'WhatsApp your payment screenshot to +91 93809 08118.' },
  { num: '04', title: 'We Start in 24hrs',   desc: 'Our team begins your project within one business day.' },
];

export default function PaymentContent() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeQR, setActiveQR] = useState<'phonepe' | 'gpay'>('phonepe');
  const [copied, setCopied]     = useState(false);

  const copyUPI = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-[--bg] pt-36 pb-16">
        <div className="glow-orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)' }} />
        <div className="noise-overlay" />
        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <span className="badge mb-6">
            <Shield size={11} className="text-indigo-400" />
            100% Secure Payment
          </span>
          <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-5 max-w-3xl mx-auto">
            Pay & We'll Start{' '}
            <span className="text-gradient-primary">Within 24 Hours</span>
          </h1>
          <p className="text-[--text-secondary] text-lg font-light max-w-2xl mx-auto">
            Simple UPI payment — no complicated checkout, no account creation. Just scan and pay. Your project kicks off the very next business day.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad-sm bg-[--surface-1] overflow-hidden">
        <div className="divider absolute top-0 inset-x-0" />
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 90, damping: 18 }}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center font-display font-black text-sm text-indigo-300 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-sm text-[--text-primary]">{s.title}</h3>
                <p className="text-xs text-[--text-muted] leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGE SELECTOR ── */}
      <section className="section-pad bg-[--bg]">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-3">
              Step 1 — <span className="text-gradient-primary">Select Your Package</span>
            </h2>
            <p className="text-[--text-secondary] font-light">Click to select what you're paying for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {packages.map(pkg => (
              <button key={pkg.name} onClick={() => setSelected(pkg.name)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] ${
                  selected === pkg.name
                    ? 'border-indigo-500/60 bg-indigo-500/10 scale-[1.02]'
                    : 'border-[--border] bg-[--surface-2] hover:border-[--border-strong]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[--text-muted] block mb-1">{pkg.tag}</span>
                <span className="font-display font-bold text-sm text-[--text-primary] block mb-0.5">{pkg.name}</span>
                <span className="font-display font-black text-base" style={{ color: pkg.hex }}>{pkg.price}</span>
              </button>
            ))}
          </div>
          {selected && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/05 mb-4"
            >
              <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
              <p className="text-sm text-indigo-300 font-medium">
                <strong>{selected}</strong> selected. Now proceed to scan the QR code and pay.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── PAYMENT QR ── */}
      <section className="section-pad-sm bg-[--surface-1] overflow-hidden">
        <div className="divider absolute top-0 inset-x-0" />
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-3">
              Step 2 — <span className="text-gradient-primary">Scan & Pay</span>
            </h2>
            <p className="text-[--text-secondary] font-light">Open PhonePe, Google Pay, Paytm or any UPI app and scan</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Tab switcher */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-[--surface-2] border border-[--border] mb-8 max-w-xs mx-auto">
              {(['phonepe', 'gpay'] as const).map(app => (
                <button key={app} onClick={() => setActiveQR(app)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeQR === app
                      ? app === 'phonepe'
                        ? 'bg-[#5f259f] text-white shadow-lg'
                        : 'bg-[#128C7E] text-white shadow-lg'
                      : 'text-[--text-muted] hover:text-[--text-primary]'
                  }`}
                >
                  {app === 'phonepe' ? '📱 PhonePe' : '🟢 Google Pay'}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* QR Card */}
              <div className="gradient-border rounded-3xl p-8 bg-[--surface-2] flex flex-col items-center text-center">
                {/* App branding */}
                <div className={`px-4 py-2 rounded-xl mb-6 text-white text-sm font-bold flex items-center gap-2 ${
                  activeQR === 'phonepe' ? 'bg-[#5f259f]' : 'bg-[#128C7E]'
                }`}>
                  {activeQR === 'phonepe' ? '📱 PhonePe' : '🟢 Google Pay'}
                </div>

                {/* QR Code image */}
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
                    style={{ background: activeQR === 'phonepe' ? '#5f259f' : '#128C7E' }} />
                  <div className="relative rounded-2xl overflow-hidden border border-[--border] p-3 bg-[--surface-3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeQR === 'phonepe' ? PHONEPE_QR : GPAY_QR}
                      alt={`${activeQR} QR code`}
                      width={220}
                      height={220}
                      className="rounded-lg"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                </div>

                <p className="text-xs text-[--text-muted] mb-1">UPI ID</p>
                <div className="flex items-center gap-2 bg-[--surface-3] rounded-xl px-4 py-2.5 border border-[--border] mb-2">
                  <span className="text-sm font-mono font-bold text-[--text-primary]">{UPI_ID}</span>
                  <button onClick={copyUPI} className="text-[--text-muted] hover:text-indigo-400 transition-colors ml-1">
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                <p className="text-[10px] text-[--text-muted]">{copied ? '✅ Copied!' : 'Tap to copy UPI ID'}</p>
              </div>

              {/* Instructions */}
              <div className="flex flex-col gap-5">
                <div className="p-6 rounded-2xl border border-[--border] bg-[--surface-2]">
                  <h3 className="font-display font-bold text-base text-[--text-primary] mb-4">📋 Payment Instructions</h3>
                  <ol className="flex flex-col gap-3">
                    {[
                      `Open ${activeQR === 'phonepe' ? 'PhonePe' : 'Google Pay'} on your phone`,
                      'Tap "Scan QR" or "Pay by UPI ID"',
                      `Scan the QR code OR enter UPI ID: ${UPI_ID}`,
                      `Enter amount as per your selected package`,
                      'Add note: Your name + service (e.g. "Ravi - WhatsApp Setup")',
                      'Complete the payment',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[--text-secondary] font-light">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-[10px] font-black flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Also accept */}
                <div className="p-5 rounded-2xl border border-[--border] bg-[--surface-2]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-3">Also accepted via</p>
                  <div className="flex flex-wrap gap-2">
                    {['Paytm', 'BHIM', 'Amazon Pay', 'Any UPI App'].map(app => (
                      <span key={app} className="badge text-[10px]">{app}</span>
                    ))}
                  </div>
                </div>

                {/* Direct number */}
                <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/05">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone size={14} className="text-amber-400" />
                    <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">Pay to phone number</p>
                  </div>
                  <p className="font-display font-black text-2xl text-[--text-primary]">{PHONE}</p>
                  <p className="text-xs text-[--text-muted] mt-1">Registered as: oblue (PhonePe · SBI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEP 3: AFTER PAYMENT ── */}
      <section className="section-pad bg-[--bg]">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-3">
              Step 3 — <span className="text-gradient-primary">Confirm Your Payment</span>
            </h2>
            <p className="text-[--text-secondary] font-light">After paying, send us your screenshot on WhatsApp</p>
          </div>

          <div className="max-w-2xl mx-auto gradient-border rounded-3xl p-8 md:p-10 bg-[--surface-2] text-center">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.462 3.43 1.27 4.876L2 22l5.27-1.255A9.965 9.965 0 0012.004 22C17.53 22 22 17.53 22 12.004 22 6.477 17.53 2 12.004 2zm0 18.154a8.146 8.146 0 01-4.42-1.306l-.317-.188-3.127.744.757-3.015-.207-.326A8.169 8.169 0 0112.004 3.83c4.52 0 8.197 3.677 8.197 8.174 0 4.497-3.677 8.15-8.197 8.15z"/>
              </svg>
            </div>

            <h3 className="font-display font-bold text-2xl mb-3">Send Payment Screenshot</h3>
            <p className="text-[--text-secondary] font-light mb-2">WhatsApp the payment screenshot to:</p>
            <p className="font-display font-black text-3xl text-[--text-primary] mb-1">+91 93809 08118</p>
            <p className="text-xs text-[--text-muted] mb-8">Include your name and which service you paid for</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/919380908118?text=${encodeURIComponent(`Hi oblue! I just made the payment for ${selected || 'a package'}. Please find the screenshot attached. Name: [Your Name]`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-sm"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
              >
                📸 Send Screenshot via WhatsApp
              </a>
              <Link href="/contact" className="btn-ghost justify-center text-sm">
                Have Questions?
              </Link>
            </div>

            {/* Guarantee strip */}
            <div className="mt-8 pt-6 border-t border-[--border] grid grid-cols-3 gap-4">
              {[
                { icon: Shield, text: 'Secure UPI Payment' },
                { icon: Clock,  text: 'Start in 24 Hours' },
                { icon: Zap,    text: 'No Hidden Fees' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1.5">
                  <Icon size={16} className="text-indigo-400" />
                  <span className="text-[10px] font-semibold text-[--text-muted] text-center">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST / REFUND ── */}
      <section className="section-pad-sm bg-[--surface-1]">
        <div className="divider absolute top-0 inset-x-0" />
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '🔒 Safe & Secure', desc: 'All payments go directly through UPI — the most secure payment rail in India, regulated by NPCI.' },
              { title: '🔄 Satisfaction Promise', desc: "Not happy with the work? We'll revise until you are. Contact us within 7 days for revisions at no extra cost." },
              { title: '⚡ Quick Start', desc: 'Once payment is confirmed, our Mysuru team begins your project setup within the next business day.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-[--border] bg-[--surface-2]">
                <h3 className="font-display font-bold text-base text-[--text-primary] mb-2">{title}</h3>
                <p className="text-sm text-[--text-secondary] font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
