'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
  { label: 'Pay Now',  href: '/payment' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);
  const [theme,    setTheme]     = useState<'dark'|'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark'|'light'|null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <>
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-[--border] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : ''
        }`}
      >
        {/* Inner wrapper */}
        <div className="container mx-auto max-w-[1200px] px-6 md:px-10 h-16 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-0.5 shrink-0">
            <span className="font-display text-2xl font-black tracking-tight">
              <span
                className="text-transparent"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                o
              </span>
              <span style={{ color: 'var(--text-primary)' }}>blue</span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${active ? 'active' : ''}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[--border] text-[--text-muted] hover:text-[--text-primary] hover:border-[--border-strong] hover:bg-white/5 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Book Free Call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── MOBILE ACTIONS ── */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[--border] text-[--text-muted]"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[--border] text-[--text-primary]"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-16 inset-x-0 z-40 md:hidden glass-strong border-b border-[--border] shadow-2xl"
          >
            <div className="container mx-auto max-w-[1200px] px-6 py-6 flex flex-col gap-1">
              {NAV.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                        : 'text-[--text-secondary] hover:text-[--text-primary] hover:bg-white/5'
                    }`}
                  >
                    {label}
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    )}
                  </Link>
                );
              })}
              <div className="mt-3 pt-4 border-t border-[--border]">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Book Free Consultation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
