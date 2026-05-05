"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Inter, Cairo } from "next/font/google";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n/i18next";
import LanguageLight from "./LanguageLight";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

const NavLight = () => {
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  // ✅ RTL + font sync (same as Navbar)
  useEffect(() => {
    const updateLang = () => {
      const lang = i18n.language;
      const isAr = lang === "ar";

      setIsArabic(isAr);
      document.documentElement.dir = isAr ? "rtl" : "ltr";
    };

    updateLang();
    i18n.on("languageChanged", updateLang);

    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);

  // ✅ LINKS TRADUITS
  const navLinks = [
    { name: t("nav.home"), href: "/", hasDropdown: true },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.Participation"), href: "/Register" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={`${
          isArabic ? cairo.className : inter.className
        } w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]`}
      >
        <nav className="container mx-auto flex items-center justify-between py-5 px-6 md:px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/20">
              <Image
                src="/images/icon.png"
                alt="Logo"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight text-black">
              {t("brand.name")}
              <span className="text-[#C9A227]">.</span>
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-1 text-[15px] font-medium text-black/70 hover:text-black transition-colors duration-300"
              >
                {link.name}

                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-all ${
                      isArabic ? "rotate-180" : ""
                    }`}
                  />
                )}

                {/* underline RTL fix */}
                <span
                  className={`absolute -bottom-2 h-[2px] w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full ${
                    isArabic ? "right-0" : "left-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">

            {/* LANGUAGE */}
            <div className="relative group">
            <LanguageLight isArabic={isArabic} />
            </div>

            {/* BUTTON */}
            <Link href="/Register">
              <button
                className={`bg-[#C9A227] hover:bg-[#E0B93B] px-7 py-2.5 rounded-full text-[14px] transition-all shadow-[0_10px_30px_rgba(201,162,39,0.20)] active:scale-95 ${
                  isArabic ? "font-semibold tracking-wide" : "font-semibold"
                } text-white`}
              >
                {t("nav.join")}
              </button>
            </Link>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-md text-black hover:bg-black/10 transition"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </nav>
      </header>

      {/* DRAWER */}
      <MobileDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default NavLight;