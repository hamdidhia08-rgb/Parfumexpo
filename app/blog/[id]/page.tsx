'use client'

import { useParams, notFound } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";

import NavLight from "@/Components/Navbar/NavLight";
import Hero from "@/app/Hero/Hero";
import BlogHeader from "@/Components/Blog/BlogHeader";
import RecentPostsComponent from "@/Components/Blog/RecentPostsComponent";
import GlobalTagsComponent from "@/Components/Blog/GlobalTagsComponent";
import Link from "next/link";
import Footer from "@/Components/Footer/footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsappButtons from "@/Components/WhatsappButtons";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function BlogDetail() {
  const { t } = useTranslation();
  const params = useParams();
  const id = params?.id as string;

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

  const posts = [
    {
      id: "perfume-expo-istanbul-2026",
      title: t("blogDetail.title1"),
      desc: t("blogDetail.desc1"),
      image: "/images/Blog/blog.jpg",
    },
    {
      id: "fragrance-experience-global",
      title: t("blogDetail.title2"),
      desc: t("blogDetail.desc2"),
      image: "/images/wow.webp",
    },
    {
      id: "fragrance-industry-growth",
      title: t("blogDetail.title3"),
      desc: t("blogDetail.desc3"),
      image: "/images/Blog/blog1.jpg",
    },
  ];

  const post = posts.find(p => p.id === id);
  if (!post) return notFound();

  return (
    <div className={isArabic ? cairo.className : inter.className}>
      <NavLight />
      <Hero />

      <div className="max-w-7xl mx-auto mt-15 px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">

        {/* LEFT */}
        <div className="lg:flex-1 lg:max-w-2/3">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[260px] sm:h-[320px] lg:h-[420px] xl:h-[440px] object-cover rounded-xl mb-8"
          />

          <BlogHeader post={post} />

          {/* BACK TOP */}
          <div className="mt-4 mb-2">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-2 text-sm font-medium text-[#C9A227] hover:text-[#b8961f] transition-all ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              {isArabic ? "→" : "←"} {t("blogDetail.back")}
            </Link>
          </div>

          {/* LIST */}
          <div className="mt-10">
            <ul className="space-y-6">

              <li className={`flex items-start gap-4 ${isArabic ? "text-right" : ""}`}>
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227]"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    {t("blogDetail.point1Title")}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t("blogDetail.point1Desc")}
                  </p>
                </div>
              </li>

              <li className={`flex items-start gap-4 ${isArabic ? " text-right" : ""}`}>
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227]"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    {t("blogDetail.point2Title")}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t("blogDetail.point2Desc")}
                  </p>
                </div>
              </li>

              <li className={`flex items-start gap-4 ${isArabic ? " text-right" : ""}`}>
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227]"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    {t("blogDetail.point3Title")}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {t("blogDetail.point3Desc")}
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* EXTRA TEXT */}
          <p className={`text-gray-600 mt-7 leading-relaxed text-base ${isArabic ? "text-right" : ""}`}>
            {t("blogDetail.extra")}
          </p>

          {/* BACK BOTTOM */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C9A227]/30 text-[#C9A227] text-sm font-medium hover:bg-[#C9A227]/10 transition-all ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              {isArabic ? "→" : "←"} {t("blogDetail.return")}
            </Link>
          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:w-[28%] flex justify-center lg:justify-end">
          <div className="w-full max-w-[370px]">
            <RecentPostsComponent />
            <GlobalTagsComponent />
          </div>
        </div>

      </div>

      <Footer />
      <ScrollToTopButton />
      <WhatsappButtons />
    </div>
  );
}