'use client';

import Image from "next/image";
import { Phone, Layers, Users, ArrowRight } from "lucide-react";
import { Inter, Cairo } from "next/font/google";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export default function About() {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      setIsArabic(i18n.language === "ar");
      document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  return (
    <section className={`py-12 sm:py-16 mt-10 ${isArabic ? cairo.className : inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-0 items-center">

        {/* LEFT SIDE (UNCHANGED) */}
   <div className="relative w-full max-w-[520px] hidden lg:block">

  {/* DOTS */}
  <Image
    src="/images/about/about-us.png"
    alt="dots"
    width={200}
    height={200}
    className={`absolute top-14 z-0 opacity-60 animate-float ${
      isArabic ? "left-0" : "right-0"
    }`}
  />

  {/* MAIN IMAGE */}
  <div
    className={`relative rounded-2xl overflow-hidden z-10 ${
      isArabic ? "-mr-6" : "-ml-6"
    }`}
  >
    <Image
      src="/images/about/testi.png"
      alt="event"
      width={460}
      height={520}
      className="rounded-2xl object-cover h-[540px]"
    />
  </div>

  {/* SECOND IMAGE */}
  <div
    className={`absolute -bottom-14 w-[70%] border-[6px] border-white rounded-2xl overflow-hidden shadow-xl z-20 ${
      isArabic ? "-left-10" : "-right-10"
    }`}
  >
    <Image
      src="/images/about/about3.png"
      alt="event"
      width={400}
      height={300}
      className="object-cover rounded-2xl"
    />
  </div>

  {/* CIRCLE */}
  <div
    className={`absolute top-[42%] -translate-y-1/2 w-[130px] h-[130px] flex items-center justify-center z-30 ${
      isArabic ? "right-[42%] translate-x-1/2" : "left-[42%] -translate-x-1/2"
    }`}
  >
    <div className="absolute inset-0 rounded-full bg-[#FFC400] border-[6px] border-white shadow-lg"></div>
    <div className="absolute w-[75px] h-[75px] bg-white rounded-full"></div>

    <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
        <defs>
          <path id="circlePath" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"/>
        </defs>
        <text fill="black" fontSize="7" letterSpacing="1.2" fontWeight="900">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            • YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
          </textPath>
        </text>
      </svg>
    </div>

    <div className="relative z-10 w-[70px] h-[70px] bg-[#F6F6F7] rounded-full flex items-center justify-center p-2">
      <span className="text-black font-black text-2xl">25+</span>
    </div>
  </div>

  {/* BADGE */}
  <div
    className={`absolute bottom-16 bg-slate-900 text-white px-6 py-6 rounded-xl flex items-center gap-3 shadow-xl ring-2 ring-white z-30 ${
      isArabic ? "-right-20 flex-row-reverse text-right" : "-left-20"
    }`}
  >
    <Layers size={28} className="text-[#FFC400]" />
    <div>
      <h3 className="text-xl font-bold">10 000+</h3>
      <p className="text-sm text-gray-300">{t("about.attendees")}</p>
    </div>
  </div>

</div>

        {/* RIGHT SIDE */}
        <div className="max-w-[800px]">

          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 bg-[#FFC400] rounded-full"></span>
            <p className="text-[#505361] font-medium text-xs sm:text-sm">
              {t("about.badge")}
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            {t("about.title1")}{" "}
            <span className="text-[#C9A227]">{t("about.title2")}</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            {t("about.desc")}
          </p>

          {/* Cards */}
          <div className="space-y-4">

            <div className="bg-gray-100 p-4 sm:p-5 rounded-xl flex gap-4 items-center">
              <div className="bg-[#1E1E22] text-white p-3 rounded-lg">
                <Layers size={20} />
              </div>
              <div className={isArabic ? "text-right" : ""}>
                <h3 className="text-sm sm:text-base font-semibold">{t("about.card1.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("about.card1.desc")}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 sm:p-5 rounded-xl flex gap-4 items-center">
              <div className="bg-[#1E1E22] text-white p-3 rounded-lg">
                <Users size={20} />
              </div>
              <div className={isArabic ? "text-right" : ""}>
                <h3 className="text-sm sm:text-base font-semibold">{t("about.card2.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("about.card2.desc")}
                </p>
              </div>
            </div>

          </div>

          {/* BUTTON + CONTACT (FIX MOBILE) */}
 <div
  className={`flex items-center gap-4 sm:gap-6 mt-6 ${
    isArabic
      ? "justify-start"   // ✅ AR → collé
      : "justify-start" // ✅ EN normal
  }`}
>

  {/* BUTTON */}
  <Link href="/about">
  <button className="flex items-center gap-2 sm:gap-3 bg-[#FFC400] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap">
    
    {/* ICON RTL */}
    {isArabic && <ArrowRight size={16} className="rotate-180" />}

    <span>{t("about.cta")}</span>

    {!isArabic && <ArrowRight size={16} />}
  </button>
  </Link>

  {/* CONTACT */}
  <div className="flex items-center gap-2 sm:gap-3">
    <div className="bg-[#FFC400] text-black p-2.5 sm:p-3 rounded-full">
      <Phone size={16} />
    </div>

    <div className={`${isArabic ? "text-right" : ""}`}>
      <p className="font-semibold text-sm sm:text-base">
        {t("about.contact")}
      </p>
      <p className="text-xs sm:text-sm text-gray-500">
        +90 538 507 39 47
      </p>
    </div>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}