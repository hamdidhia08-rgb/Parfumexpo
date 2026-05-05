'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import i18n from '@/lib/i18n/i18next';

interface Lang {
  code: string;
  label: string;
}

const LANGS: Lang[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'tr', label: 'Türkçe' },
];

export default function Backupselecteur({ scrolled }: { scrolled: boolean }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // sync langue
  useEffect(() => {
    if (i18n.language) {
      setCurrentLang(i18n.language);
    }
  }, []);

  // fermer si click dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (lng: string) => {
    setCurrentLang(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setOpen(false); // ✅ fermer après choix
  };

  return (
    <div className="relative" ref={ref}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-black/10 bg-black/[0.04] text-black/80 hover:text-black'
            : 'border-white/10 bg-white/5 text-white/80 hover:text-white backdrop-blur-md'
        }`}
      >
        <Globe className="w-4 h-4 text-[#C9A227]" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
        <ChevronDown className="w-4 h-4 opacity-60" />
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute right-0 mt-3 w-40 transition-all duration-300 rounded-2xl shadow-2xl overflow-hidden ${
          open
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        } ${
          scrolled
            ? 'bg-white border border-black/10'
            : 'bg-[#111111]/95 backdrop-blur-xl border border-white/10'
        }`}
      >
        {LANGS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`w-full px-4 py-3 text-left text-sm flex justify-between transition ${
              currentLang === lang.code
                ? scrolled
                  ? 'bg-black/5 text-black'
                  : 'bg-white/5 text-white'
                : scrolled
                ? 'text-black/70 hover:text-black hover:bg-black/5'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang.label}
            <span className="uppercase">{lang.code}</span>
          </button>
        ))}
      </div>
    </div>
  );
}