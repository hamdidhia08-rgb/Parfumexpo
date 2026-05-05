'use client';

import React, { useState, useEffect } from "react";
import FloatingParticles from "./FloatingParticles";
import { Inter, Cairo } from "next/font/google";
import EventCard from "./EventCard";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
interface EventItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

type ScheduleData = {
  day1: EventItem[];
  day2: EventItem[];
  day3: EventItem[];
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

export default function CoreFeatures() {
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



const data = t("schedule.data", {
  returnObjects: true,
}) as ScheduleData;

const [activeTab, setActiveTab] = useState<keyof ScheduleData>("day1");

const tabs: (keyof ScheduleData)[] = ["day1", "day2", "day3"];

  return (
    <section
      className={`${isArabic ? cairo.className : inter.className} relative pt-20 pb-24 text-white overflow-hidden bg-contain bg-center`}
      style={{ backgroundImage: "url('/images/bg/oi.jpg')" }}
    >
      <FloatingParticles />

      {/* TITLE */}
      <div className="text-center mb-12 px-4">
          <p
          className={`
            text-[#C9A227]
            ${isArabic
              ? "text-sm md:text-base font-semibold tracking-normal"
              : "text-xs md:text-sm tracking-[0.3em] uppercase"}
          `}
        >
          {t("schedule.badge")}
        </p>

        <h2 className="mt-3 text-2xl md:text-5xl font-bold leading-tight">
          {t("schedule.title1")} <br />
          <span className="text-[#C9A227]">
            {t("schedule.title2")}
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* TABS */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex gap-2 md:gap-3 bg-white/10 p-2 rounded-full border border-white/20 backdrop-blur-xl overflow-x-auto">

            {tabs.map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className={`
                  px-5 py-2 text-sm rounded-full font-semibold whitespace-nowrap
                  transition-all duration-300
                  ${activeTab === day
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white"}
                `}
              >
                {t(`schedule.days.${day}`)}
              </button>
            ))}

          </div>
        </div>

        {/* CARDS */}
        <div className="space-y-5">
     {data?.[activeTab as keyof ScheduleData]?.map((event) => (
  <EventCard key={event.id} event={event} />
))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center mt-16 text-white/70 px-4">
        <p className="text-sm">
          {t("schedule.footer")}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-[#C9A227] font-semibold">4.9/5</span>
          <span className="text-[#C9A227]">★★★★★</span>
        </div>
      </div>
    </section>
  );
}