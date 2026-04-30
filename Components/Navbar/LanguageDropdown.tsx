'use client';

import { useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import i18n from '@/lib/i18n/i18next';

export default function LanguageDropdown({ scrolled }: { scrolled: boolean }) {

  // ✅ FORCER ANGLAIS
  useEffect(() => {
    i18n.changeLanguage('en');
    localStorage.removeItem('i18nextLng');
  }, []);

  return (
    <div className="relative">
      
      {/* BUTTON (DESIGN IDENTIQUE) */}
      <button
        disabled // 🔒 bloque interaction
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 cursor-default ${
          scrolled
            ? 'border-black/10 bg-black/[0.04] text-black/80'
            : 'border-white/10 bg-white/5 text-white/80 backdrop-blur-md'
        }`}
      >
        <Globe className="w-4 h-4 text-[#C9A227]" />

        <span className="text-sm font-medium uppercase">
          en
        </span>

        <ChevronDown className="w-4 h-4 opacity-40" />
      </button>

      {/* ❌ DROPDOWN SUPPRIMÉ (ou tu peux le laisser caché si tu veux) */}
    </div>
  );
}