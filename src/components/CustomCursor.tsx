'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ── PARTICLE SYSTEM (Antigravity style) ──────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; alpha: number;
  baseAlpha: number;
}

const PARTICLE_COUNT = 90;
const REPEL_RADIUS   = 120;
const REPEL_STRENGTH = 0.4;

function initParticles(w: number, h: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 2 + 1,
    alpha: Math.random() * 0.5 + 0.15,
    baseAlpha: Math.random() * 0.5 + 0.15,
  }));
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles  = useRef<Particle[]>([]);
  const mouse      = useRef({ x: -999, y: -999 });
  const rafId      = useRef<number>(0);
  const [visible,  setVisible]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch,  setIsTouch]  = useState(true);

  // Spring cursor ring
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const sx = useSpring(rawX, { stiffness: 280, damping: 26, mass: 0.4 });
  const sy = useSpring(rawY, { stiffness: 280, damping: 26, mass: 0.4 });

  // ── Canvas particle loop ─────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsTouch(false);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      particles.current.forEach(p => {
        // Repel from cursor
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          p.vx += (dx / dist) * force * REPEL_STRENGTH;
          p.vy += (dy / dist) * force * REPEL_STRENGTH;
          p.alpha = Math.min(p.baseAlpha + force * 0.6, 0.9);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        // Friction
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 130, 255, ${p.alpha})`;
        ctx.fill();
      });

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // ── Mouse tracking ───────────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!(t.closest('a') || t.closest('button') || t.closest('[role="button"]')));
    };

    const onLeave = () => { setVisible(false); mouse.current = { x: -999, y: -999 }; };
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover',   onOver);
    document.addEventListener('mouseleave',  onLeave);
    document.addEventListener('mouseenter',  onEnter);
    document.body.classList.add('cursor-active');

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover',  onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.body.classList.remove('cursor-active');
    };
  }, [visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9990]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Ambient spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-[9991] transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.07), transparent 70%)`,
        }}
      />

      {/* Outer ring — spring-lagged */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: sx, y: sy,
          translateX: '-50%', translateY: '-50%',
          opacity: visible ? 1 : 0,
          border: hovering ? '2px solid rgba(139,92,246,0.9)' : '1.5px solid rgba(99,102,241,0.55)',
          background: hovering ? 'rgba(139,92,246,0.08)' : 'transparent',
          boxShadow: hovering ? '0 0 20px rgba(139,92,246,0.35)' : 'none',
        }}
        animate={{ width: hovering ? 52 : 36, height: hovering ? 52 : 36 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      />

      {/* Inner dot — snaps instantly */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: rawX, y: rawY,
          translateX: '-50%', translateY: '-50%',
          opacity: visible ? 1 : 0,
          background: hovering
            ? 'linear-gradient(135deg, #8b5cf6, #6366f1)'
            : 'rgba(255,255,255,0.95)',
          boxShadow: hovering ? '0 0 14px rgba(139,92,246,0.9)' : '0 0 6px rgba(255,255,255,0.4)',
        }}
        animate={{ width: hovering ? 9 : 6, height: hovering ? 9 : 6 }}
        transition={{ type: 'spring', stiffness: 600, damping: 32 }}
      />
    </>
  );
}
