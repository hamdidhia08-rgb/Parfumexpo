'use client'

import { Inter, Cairo } from "next/font/google";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function MapSection() {
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
    <section className={`py-10 ${isArabic ? cairo.className : inter.className}`}>
      <div className="max-w-7xl mx-auto px-6">

   {/* TITLE */}
  <div className={`text-center ${isArabic ? "mb-12" : "mb-10"}`}>
    <h2
      className={`
        text-3xl sm:text-4xl font-bold tracking-tight
        ${isArabic ? "leading-[1.6]" : ""}
      `}
    >
      {t("map.title")}
    </h2>

    <p
      className={`
        text-gray-600 text-sm leading-relaxed
        ${isArabic ? "mt-4 leading-[1.8]" : "mt-2"}
      `}
    >
      {t("map.address")}
    </p>
  </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=Yeşilköy, Atatürk Havalimanı Yolu No:15-17-19, 34149 Bakırköy İstanbul&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </div>

      </div>
    </section>
  );
}