'use client'

import Image from "next/image";
import { User, Tag, MessageCircle } from "lucide-react";
import { Inter, Cairo } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

const inter = Inter({ subsets: ["latin"] });

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function BlogCards() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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

  const posts = [
    {
      id: "perfume-expo-istanbul-2026",
      date: "23",
      month: t("blog.month1"),
      author: t("blog.author1"),
      category: t("blog.category1"),
      title: t("blog.title1"),
      desc: t("blog.desc1"),
      image: "/images/Blog/blog.jpg",
    },
    {
      id: "fragrance-experience-global",
      date: "25",
      month: t("blog.month2"),
      author: t("blog.author2"),
      category: t("blog.category2"),
      title: t("blog.title2"),
      desc: t("blog.desc2"),
      image: "/images/wow.webp",
    },
    {
      id: "fragrance-industry-growth",
      date: "29",
      month: t("blog.month3"),
      author: t("blog.author3"),
      category: t("blog.category3"),
      title: t("blog.title3"),
      desc: t("blog.desc3"),
      image: "/images/Blog/blog1.jpg",
    },
  ];

  return (
    <section className={`py-16 bg-gray-50 ${isArabic ? cairo.className : inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                <div className="w-full h-[220px] bg-gray-200" />
                <div className="pt-10 px-6 pb-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))
          : posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">

                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

                  {/* IMAGE */}
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-[220px] object-cover"
                    />

                    {/* DATE */}
                    <div className="absolute bottom-[-20px] left-6 flex shadow-md">
                      <div className="bg-[#C9A227] text-white px-4 py-2 font-bold text-lg">
                        {post.date}
                      </div>
                      <div className="bg-[#1f2937] text-white px-4 py-2 text-sm font-bold">
                        {post.month}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="pt-10 px-6 pb-6">

                    {/* META */}
                    <div className={`flex items-center gap-4 text-gray-500 text-sm mb-4 ${
                      isArabic ? "flex-row-reverse text-right justify-end" : ""
                    }`}>

                      <div className={`flex items-center gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                        <User size={16} className="text-[#C9A227]" />
                        <span>{post.author}</span>
                      </div>

                      <div className={`flex items-center gap-1 ${isArabic ? "flex-row-reverse" : ""}`}>
                        <Tag size={16} className="text-[#C9A227]" />
                        <span>{post.category}</span>
                      </div>

                    </div>

                    {/* TITLE */}
                    <h3 className={`font-semibold text-lg mb-3 leading-snug hover:text-[#C9A227] transition ${
                      isArabic ? "text-right" : ""
                    }`}>
                      {post.title}
                    </h3>

                    {/* DESC → 2 lignes MAX */}
                    <p
                      className={`text-gray-600 text-sm mb-5 ${
                        isArabic ? "text-right" : ""
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.desc}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between text-sm">

                      {/* READ MORE */}
                      <div className={`group flex items-center gap-2 text-[#C9A227] font-medium ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}>
                        <span className="relative">
                          {t("blog.readMore")}
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A227] transition-all group-hover:w-full"></span>
                        </span>

                        <span className={`transition ${
                          isArabic
                            ? "group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}>
                          {isArabic ? "←" : "→"}
                        </span>
                      </div>

                      {/* COMMENTS */}
                      <div className={`flex items-center gap-1 text-gray-400 ${
                        isArabic ? "flex-row-reverse" : ""
                      }`}>
                        <span>{t("blog.comments")}</span>
                        <MessageCircle size={16} className="text-[#C9A227]" />
                      </div>

                    </div>

                  </div>

                </div>

              </Link>
            ))}

      </div>
    </section>
  );
}