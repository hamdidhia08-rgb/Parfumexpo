'use client'

import { ShoppingBag, FlaskConical, Sparkles, Camera } from "lucide-react";
import { Inter, Cairo } from "next/font/google";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export default function AboutSectionTwo() {
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

  // ✅ EVENTS WITH TRANSLATION
  const events = [
    {
      icon: ShoppingBag,
      title: t("about2.card1.title"),
      desc: t("about2.card1.desc"),
    },
    {
      icon: FlaskConical,
      title: t("about2.card2.title"),
      desc: t("about2.card2.desc"),
    },
    {
      icon: Sparkles,
      title: t("about2.card3.title"),
      desc: t("about2.card3.desc"),
    },
    {
      icon: Camera,
      title: t("about2.card4.title"),
      desc: t("about2.card4.desc"),
    },
  ];

  return (
    <section className={`py-20 bg-white ${isArabic ? cairo.className : inter.className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#C9A227] text-sm font-medium mb-2">
            {t("about2.badge")}
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t("about2.title1")}{" "}
            <span className="text-[#C9A227]">
              {t("about2.title2")}
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            {t("about2.desc")}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {events.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-200 bg-white
                shadow-sm hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300"
              >
                
                {/* ICON */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227] group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C9A227] transition">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}