"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer"; // ⚠️ important

const inter = Inter({ subsets: ["latin"] });

const NavLight = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Participation", href: "/Register" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`${inter.className} w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]`}
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
              Parfum Expo
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
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                )}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">

            {/* LANGUAGE */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/[0.04] text-black/80 hover:text-black transition-all duration-300">
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span className="text-sm font-medium">EN</span>
                <ChevronDown className="w-4 h-4 opacity-60" />
              </button>

            </div>

            {/* BUTTON FIXED */}
            <Link href="/Register">
              <button className="bg-[#C9A227] hover:bg-[#E0B93B] px-7 py-2.5 rounded-full font-semibold text-[14px] text-white transition-all shadow-[0_10px_30px_rgba(201,162,39,0.20)] active:scale-95">
                Join the Expo
              </button>
            </Link>
          </div>

          {/* HAMBURGER MOBILE */}
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