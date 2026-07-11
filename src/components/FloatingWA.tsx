'use client';

import { motion } from 'framer-motion';

export default function FloatingWA() {
  return (
    <motion.a
      href="https://wa.me/919380908118?text=Hi%20oblue!%20I%27m%20interested%20in%20your%20services%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with oblue Mysuru"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 18 }}
      className="fixed bottom-7 right-7 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block text-xs font-semibold text-white px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
      >
        💬 Chat with us in Mysuru
      </motion.span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 6px 24px rgba(37,211,102,0.5)',
        }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.77.462 3.43 1.27 4.876L2 22l5.27-1.255A9.965 9.965 0 0012.004 22C17.53 22 22 17.53 22 12.004 22 6.477 17.53 2 12.004 2zm0 18.154a8.146 8.146 0 01-4.42-1.306l-.317-.188-3.127.744.757-3.015-.207-.326A8.169 8.169 0 0112.004 3.83c4.52 0 8.197 3.677 8.197 8.174 0 4.497-3.677 8.15-8.197 8.15z"/>
        </svg>
      </div>
    </motion.a>
  );
}
