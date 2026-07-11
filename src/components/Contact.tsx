'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone, Clock, MapPin } from 'lucide-react';

const services = [
  'WhatsApp Automation',
  'Premium Website',
  'AI Chatbot',
  'Google SEO',
  'Lead Generation',
  'AI Voice Agent',
  'Social Media Automation',
  'CRM Setup',
  'AI Business Agent',
  'Google Business Profile',
  'Full Growth Package',
];

const budgets = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹60,000',
  '₹60,000+',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', business: '', phone: '', email: '',
    service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>('idle');
  const [waLink, setWaLink] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())  e.name  = 'Your name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-]{8,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.service) e.service = 'Please select a service';
    return e;
  };

  const handleBlur = (field: string) => {
    const e = validate();
    setErrors(prev => ({ ...prev, [field]: e[field] || '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        // Build WhatsApp deeplink for owner to quickly reply
        const msg = encodeURIComponent(
          `Hi ${form.name}! 👋 Thanks for reaching out to oblue. I'm Sathyajith, founder of oblue Mysuru.\n\nI saw your interest in *${form.service}*. Let me schedule a quick free call — when's a good time for you?`
        );
        setWaLink(`https://wa.me/${form.phone.replace(/[^0-9]/g, '')}?text=${msg}`);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const info = [
    { icon: Phone,  label: 'WhatsApp / Call', val: '+91 93809 08118',    href: 'tel:+919380908118' },
    { icon: Mail,   label: 'Email',            val: 'hello@oblue.in',    href: 'mailto:hello@oblue.in' },
    { icon: MapPin, label: 'Location',         val: 'Mysuru, Karnataka', href: null },
    { icon: Clock,  label: 'Response Time',    val: 'Within 4 hours',    href: null },
  ];

  if (status === 'success') {
    return (
      <section className="section-pad flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="gradient-border glass-strong p-12 rounded-3xl max-w-md mx-auto text-center w-full"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-emerald-400" />
          </div>
          <h2 className="font-display font-black text-3xl mb-3">We're on it! 🚀</h2>
          <p className="text-[--text-secondary] font-light leading-relaxed mb-3">
            Your request is received. Expect a call or WhatsApp from <strong className="text-[--text-primary]">+91 93809 08118</strong> within 4 business hours.
          </p>
          <p className="text-[--text-muted] text-sm mb-8">
            A notification has been sent to the oblue Mysuru team.
          </p>
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm w-full"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              💬 Connect on WhatsApp
            </a>
          )}
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative section-pad bg-[--bg] overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-0 right-0"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[400px] h-[400px] bottom-0 left-0"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)' }} />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-20 items-start">

          {/* Left — sticky info */}
          <div className="lg:sticky lg:top-24">
            <span className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Free Consultation
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
              Let's Grow{' '}
              <span className="text-gradient-primary">Your Business</span>
            </h2>
            <p className="text-[--text-secondary] text-base leading-relaxed font-light mb-10">
              Fill in the form and we'll schedule a free strategy call. No sales pitch — just clarity on how we can get more customers to your Mysuru business.
            </p>

            {/* Info cards */}
            <div className="flex flex-col gap-3 mb-8">
              {info.map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-2xl border border-[--border] bg-[--surface-2] group">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[--text-muted]">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-[--text-primary] hover:text-indigo-300 transition-colors">{val}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[--text-primary]">{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/919380908118?text=Hi%20oblue!%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/05 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.462 3.43 1.27 4.876L2 22l5.27-1.255A9.965 9.965 0 0012.004 22C17.53 22 22 17.53 22 12.004 22 6.477 17.53 2 12.004 2zm0 18.154a8.146 8.146 0 01-4.42-1.306l-.317-.188-3.127.744.757-3.015-.207-.326A8.169 8.169 0 0112.004 3.83c4.52 0 8.197 3.677 8.197 8.174 0 4.497-3.677 8.15-8.197 8.15z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-[--text-muted] font-medium">Prefer to message directly?</p>
                <p className="text-sm font-bold text-emerald-400">Chat on WhatsApp →</p>
              </div>
            </a>
          </div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="gradient-border rounded-3xl p-8 md:p-10 bg-[--surface-2] flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-[--text-primary] mb-1">Tell us about your business</h3>
              <p className="text-xs text-[--text-muted]">Free consultation • No commitment • Response within 4 hours</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Your Name *</label>
                <input className={`field ${errors.name ? 'error' : ''}`} placeholder="Ravi Kumar"
                  value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} onBlur={() => handleBlur('name')} />
                {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Business Name</label>
                <input className="field" placeholder="e.g. Ravi Auto Garage, Mysuru"
                  value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Phone / WhatsApp *</label>
                <input className={`field ${errors.phone ? 'error' : ''}`} placeholder="+91 93809 08118" type="tel"
                  value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} onBlur={() => handleBlur('phone')} />
                {errors.phone && <p className="mt-1.5 text-xs text-rose-400">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Email Address</label>
                <input className={`field ${errors.email ? 'error' : ''}`} placeholder="ravi@example.com" type="email"
                  value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} onBlur={() => handleBlur('email')} />
                {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Service Interested In *</label>
              <select className={`field ${errors.service ? 'error' : ''}`}
                value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))} onBlur={() => handleBlur('service')}>
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="mt-1.5 text-xs text-rose-400">{errors.service}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-3">Investment Budget</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map(b => (
                  <button key={b} type="button" onClick={() => setForm(p => ({ ...p, budget: b }))}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all duration-200 ${
                      form.budget === b
                        ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
                        : 'border-[--border] text-[--text-muted] hover:border-[--border-strong] hover:text-[--text-primary]'
                    }`}>{b}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[--text-muted] mb-2">Tell Us About Your Business</label>
              <textarea className="field resize-none" rows={4}
                placeholder="What does your business do? What's your biggest challenge right now? What's your goal for the next 6 months?"
                value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <p className="text-rose-400 text-sm">Something went wrong. Please WhatsApp us directly at +91 93809 08118</p>
              </div>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary justify-center text-sm py-4 disabled:opacity-60">
              {status === 'loading'
                ? <><Loader2 size={15} className="animate-spin" />Sending your request...</>
                : <>Get My Free Strategy Call <ArrowRight size={15} /></>
              }
            </button>

            <p className="text-center text-xs text-[--text-muted] font-light">
              🔒 Your details are private. No spam ever. Response within 4 hours from our Mysuru team.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
