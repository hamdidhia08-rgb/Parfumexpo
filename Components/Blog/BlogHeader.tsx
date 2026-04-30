"use client";

import React from "react";
import { User, Calendar, Clock } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const ArticleMetaItem = ({ icon, text }: any) => (
  <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
    <div className="text-[#C9A227] flex items-center justify-center h-5 w-5">
      {icon}
    </div>
    <span className="text-gray-600 font-normal">{text}</span>
  </div>
);

/* 👉 UTILISE post.title + post.desc */
export default function BlogHeader({ post }: { post: any }) {
  return (
    <div className={`${roboto.className} flex flex-col gap-3 py-5`}>

      {/* META */}
      <div className="flex flex-wrap items-center gap-4">
        <ArticleMetaItem
          icon={<User size={18} />}
          text="By Khaled Zia"
        />
        <ArticleMetaItem
          icon={<Calendar size={18} />}
          text="April 2026"
        />
        <ArticleMetaItem
          icon={<Clock size={18} />}
          text="3 Mins Read"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
        {post.title}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mt-2 leading-relaxed text-base">
        {post.desc}
      </p>

    </div>
  );
}