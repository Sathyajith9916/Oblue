'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatBubbleProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatBubble({ isOpen, onClick }: ChatBubbleProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [blink, setBlink] = useState(false);
  const [talking, setTalking] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  // Random blink
  useEffect(() => {
    const schedule = () => {
      const delay = 2500 + Math.random() * 3000;
      return setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 120);
        timerId = schedule();
      }, delay);
    };
    let timerId = schedule();
    return () => clearTimeout(timerId);
  }, []);

  // Talking animation on hover
  useEffect(() => {
    if (!hovered) {
      setTalking(false);
      return;
    }
    let on = false;
    const iv = setInterval(() => {
      on = !on;
      setTalking(on);
    }, 280);
    return () => clearInterval(iv);
  }, [hovered]);

  // Greeting popup
  useEffect(() => {
    if (isOpen) {
      setShowGreeting(false);
      return;
    }
    const show = setTimeout(() => setShowGreeting(true), 2500);
    const hide = setTimeout(() => setShowGreeting(false), 8000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [isOpen]);

  const handleClick = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
    setShowGreeting(false);
    onClick();
  }, [onClick]);

  const eyeScaleY = blink ? 0.05 : 1;
  const mouthOpen = talking
    ? 'M 224 278 Q 256 316 288 278'
    : 'M 228 282 Q 256 306 284 282';

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-24 right-7 z-50"
        >
          {/* Greeting popup */}
          <AnimatePresence>
            {showGreeting && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="absolute bottom-full right-0 mb-3 pointer-events-none"
              >
                <div
                  className="relative px-4 py-2.5 rounded-2xl rounded-br-sm text-sm font-medium text-white whitespace-nowrap shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3A7BFF, #00E5FF)',
                    boxShadow: '0 8px 24px rgba(58,123,255,0.4)',
                  }}
                >
                  Hi! 👋 How can I help you today?
                  <div
                    className="absolute -bottom-1.5 right-4 w-3 h-3 rotate-45"
                    style={{ background: '#1CB5FF' }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Icon */}
          <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={handleClick}
            animate={
              clicked
                ? { scale: 0.93 }
                : hovered
                  ? { scale: 1.04 }
                  : { scale: 1 }
            }
            transition={{ type: 'spring', stiffness: 340, damping: 22 }}
            style={{ cursor: 'pointer', display: 'inline-block' }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ringGrad" x1="100" y1="100" x2="412" y2="412" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3A7BFF" />
                  <stop offset="55%" stopColor="#1CB5FF" />
                  <stop offset="100%" stopColor="#00E5FF" />
                </linearGradient>
                <linearGradient id="ringGradHover" x1="100" y1="100" x2="412" y2="412" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#5A9BFF" />
                  <stop offset="55%" stopColor="#40D0FF" />
                  <stop offset="100%" stopColor="#00FFEE" />
                </linearGradient>
                <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="45%" stopColor="#A8DCFF" />
                  <stop offset="100%" stopColor="#3A7BFF" />
                </radialGradient>
                <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="ringGlowHover" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="14" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="eyeGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="eyeGlowHover" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="9" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background circle */}
              <circle cx="256" cy="256" r="256" fill="#0D1526" />

              {/* Hover halo */}
              <motion.circle
                cx="256" cy="248" r="138"
                stroke="#1CB5FF"
                strokeWidth="60"
                fill="none"
                animate={{ opacity: hovered ? 0.12 : 0, scale: hovered ? 1.08 : 1 }}
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: '256px 248px' }}
              />

              {/* Spinning ring */}
              <motion.circle
                cx="256" cy="248" r="138"
                stroke={hovered ? 'url(#ringGradHover)' : 'url(#ringGrad)'}
                strokeWidth="36"
                fill="none"
                strokeLinecap="round"
                filter={hovered ? 'url(#ringGlowHover)' : 'url(#ringGlow)'}
                animate={{ rotate: hovered ? 360 : 0 }}
                transition={
                  hovered
                    ? { duration: 6, repeat: Infinity, ease: 'linear' }
                    : { duration: 0.4 }
                }
                style={{ transformOrigin: '256px 248px' }}
              />

              {/* Pulse ring on click */}
              {clicked && (
                <motion.circle
                  cx="256" cy="248" r="138"
                  stroke="#00E5FF"
                  strokeWidth="8"
                  fill="none"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  style={{ transformOrigin: '256px 248px' }}
                />
              )}

              {/* Left eye */}
              <motion.g
                animate={{ scaleY: eyeScaleY }}
                transition={{ duration: 0.06 }}
                style={{ transformOrigin: '210px 238px' }}
              >
                <circle cx="210" cy="238" r="20" fill="url(#eyeGrad)" filter={hovered ? 'url(#eyeGlowHover)' : 'url(#eyeGlow)'} />
                <circle cx="210" cy="238" r="8" fill="#FFFFFF" />
                <motion.circle
                  cx="210" cy="238" r="4"
                  fill="#3A7BFF"
                  animate={{ x: hovered ? 3 : 0, y: hovered ? -2 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
              </motion.g>

              {/* Right eye */}
              <motion.g
                animate={{ scaleY: eyeScaleY }}
                transition={{ duration: 0.06 }}
                style={{ transformOrigin: '302px 238px' }}
              >
                <circle cx="302" cy="238" r="20" fill="url(#eyeGrad)" filter={hovered ? 'url(#eyeGlowHover)' : 'url(#eyeGlow)'} />
                <circle cx="302" cy="238" r="8" fill="#FFFFFF" />
                <motion.circle
                  cx="302" cy="238" r="4"
                  fill="#3A7BFF"
                  animate={{ x: hovered ? 3 : 0, y: hovered ? -2 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
              </motion.g>

              {/* Mouth */}
              <motion.path
                d={mouthOpen}
                stroke="#4DAAFF"
                strokeWidth="11"
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: 0.85 }}
                transition={{ duration: 0.12 }}
              />

              {/* Signal arcs */}
              <motion.path
                d="M 356 130 A 132 132 0 0 1 394 200"
                stroke="#00E5FF"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: hovered ? 0.85 : 0.55 }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M 375 108 A 162 162 0 0 1 422 202"
                stroke="#3A7BFF"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: hovered ? 0.6 : 0.3 }}
                transition={{ duration: 0.3, delay: 0.06 }}
              />
              <motion.path
                d="M 394 88 A 194 194 0 0 1 450 204"
                stroke="#1CB5FF"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                animate={{ opacity: hovered ? 0.35 : 0 }}
                transition={{ duration: 0.3, delay: 0.12 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
