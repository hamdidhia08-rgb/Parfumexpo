'use client';

import Image from 'next/image';
import { Inter_Tight, Inter, Cairo } from 'next/font/google';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Check, Sparkles, Building2, Users, CalendarCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700"] });
const cairo = Cairo({ subsets: ["arabic"], weight: ["400","500","600","700"] });
const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400','600','700','800'] });

export default function HeroSection() {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 450, easing: "ease-out-cubic", once: true });

    const updateLang = () => {
      const isAr = i18n.language === "ar";
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  const ticks = t("hero2.ticks", { returnObjects: true }) as string[];
  const features = t("hero2.features", { returnObjects: true }) as any[];

  return (
<section
  dir={isArabic ? "rtl" : "ltr"}
  className={`${isArabic ? cairo.className : inter.className} w-full bg-white`}
>

  {/* SECTION 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 border-t border-gray-200/60 min-h-[600px]">

    {/* TEXT */}
    <div className={`flex items-center px-6 md:px-20 py-16 ${isArabic ? "text-right" : ""}`}>
      <div className="max-w-xl">

        {/* LABEL */}
        <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
          {t("hero2.label")}
        </span>

   <h1
  className={`${
    isArabic ? cairo.className : interTight.className
  } mt-6 ${
    isArabic
      ? "text-3xl md:text-5xl"
      : "text-4xl md:text-6xl"
  } font-bold leading-[1.05] text-[#C9A227]`}
>
  {t("hero2.title1")}
</h1>

        {/* DESC */}
        <p
          className={`mt-6 text-black text-base leading-relaxed max-w-2xl ${
            isArabic ? "font-normal" : "font-light"
          }`}
        >
          {t("hero2.desc1")}
        </p>

        {/* ORGANIZER */}
        <p className="mt-4 text-black/70 text-sm leading-relaxed max-w-2xl">
          {t("hero2.organizer")}{" "}
          <span className="font-semibold text-black">{t("hero2.company")}</span>{" "}
          {t("hero2.by")}{" "}
          <span className="font-semibold text-black">{t("hero2.person")}</span>
        </p>

        {/* TICKS */}
       <div className="mt-6 space-y-3">
  {ticks.map((item, i) => (
    <div
      key={i}
      className={`flex items-center gap-3 ${
        isArabic ? "" : ""
      }`}
    >
      {/* ICON */}
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C9A227]/10 shrink-0">
        <Check size={16} className="text-[#C9A227]" />
      </div>

      {/* TEXT */}
      <span className={`text-black text-sm ${isArabic ? "text-right" : ""}`}>
        {item}
      </span>
    </div>
  ))}
</div>

      </div>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-[350px] md:h-auto">
      <Image src="/images/about33.jpg" alt="hero" fill className="object-cover" />
    </div>
  </div>

  {/* SECTION 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 border-b border-gray-200/60 min-h-[600px]">

    {/* IMAGE */}
    <div className="relative w-full h-[350px] md:h-auto md:order-1 order-2">
      <Image src="/images/wow.webp" alt="hotel" fill className="object-cover" />
    </div>

    {/* TEXT */}
    <div
      className={`flex items-center px-6 md:px-20 py-16 md:order-2 order-1 ${
        isArabic ? "text-right" : ""
      }`}
    >
      <div className="max-w-xl">

        {/* LOCATION */}
        <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
          {t("hero2.location")}
        </span>

        {/* TITLE */}
        <h1 className={`${ isArabic ? cairo.className : interTight.className
          } mt-6 ${
            isArabic
              ? "text-3xl md:text-5xl"
              : "text-4xl md:text-6xl"
          } font-bold leading-[1.05] text-[#C9A227]`}
        >
          {t("hero2.title1")}
        </h1>

        {/* DESC */}
        <p
          className={`mt-6 text-black text-base leading-relaxed ${
            isArabic ? "font-normal" : "font-light"
          }`}
        >
          {t("hero2.desc2")}
        </p>

        {/* FEATURES */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const icons = [Sparkles, Building2, Users, CalendarCheck2];
            const Icon = icons[i];

            return (
          <div
                key={i}
                className={`flex items-start gap-2 ${
                  isArabic ? "text-right" : ""
                }`}>
                <div className="shrink-0">
                  <Icon className="w-7 h-7 text-[#C9A227]" />
                </div>

                <div className={`${isArabic ? "text-right" : ""}`}>
                  <h3 className="text-[15px] font-semibold text-black leading-tight">
                    {item.title}
                  </h3>

                  {/* 🔥 ESPACE AJOUTÉ ICI */}
                  <p className="mt-1 text-[13px] text-black/60 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  </div>

</section>
  );
}