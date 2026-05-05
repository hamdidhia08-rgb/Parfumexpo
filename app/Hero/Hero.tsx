"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter, Cairo } from "next/font/google";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

function Hero() {
  const pathname = usePathname();
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

  // 🎯 ROUTES AVEC TRADUCTION
  const routes = {
    "/": { title: t("hero3.homeTitle"), label: t("hero3.home") },
    "/about": { title: t("hero3.aboutTitle"), label: t("hero3.about") },
    "/Register": { title: t("hero3.registerTitle"), label: t("hero3.register") },
    "/blog": { title: t("hero3.blogTitle"), label: t("hero3.blog") },
    "/contact": { title: t("hero3.contactTitle"), label: t("hero3.contact") },
  };

  // 🔥 BLOG DETAIL
  const isBlogDetail = pathname.startsWith("/blog/");

  const current =
    isBlogDetail
      ? routes["/blog"]
      : routes[pathname as keyof typeof routes] || {
          title: t("hero3.defaultTitle"),
          label: "",
        };

  return (
    <div
      className={`relative w-full h-[28vh] sm:h-[35vh] md:h-[40vh] flex items-center justify-center text-center text-white overflow-hidden ${
        isArabic ? cairo.className : inter.className
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider_v2-min.png"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 mt-4 md:mt-0">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight mb-2 md:mb-3 drop-shadow-lg">
          {current.title}
        </h1>

        {/* Line */}
        <div className="w-14 md:w-16 h-[3px] bg-yellow-500 mx-auto mb-4 md:mb-5 rounded-full"></div>

        {/* Breadcrumb */}
        <div className="flex justify-center">
          <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <p className="text-[11px] sm:text-sm md:text-base text-white/90 tracking-wide">
              
              {t("hero3.home")}

              {pathname !== "/" && (
                <>
                  <span className="mx-1 text-white/60">
                    {isArabic ? "\\" : "/"}
                  </span>
                  {current.label}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;