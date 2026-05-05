'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { Inter, Cairo } from "next/font/google";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n/i18next';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600"], // ✅ plus léger que avant
});

const RegisterCards = () => {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === 'ar';
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    };

    updateLang();
    i18n.on('languageChanged', updateLang);
    return () => i18n.off('languageChanged', updateLang);
  }, []);

  const cards = [
    {
      icon: Users,
      badge: t("register.visitor.badge"),
      title: t("register.visitor.title"),
      desc: t("register.visitor.desc"),
      button: t("register.visitor.button"),
    },
    {
      icon: Building2,
      badge: t("register.business.badge"),
      title: t("register.business.title"),
      desc: t("register.business.desc"),
      button: t("register.business.button"),
    },
  ];

  return (
    <section className={`${isArabic ? cairo.className : inter.className} w-full bg-white py-8 px-4 md:px-8`}>
      {/* TOP LEFT IMAGE */}
<img
  src={isArabic ? "/images/pen-ar.png" : "/images/pen.png"} // ✅ image arabe
  alt="decoration"
  className={`
    hidden md:block
    absolute top-0 md:top-10
    ${isArabic ? "right-0 md:right-0" : "left-0 md:left-0"}
    w-44 md:w-70
    opacity-90
    pointer-events-none select-none
  `}
/>
 {/* TOP RIGHT IMAGE */}
 <img
  src={isArabic ? "/images/right-ar.png" : "/images/right.png"} // ✅ image arabe
  alt="right decoration"
  className={`
    hidden md:block
    absolute top-0 md:top-13
    ${isArabic ? "left-0 md:left-20" : "right-0 md:right-30"}
    w-32 md:w-20
    opacity-90
    pointer-events-none select-none
  `}
/>
{/* TITLE */}
<div className="relative text-center mb-20">

<h1
  className={`
    absolute inset-0 flex items-center justify-center
    ${
      isArabic
        ? "text-[50px] sm:text-[70px] md:text-[140px]"  // ✅ AR FIX
        : "text-[80px] md:text-[140px]"
    }
    font-bold text-gray-200/40 tracking-widest uppercase
    pointer-events-none select-none
  `}
>
  REGISTER
</h1>

  {/* CONTENT */}
  <div className="relative z-10 pt-20 md:pt-45">

<p
  className={`
    text-[#C9A227]
    mb-3
    ${isArabic 
      ? "text-lg md:text-xl tracking-normal font-semibold" 
      : "text-sm tracking-widest uppercase"}
  `}
>
  {t("register.badge")}
</p>

    {/* Title */}
    <h2 className="text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] font-bold">
      {t("register.title1")}{" "}
      <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]">
        {t("register.title2")}
      </span>
    </h2>

    {/* Description */}
    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
      {t("register.desc")}
    </p>

  </div>

</div>

 {/* CARDS */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

  {cards.map((card, index) => {
    const images = [
      "/images/icons/visitor.png",
      "/images/icons/building.png",
    ];

    return (
      <div
        key={index}
        className={`group relative rounded-2xl border border-gray-200 bg-white 
        px-6 py-6 md:px-7 md:py-6
        flex flex-col items-center text-center
        shadow-[-8px_10px_25px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#C9A227]/70 
        hover:shadow-[-12px_16px_35px_rgba(0,0,0,0.12)]
        ${isArabic ? "text-right" : ""}`}
      >

        {/* IMAGE */}
        <div className="mb-4">
          <img
            src={images[index]}
            alt="option"
            className="w-16 h-16 object-contain mx-auto"
          />
        </div>
            <p
              className={`
                text-[#C9A227]
                mb-2
                ${isArabic 
                  ? "text-[15px] tracking-normal font-semibold" 
                  : "text-[10px] tracking-[0.2em] uppercase font-semibold"}
              `}
            >
              {card.badge}
            </p>

        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-semibold text-[#111] mb-2">
          {card.title}
        </h3>
<p
  className="
    text-gray-500
    text-[13px] md:text-[14px]
    leading-relaxed
    mb-4
    max-w-xs
    text-center
    mx-auto
  "
>
  {card.desc}
</p>

        {/* BUTTON */}
        <Link
          href="/Register"
          className="inline-flex items-center gap-2
          bg-[#C9A227] hover:bg-[#b8961f]
          text-white text-[13px]
          px-5 py-2 rounded-full
          transition-all duration-300"
        >
          {card.button}
          <ArrowRight className={`${isArabic ? "rotate-180" : ""} w-3.5 h-3.5`} />
        </Link>

      </div>
    );
  })}

</div>
    </section>
  );
};

export default RegisterCards;