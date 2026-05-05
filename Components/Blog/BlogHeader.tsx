"use client";

import React, { useEffect, useState } from "react";
import { User, Calendar, Clock } from "lucide-react";
import { Roboto, Cairo } from "next/font/google";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const ArticleMetaItem = ({ icon, text, isArabic }: any) => (
  <div
    className={`flex items-center gap-1.5 text-sm font-medium text-gray-700 ${
      isArabic ? " text-right" : ""
    }`}
  >
    <div className="text-[#C9A227] flex items-center justify-center h-5 w-5">
      {icon}
    </div>
    <span className="text-gray-600 font-normal">{text}</span>
  </div>
);

export default function BlogHeader({ post }: { post: any }) {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === "ar";
      setIsArabic(isAr);
    };

    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => i18n.off("languageChanged", updateLang);
  }, []);

  return (
    <div
      className={`${
        isArabic ? cairo.className : roboto.className
      } flex flex-col gap-3 py-5`}
    >

      {/* META */}
      <div
        className={`flex flex-wrap items-center gap-4 ${
          isArabic ? "" : ""
        }`}
      >
        <ArticleMetaItem
          icon={<User size={18} />}
          text={t("blogHeader.author")}
          isArabic={isArabic}
        />

        <ArticleMetaItem
          icon={<Calendar size={18} />}
          text={t("blogHeader.date")}
          isArabic={isArabic}
        />

        <ArticleMetaItem
          icon={<Clock size={18} />}
          text={t("blogHeader.readTime")}
          isArabic={isArabic}
        />
      </div>

      {/* TITLE */}
      <h1
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight ${
          isArabic ? "text-right" : ""
        }`}
      >
        {post.title}
      </h1>

      {/* DESCRIPTION */}
      <p
        className={`text-gray-600 mt-2 leading-relaxed text-base ${
          isArabic ? "text-right" : ""
        }`}
      >
        {post.desc}
      </p>

    </div>
  );
}