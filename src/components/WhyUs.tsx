'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const metrics = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 95,  suffix: '%', label: 'Client Satisfaction' },
  { value: 24,  suffix: '/7', label: 'Automation Active' },
  { value: 3,   suffix: 'x', label: 'Avg Lead Growth' },
];

const reasons = [
  'AI-first technology stack powering every solution',
  'Transparent flat-rate pricing with no hidden fees',
  'Rapid 7–14 day delivery on all packages',
  'Proven frameworks with measurable ROI',
  'Ongoing optimization and monthly check-ins',
  'Dedicated support via Slack or WhatsApp',
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative section-pad bg-[--bg] overflow-hidden">
      <div
        className="glow-orb w-[500px] h-[500px] bottom-0 left-0"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <span className="badge badge-green mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Why Partners Choose oblue
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-6">
              Bespoke Systems Built to{' '}
              <span className="text-gradient-primary">Convert & Scale</span>
            </h2>
            <p className="text-[--text-secondary] text-lg leading-relaxed font-light mb-10">
              Unlike legacy agencies, we combine advanced AI engines, fast web tech, and high-conversion design to drive real revenue — not vanity metrics.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[--text-secondary] font-light">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-emerald-400" />
                  </div>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — metrics */}
          <div className="grid grid-cols-2 gap-5">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100, damping: 18 }}
                className="card-hover gradient-border flex flex-col items-center justify-center py-10 px-6 rounded-3xl bg-[--surface-2] border border-[--border] text-center"
              >
                <div
                  className="font-display font-black text-5xl md:text-6xl mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #a5b4fc, #c4b5fd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <CountUp target={m.value} suffix={m.suffix} />
                </div>
                <p className="text-xs font-semibold text-[--text-muted] uppercase tracking-widest">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
