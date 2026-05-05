"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Roboto, Cairo } from "next/font/google";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

/* POSTS AVEC TRADUCTION */
const usePosts = (t: any) => [
  {
    id: "perfume-expo-istanbul-2026",
    date: "23",
    month: t("blog.month1"),
    title: t("blog.title1"),
    image: "/images/Blog/blog.jpg",
  },
  {
    id: "fragrance-experience-global",
    date: "25",
    month: t("blog.month2"),
    title: t("blog.title2"),
    image: "/images/wow.webp",
  },
  {
    id: "fragrance-industry-growth",
    date: "29",
    month: t("blog.month3"),
    title: t("blog.title3"),
    image: "/images/Blog/blog1.jpg",
  },
];

/* ITEM */
const PostItem = ({ post, isArabic }: any) => (
  <Link href={`/blog/${post.id}`} className="block">
    <div
      className={`flex items-center gap-4 cursor-pointer group py-4 ${
        isArabic ? "text-right" : ""
      }`}
    >

      {/* IMAGE */}
      <div className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={96}
          height={64}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center">

        <h3 className="text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-[#C9A227] transition-colors">
          {post.title}
        </h3>

     {/* DATE */}
<div
  className={`flex items-center gap-1 mt-1 ${
    isArabic
      ? "flex-row-reverse justify-end text-[12px]"
      : "text-sm"
  } text-gray-500`}
>
  <Calendar
    size={isArabic ? 13 : 15}
    className="text-[#C9A227]"
  />
  <span>
    {post.date} {post.month}
  </span>
</div>

      </div>

    </div>
  </Link>
);

/* MAIN */
export default function RecentPostsComponent() {
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

  const posts = usePosts(t);

  return (
    <div
      className={`${
        isArabic ? cairo.className : roboto.className
      } w-full max-w-full sm:max-w-sm bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm`}
    >
      {/* TITLE */}
      <h2
        className={`text-xl font-bold text-gray-900 mb-5 ${
          isArabic ? "text-right" : ""
        }`}
      >
        {t("blog.recentPosts")}
      </h2>

      {/* LIST */}
      <div className="divide-y divide-gray-100">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} isArabic={isArabic} />
        ))}
      </div>
    </div>
  );
}