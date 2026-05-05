'use client';

import Image from "next/image";
import { Phone, Layers, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Inter, Cairo } from "next/font/google";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import { useEffect, useState } from "react";
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

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

    // ✅ AOS SIMPLE & PRO
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });

    return () => i18n.off("languageChanged", updateLang);
  }, []);

  return (
    <section className={`relative overflow-hidden py-24 bg-gradient-to-b from-white to-gray-50 ${isArabic ? cairo.className : inter.className}`}>

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[580px_600px] gap-10 items-center justify-center">
        
        {/* LEFT */}
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
          <div className={`relative rounded-2xl overflow-hidden z-10 ${isArabic ? "-mr-6" : "-ml-6"}`}>
            <Image
              src="/images/bg/expo.png"
              alt="event"
              width={460}
              height={520}
              className="rounded-2xl object-cover h-[540px]"
            />
          </div>

          {/* SECOND IMAGE */}
          <div className={`absolute -bottom-14 w-[70%] border-[6px] border-white rounded-2xl overflow-hidden shadow-xl z-20 ${
            isArabic ? "-left-10" : "-right-10"
          }`}>
            <Image
              src="/images/about/about3.png"
              alt="event"
              width={400}
              height={300}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* CIRCLE */}
          <div className={`absolute top-[42%] -translate-y-1/2 w-[130px] h-[130px] flex items-center justify-center z-30 ${
            isArabic ? "right-[42%] translate-x-1/2" : "left-[42%] -translate-x-1/2"
          }`}>
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
          <div className={`absolute bottom-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-5 rounded-xl flex items-center gap-4 shadow-xl z-30 ${
            isArabic ? "-right-20 text-right" : "-left-20"
          }`}>
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#FFC400]/10 text-[#FFC400]">
              <Users size={22} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold">
                {isArabic ? "10.000+" : "+10,000"}
              </h3>
              <p className="text-sm text-gray-300">
                {isArabic ? "زائر عالمي" : t("about.attendees")}
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div data-aos="fade-up" className="max-w-[620px]">

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#FFC400] rounded-full"></span>
            <p className="text-sm text-gray-500 font-medium">
              {t("about.badge")}
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
            {t("about.title1")}{" "}
            <span className="text-[#E6B800]">
              {t("about.title2")}
            </span>
          </h1>

          <p className="text-base text-gray-600 mb-8">
            {t("about.desc")}
          </p>

          {/* CARDS (NO AOS) */}
          <div className="space-y-4">

            <div className="group flex bg-white border p-4 rounded-xl gap-4 items-center shadow-sm hover:shadow-md transition">

              <div className="bg-[#0f172a] text-white p-2.5 rounded-lg">
                <Layers size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0f172a] text-sm">
                  {t("about.card1.title")}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {t("about.card1.desc")}
                </p>
              </div>
            </div>

            <div className="group flex bg-white border p-4 rounded-xl gap-4 items-center shadow-sm hover:shadow-md transition">

              <div className="bg-[#0f172a] text-white p-2.5 rounded-lg">
                <Users size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-[#0f172a] text-sm">
                  {t("about.card2.title")}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {t("about.card2.desc")}
                </p>
              </div>
            </div>

          </div>

    {/* CTA */}
<div
  className={`
    flex gap-6 mt-10
    flex-col sm:flex-row        // 🔥 mobile vertical
    sm:items-center
    ${isArabic ? "" : ""}
  `}
>

  {/* BUTTON */}
  <Link href="/about">
    <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFC400] to-[#E6B800] hover:scale-105 transition text-black px-7 py-3 rounded-full text-sm font-semibold shadow-lg w-full sm:w-auto">
      {t("about.cta")}
      {isArabic ? <ArrowLeft size={16}/> : <ArrowRight size={16}/>}
    </button>
  </Link>

  {/* PHONE */}
  <div
    className={`
      flex items-center gap-3
      ${isArabic ? " text-right" : ""}
    `}
  >
    <div className="bg-[#FFC400] p-3 rounded-full shadow-md">
      <Phone size={16} className={isArabic ? "scale-x-[-1]" : ""}/>
    </div>

    <div>
      <p className="font-semibold text-sm text-[#0f172a]">
        {t("about.contact")}
      </p>

      {/* 🔥 LTR FIX */}
      <p dir="ltr" className="text-sm text-gray-500">
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