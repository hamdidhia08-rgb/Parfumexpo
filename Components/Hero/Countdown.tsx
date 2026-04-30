"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const Countdown = () => {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // RTL detect
  useEffect(() => {
    const updateLang = () => {
      setIsArabic(i18n.language === "ar");
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-07-08T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    { label: t("countdown.days"), value: timeLeft.days },
    { label: t("countdown.hours"), value: timeLeft.hours },
    { label: t("countdown.minutes"), value: timeLeft.minutes },
    { label: t("countdown.seconds"), value: timeLeft.seconds },
  ];

  return (
    <div
      className={`w-full max-w-4xl mx-auto ${
        isArabic ? "mt-0 -translate-y-2 md:-translate-y-4" : "mt-4 md:mt-0"
      }`}
    >
      {/* TEXT TOP */}
      <div className="flex items-center justify-center gap-5 mb-5 md:mb-10">
        <div className="h-px w-10 md:w-20 bg-white/30"></div>

        <span
          className={`text-[10px] md:text-[12px] font-medium uppercase tracking-[0.3em] text-white/70 text-center leading-snug ${
            isArabic ? "tracking-normal leading-[1.8]" : ""
          }`}
        >
          {t("countdown.top")}
        </span>

        <div className="h-px w-10 md:w-20 bg-white/30"></div>
      </div>

      {/* BOXES */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl md:rounded-2xl py-4 md:py-8 px-1 md:px-2 backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-20 blur-2xl"></div>

            <div className="relative z-10 text-center">
              <div className="text-xl md:text-4xl font-[800] mb-1 tracking-tighter text-white">
                {String(item.value).padStart(2, "0")}
              </div>

              <div
                className={`text-white text-[10px] md:text-[15px] leading-tight ${
                  isArabic ? "font-semibold" : "font-medium"
                }`}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;