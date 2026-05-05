'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Inter, Cairo } from 'next/font/google'
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
})

export default function HeroBanner() {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  // ✅ RTL SUPPORT
  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === "ar";
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);

    return () => i18n.off("languageChanged", updateLang);
  }, []);

  return (
    <section className={`relative w-full h-[65vh] md:h-[75vh] overflow-hidden text-white ${isArabic ? cairo.className : inter.className}`}>

      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        <iframe
          className="absolute top-1/2 left-1/2 
          w-[120vw] h-[67.5vw]
          min-w-full min-h-full
          -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/twwnsp_5PrA?autoplay=1&mute=1&loop=1&playlist=twwnsp_5PrA&controls=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
      </div>

      {/* 💎 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

    {/* 🔥 BIG TITLE */}
<h1
  className={`
    text-4xl sm:text-4xl md:text-5xl
    ${isArabic ? "font-semibold leading-[1.1]" : "font-extrabold leading-[1.2]"}
    max-w-4xl tracking-tight
  `}
>
  {t("heroBanner.title1")}

  <span
    className={`
      block text-[#FFFF]
      ${isArabic ? "mt-3" : ""}
    `}
  >
    {t("heroBanner.title2")}
  </span>
</h1>

        {/* ✨ DESCRIPTION */}
        <p className="mt-5 text-white/70 max-w-2xl text-sm md:text-lg font-light">
          {t("heroBanner.desc")}
        </p>

        {/* 🎯 BUTTON */}
        <Link href="/Register">
          <button className="mt-8 bg-[#C9A227] hover:bg-[#e0b93b] text-black px-7 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105">
            {t("heroBanner.cta")}
          </button>
        </Link>

      </div>

    </section>
  )
}