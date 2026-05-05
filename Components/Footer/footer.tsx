'use client';

import { Inter, Cairo } from "next/font/google";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
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

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? cairo.className : inter.className} relative bg-[#121211] text-white px-6 md:px-16 py-14 overflow-hidden`}
    >

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image
          src="/images/patern.webp"
          alt="background pattern"
          fill
          className="object-center"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO */}
        <div className={`${isArabic ? "text-right" : ""}`}>
          <Link href="/" className={`flex items-center gap-3 group mb-4 ${isArabic ? "" : ""}`}>
            
            <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/20">
              <Image src="/images/icon.png" alt="Logo" width={35} height={35} />
            </div>

            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#C9A227]">
              {t('brand.name')}<span className="text-[#C9A227]">.</span>
            </span>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed">
            {t("footer.desc")}
          </p>

          {/* SOCIAL */}
          <div className={`flex gap-4 mt-6 ${isArabic ? "" : ""}`}>
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C9A227] hover:text-black transition duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>


  {/* 🔥 WRAPPER MOBILE */}
  <div className="grid grid-cols-2 gap-6 md:contents">

    {/* NAVIGATION */}
    <div className={`${isArabic ? "text-right" : ""}`}>
      <h2 className="text-lg font-semibold mb-4">{t("footer.nav")}</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white transition">{t("footer.home")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.register")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.about")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.contact")}</a></li>
      </ul>
    </div>

    {/* SUPPORT */}
    <div className={`${isArabic ? "text-right" : ""}`}>
      <h2 className="text-lg font-semibold mb-4">{t("footer.support")}</h2>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#" className="hover:text-white transition">{t("footer.faq")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.shipping")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.policy")}</a></li>
        <li><a href="#" className="hover:text-white transition">{t("footer.terms")}</a></li>
      </ul>
    </div>

  </div>

        {/* NEWSLETTER */}
        <div className={`${isArabic ? "text-right" : ""}`}>
          <h2 className="text-lg font-semibold mb-4">{t("footer.newsletter")}</h2>

          <p className="text-gray-400 text-sm mb-4">
            {t("footer.newsDesc")}
          </p>

          <div className={`flex items-center bg-white rounded-lg overflow-hidden ${isArabic ? "flex-row-reverse" : ""}`}>
            <input
              type="email"
              placeholder={t("footer.placeholder")}
              className="w-full px-4 py-2 text-black outline-none text-sm"
            />
            <button className="bg-[#C9A227] text-black px-4 py-2 font-semibold hover:bg-yellow-400 transition">
              {t("footer.btn")}
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
        {t("footer.copy", { year: new Date().getFullYear() })}
      </div>

    </footer>
  );
}