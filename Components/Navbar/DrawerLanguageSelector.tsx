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

export default function DrawerLanguageSelector() {
  const [currentLang, setCurrentLang] = useState('en');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (i18n.language) {
      setCurrentLang(i18n.language);
    }
  }, []);

  // close outside
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
    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={ref}>
      
      {/* BUTTON FULL WIDTH */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex items-center justify-between
          px-4 py-3
          rounded-xl
          border border-black/10
          bg-black/[0.04]
          text-black/80
          hover:text-black
          transition-all
        "
      >
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#C9A227]" />
          <span className="text-sm font-medium uppercase">
            {currentLang}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN FULL WIDTH */}
      <div
        className={`
          w-full
          mt-2
          rounded-xl
          overflow-hidden
          border border-black/10
          bg-white
          shadow-lg
          transition-all duration-300

          ${
            open
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }
        `}
      >
        {LANGS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`
              w-full
              flex items-center justify-between
              px-4 py-3
              text-sm
              transition

              ${
                currentLang === lang.code
                  ? "bg-[#C9A227]/10 text-[#C9A227] font-semibold"
                  : "text-black/70 hover:bg-black/5 hover:text-black"
              }
            `}
          >
            <span>{lang.label}</span>
            <span className="uppercase text-[11px] opacity-60">
              {lang.code}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}