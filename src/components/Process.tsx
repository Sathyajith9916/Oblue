'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Business Audit',     desc: 'We analyze your current site performance, SEO rankings, response times, and identify all revenue leaks.' },
  { num: '02', title: 'Strategy Design',    desc: 'We map a custom automation roadmap covering chatbots, lead hooks, ad targets, and SEO priorities.' },
  { num: '03', title: 'Implementation',     desc: 'Our engineers build your website, deploy AI assistants, and integrate your WhatsApp pipeline.' },
  { num: '04', title: 'Optimization',       desc: 'We run A/B tests, evaluate response latencies, and fine-tune AI models under real traffic conditions.' },
  { num: '05', title: 'Scale & Grow',       desc: 'We launch active outbound campaigns, scale marketing channels, and deliver monthly performance reviews.' },
];

export default function Process() {
  return (
    <section id="process" className="relative section-pad bg-[--surface-1] overflow-hidden">
      <div className="divider absolute top-0 inset-x-0" />
      <div className="divider absolute bottom-0 inset-x-0" />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Our Blueprint
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-5">
            From Audit to{' '}
            <span className="text-gradient-primary">Full Automation</span>
          </h2>
          <p className="text-[--text-secondary] text-lg leading-relaxed font-light">
            A proven 5-step process that turns your business into a lead-generating machine.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[calc(10%+22px)] right-[calc(10%+22px)] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 90, damping: 18 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step bubble */}
                <div className="relative z-10 mb-6">
                  <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center font-display font-black text-sm text-indigo-300 bg-[--surface-2] border border-indigo-500/25 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 group-hover:text-indigo-200 transition-all duration-300 group-hover:scale-110 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    {s.num}
                  </div>
                </div>
                <h3 className="font-display font-bold text-base text-[--text-primary] mb-2 group-hover:text-indigo-300 transition-colors">{s.title}</h3>
                <p className="text-xs text-[--text-secondary] leading-relaxed font-light max-w-[180px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
