'use client';

import { Inter, Cairo } from "next/font/google";
import TeamCard from "./TeamCard";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function TeamSection() {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

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

  const team = t("team.members", { returnObjects: true }) as any[];

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className={`relative py-20 ${isArabic ? cairo.className : inter.className} bg-[#f8f8f6]`}
      style={{
        backgroundImage: "url('/images/blogimage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/60 md:bg-white/40 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* HEADER */}
        <div className="max-w-[700px] mx-auto mb-16 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#181817]">
            {t("team.title")}
          </h2>

          <div className="w-20 h-[3px] bg-[#FFC400] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 leading-relaxed">
            {t("team.desc")}
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="flex justify-center hover:scale-[1.04] transition">
                <TeamCard {...member} isArabic={isArabic} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}