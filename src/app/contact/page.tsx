import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Contact oblue — Book Your Free Business Consultation',
  description: 'Book a free strategy consultation with oblue. We\'ll audit your digital presence and create a custom AI automation roadmap to grow your customer base.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-[--bg] pt-36 pb-16">
        <div
          className="glow-orb w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)' }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] top-10 right-0"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)' }}
        />
        <div className="noise-overlay" />
        <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
          <span className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free Consultation
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight mb-6 max-w-4xl mx-auto">
            Let's Grow Your{' '}
            <span className="text-gradient-primary">Business Together</span>
          </h1>
          <p className="text-lg md:text-xl text-[--text-secondary] font-light leading-relaxed max-w-3xl mx-auto">
            Tell us about your business. Our team will analyze your digital presence and craft a custom growth roadmap — completely free, no commitment required.
          </p>
        </div>
      </section>

      <Contact />
      <FAQ />
    </main>
  );
}
