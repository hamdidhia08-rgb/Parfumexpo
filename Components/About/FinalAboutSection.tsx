'use client'
import Link from 'next/link';
import { Inter, Cairo } from "next/font/google";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export default function FinalAboutSection() {
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
    <section className={`py-17 ${isArabic ? cairo.className : inter.className}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* SMALL TITLE */}
        <p className="text-[#C9A227] text-sm font-medium mb-3 tracking-wide">
          {t("finalAbout.badge")}
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          {t("finalAbout.title1")}{" "}
          <span className="text-[#C9A227]">
            {t("finalAbout.title2")}
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl mx-auto mb-10">
          {t("finalAbout.desc1")}
          <br /><br />
          {t("finalAbout.desc2")}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/Register">
            <button className="group flex items-center gap-3 bg-[#C9A227] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all hover:bg-[#b8961f] shadow-lg shadow-[#C9A227]/20">
              <span>{t("finalAbout.cta")}</span>

              {isArabic ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              )}

            </button>
          </Link>
        </div>

        {/* DECOR LINE */}
        <div className="mt-14 flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"></div>
        </div>

      </div>
    </section>
  );
}