"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Hero() {
  const pathname = usePathname();

  // 🎯 Mapping des routes
  const routes = {
    "/": { title: "Luxury Fragrance Expo Experience", label: "Home" },
    "/about": { title: "About Our Expo Vision", label: "About" },
    "/Register": { title: "Join Our Exclusive Expo", label: "Register" },
    "/blog": { title: "Fragrance Insights & Trends", label: "Blog" },
    "/contact": { title: "Contact Our Team", label: "Contact" },
  };

  // 🔥 DETECT BLOG DETAIL
  const isBlogDetail = pathname.startsWith("/blog/");

  const current =
    isBlogDetail
      ? routes["/blog"] // force blog style
      : routes[pathname as keyof typeof routes] || {
          title: "Welcome",
          label: "",
        };

  return (
    <div className="relative w-full h-[28vh] sm:h-[35vh] md:h-[40vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider_v2-min.png"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 mt-4 md:mt-0">
        <h1
          className={`${inter.className} text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight mb-2 md:mb-3 drop-shadow-lg`}
        >
          {current.title}
        </h1>

        {/* Line */}
        <div className="w-14 md:w-16 h-[3px] bg-yellow-500 mx-auto mb-4 md:mb-5 rounded-full"></div>

        {/* Breadcrumb */}
        <div className="flex justify-center">
          <div className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <p className={`${inter.className} text-[11px] sm:text-sm md:text-base text-white/90 tracking-wide`}>
              Home
              {pathname !== "/" && (
                <>
                  <span className="mx-1 text-white/60">/</span>
                  {current.label}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;