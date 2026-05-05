"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";
import i18n from "@/lib/i18n/i18next";

const LANGS = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
];

export default function LanguageLight({ isArabic }: { isArabic: boolean }) {
  const [currentLang, setCurrentLang] = useState("en");
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
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (lng: string) => {
    setCurrentLang(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/[0.04] text-black/80 hover:text-black transition-all duration-300"
      >
        <Globe className="w-4 h-4 text-[#C9A227]" />

        <span className="text-sm font-medium uppercase">
          {currentLang}
        </span>

        <ChevronDown
          className={`w-4 h-4 opacity-60 transition ${
            open ? "rotate-180" : ""
          } ${isArabic ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      <div
        className={`absolute ${
          isArabic ? "left-0" : "right-0"
        } mt-3 w-44 rounded-2xl shadow-xl border border-black/10 bg-white overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        {LANGS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`w-full px-4 py-3 text-sm flex justify-between items-center transition ${
              currentLang === lang.code
                ? "bg-black/5 text-black"
                : "text-black/70 hover:text-black hover:bg-black/5"
            }`}
          >
            {lang.label}
            <span className="uppercase text-xs opacity-60">
              {lang.code}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}