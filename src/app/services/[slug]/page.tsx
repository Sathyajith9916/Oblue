import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-[--bg]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-20 ${service.bg}`}
          style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }}
        />
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[--text-muted] font-medium mb-8">
              <Link href="/" className="hover:text-[--text-primary] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/#services" className="hover:text-[--text-primary] transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className={service.iconColor}>{service.title}</span>
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${service.border} ${service.tagBg} mb-6 text-xs font-bold`}>
              <Icon size={14} />
              {service.tag}
            </div>

            <h1 className="font-display font-black text-5xl md:text-6xl tracking-tight mb-6 text-[--text-primary]">
              {service.title}
            </h1>
            
            <p className="text-[--text-secondary] text-xl leading-relaxed font-light mb-10 max-w-2xl">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="btn-primary py-4 px-8 text-base shadow-lg shadow-indigo-500/20">
                Get Started Now <ArrowRight size={18} />
              </Link>
              <div className="text-[--text-muted] text-sm flex flex-col items-start px-4">
                <span className="uppercase tracking-wider text-[10px] font-bold">Starting From</span>
                <span className="font-display font-bold text-2xl text-[--text-primary]">{service.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-[--surface-1] border-y border-[--border]">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Features */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-8">What's Included</h2>
              <div className="space-y-6">
                {service.detailedFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-[--surface-2] border border-[--border] hover:border-[--border-strong] transition-colors">
                    <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${service.iconBg}`}>
                      <Icon size={20} className={service.iconColor} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1 text-[--text-primary]">{feature.title}</h4>
                      <p className="text-sm text-[--text-secondary] leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-8">Why You Need This</h2>
              <div className="bg-[--surface-2] border border-[--border] rounded-3xl p-8">
                <ul className="space-y-5">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={24} className={`shrink-0 mt-0.5 ${service.checkColor}`} />
                      <span className="text-base text-[--text-secondary] leading-relaxed font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Card */}
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-xl shadow-indigo-500/20">
                <h3 className="font-display font-bold text-2xl mb-3">Ready to transform your business?</h3>
                <p className="text-indigo-100 mb-6 font-light">Book a free strategy call today and let's discuss how {service.title} can drive real growth.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                  Book Free Call <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
