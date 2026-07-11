'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Founder',
    company: 'RK Auto Parts',
    avatar: 'RK',
    color: 'indigo',
    stars: 5,
    text: "oblue transformed our business. WhatsApp automation alone increased our response rate to 100% within 2 minutes — we've tripled leads in 3 months.",
  },
  {
    name: 'Priya Nair',
    role: 'Director',
    company: 'Bliss Clinic',
    avatar: 'PN',
    color: 'violet',
    stars: 5,
    text: "Our Google ranking went from page 6 to page 1 in under 60 days. The AI chatbot handles appointment booking 24/7 — I wake up to confirmed bookings.",
  },
  {
    name: 'Sanjay Mehta',
    role: 'CEO',
    company: 'FitZone Gym',
    avatar: 'SM',
    color: 'emerald',
    stars: 5,
    text: "Best investment I've made for my gym. 45 new memberships in month one from the lead gen campaigns. The website is stunning — customers actually compliment it.",
  },
  {
    name: 'Anjali Shah',
    role: 'Owner',
    company: 'Purely Organic',
    avatar: 'AS',
    color: 'amber',
    stars: 5,
    text: "We were invisible online before oblue. Now we appear in every local search, our WhatsApp gets enquiries daily, and revenue is up 2.5x in six months.",
  },
  {
    name: 'Mohit Verma',
    role: 'MD',
    company: 'Verma Constructions',
    avatar: 'MV',
    color: 'cyan',
    stars: 5,
    text: "The AI Voice Agent qualifies leads before I even get involved. Game-changing. Our sales team is now purely focused on closing — close rate jumped 60%.",
  },
  {
    name: 'Deepika Patel',
    role: 'Principal',
    company: 'Stellar Academy',
    avatar: 'DP',
    color: 'rose',
    stars: 5,
    text: "We saw a 300% increase in admission enquiries after the website and SEO launch. The automated follow-up sequences convert leads while we sleep.",
  },
];

const colorMap: Record<string, string> = {
  indigo:  'bg-indigo-500/15 border-indigo-500/30 text-indigo-300',
  violet:  'bg-violet-500/15 border-violet-500/30 text-violet-300',
  emerald: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
  amber:   'bg-amber-500/15 border-amber-500/30 text-amber-300',
  cyan:    'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
  rose:    'bg-rose-500/15 border-rose-500/30 text-rose-300',
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad bg-[--bg] overflow-hidden">
      <div
        className="glow-orb w-[600px] h-[600px] top-1/2 right-0 translate-x-1/4 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Client Results
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
            Businesses That{' '}
            <span className="text-gradient-primary">Scaled With oblue</span>
          </h2>
          <p className="text-[--text-secondary] text-lg leading-relaxed font-light">
            Real stories. Real growth. From local businesses to fast-scaling startups.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 80, damping: 18 }}
              className="card-hover relative flex flex-col p-7 rounded-3xl border border-[--border] bg-[--surface-2] group overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} className="text-[--text-primary]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-[--text-secondary] leading-relaxed font-light flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-xs font-bold flex-shrink-0 ${colorMap[t.color]}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[--text-primary]">{t.name}</p>
                  <p className="text-xs text-[--text-muted]">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
