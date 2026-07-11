import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'oblue — AI Automation & Digital Growth Agency',
  description: 'Transform your business with AI-powered automation, premium websites, Google SEO, WhatsApp bots, and lead generation systems. Get more customers, faster.',
  keywords: ['AI automation', 'WhatsApp automation', 'business website', 'SEO agency', 'lead generation', 'AI chatbot'],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Services />
      <Packages />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
    </main>
  );
}
