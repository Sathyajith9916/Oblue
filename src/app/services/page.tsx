import type { Metadata } from 'next';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Process from '@/components/Process';

export const metadata: Metadata = {
  title: 'Services — oblue AI Automation & Digital Growth',
  description: 'Explore oblue\'s full suite of AI-powered services including WhatsApp automation, AI chatbots, Google SEO, lead generation, premium websites, and more.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-[--bg] pt-36 pb-16">
        <div
          className="glow-orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)' }}
        />
        <div className="noise-overlay" />
        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Solutions Suite
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-6 max-w-4xl mx-auto">
            Growth Solutions &{' '}
            <span className="text-gradient-primary">Automation Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-[--text-secondary] font-light leading-relaxed max-w-3xl mx-auto">
            SaaS-grade AI systems, high-conversion websites, and automated acquisition funnels designed to scale your business operations and maximize revenue.
          </p>
        </div>
      </section>

      <Services />
      <Packages />
      <Process />
    </main>
  );
}
