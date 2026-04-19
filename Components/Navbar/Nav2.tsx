import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Inter } from 'next/font/google';
import {
  Phone,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";

import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const inter = Inter({ subsets: ['latin'] });

const Navbar2 = () => {
const navLinks = [
  { name: 'Home', href: '/', hasDropdown: false },
  { name: 'About Expo', href: '/about', hasDropdown: false },
  { name: 'Brands', href: '/brands', hasDropdown: true },
  { name: 'Tickets', href: '/tickets', hasDropdown: false },
  { name: 'Gallery', href: '/gallery', hasDropdown: false },
  { name: 'Contact', href: '/contact', hasDropdown: false },
];

  return (
    <div className="top-0 left-0 w-full z-50">


{/* TOP BAR */}
<div
  className={`${interTight.className} w-full bg-[#22201D] text-white h-[39px] hidden md:flex items-center`}
>
  <div className="max-w-[94%] mx-auto w-full flex justify-between items-center text-[13px] font-medium">

    {/* LEFT */}
    <div className="flex items-center gap-5">
{/* SOCIAL ICONS */}
<div className="flex items-center gap-3">

  {/* Facebook */}
  <a href="#" className="text-white hover:text-[#C9A227] transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" className="w-4 h-4">
      <path d="M22 12A10 10 0 1 0 10.44 21.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* Instagram (FIXED) */}
  <a href="#" className="text-white hover:text-[#C9A227] transition-all">
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4">
      
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  </a>

  {/* Twitter */}
  <a href="#" className="text-white hover:text-[#C9A227] transition-all">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2H21l-6.52 7.46L22 22h-6.8l-5.3-6.6L3.8 22H1l7-8.02L2 2h6.9l4.8 6.02L18.244 2z"/>
    </svg>
  </a>

</div>

      {/* PHONE */}
      <div className="flex items-center gap-2 border-l border-white/15 pl-4">
        <span className="text-white/75">Call Us:</span>

        <a
          href="tel:+905537431488"
          className="text-[#C9A227] hover:text-white transition-all"
        >
          +90 553 743 14 88
        </a>
      </div>

    </div>

{/* CENTER */}
<div className="text-center">
  <span className="uppercase tracking-[0.22em] text-[11px] font-semibold text-white">
    Luxury Fragrance Exhibition •{" "}
    <span className="text-[#C9A227]">
      Istanbul 2026
    </span>
  </span>
</div>

    {/* RIGHT */}
    <div className="flex items-center gap-6">

      <div className="flex items-center gap-2 hover:text-[#C9A227] transition-all cursor-pointer">
        <MapPin size={13} className="text-[#ffff]" />
        <span>Find Us</span>
      </div>

      <div className="flex items-center gap-2 hover:text-[#C9A227] transition-all">
        <Mail size={13} className="text-[#ffff]" />

        <a href="mailto:info@ask-istanbul.com">
          info@ask-istanbul.com
        </a>
      </div>

    </div>

  </div>
</div>

  {/* NAVBAR */}
<header className={`${inter.className} w-full bg-white  border-gray-100`}>
  <nav className="max-w-[94%] mx-auto flex items-center justify-between py-4">

    {/* LOGO */}
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="7" y="8" width="10" height="12" rx="2" />
          <line x1="10" y1="4" x2="14" y2="4" />
          <line x1="12" y1="4" x2="12" y2="8" />
          <circle cx="12" cy="2.5" r="1" />
        </svg>
      </div>

      <span className="text-2xl font-bold text-slate-900 tracking-tight">
        Parfume Expo<span className="text-[#C9A227]">.</span>
      </span>
    </Link>

    {/* MENU */}
    <div className="hidden lg:flex items-center gap-10">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="group flex items-center gap-1.5 text-slate-600 hover:text-black transition-all text-[15px] font-medium"
        >
          {link.name}

          {link.hasDropdown && (
            <ChevronDown
              className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
              strokeWidth={2}
            />
          )}
        </Link>
      ))}
    </div>

    {/* RIGHT SIDE */}
    <div className="hidden lg:flex items-center gap-4">
      {/* LANGUAGE SELECTOR */}
      <div className="relative group">
        <button className="flex items-center gap-2 border border-gray-200 hover:border-[#C9A227] px-4 py-2 rounded-full transition-all bg-white hover:shadow-md">

          {/* current flag */}
          <img
            src="/images/Flags/english.png"
            alt="English"
            className="w-4 h-4 rounded-full object-cover"
          />

          <span className="text-[14px] font-medium text-slate-700">EN</span>
          <ChevronDown size={15} className="text-slate-500" />
        </button>

        {/* Dropdown */}
        <div className="absolute right-0 top-12 w-44 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">

          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm">
            <img src="/images/Flags/english.png" className="w-5 h-5 rounded-full object-cover" />
            English
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm">
            <img src="/images/Flags/Flag_of_Turkey.svg.png" className="w-5 h-5 rounded-full object-cover" />
            Türkçe
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm">
            <img src="/images/Flags/Flag_of_France.svg" className="w-5 h-5 rounded-full object-cover" />
            Français
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm">
            <img src="/images/Flags/Flag_of_Saudi_Arabia.svg.webp" className="w-5 h-5 rounded-full object-cover" />
            العربية
          </button>

        </div>
      </div>
      {/* BUTTON */}
      <button className="bg-[#C9A227] hover:bg-[#b9921e] text-white px-7 py-2 rounded-full font-semibold text-[14px] transition-all">
        Join the Expo
      </button>

    </div>

  </nav>
</header>
    </div>
  );
};

export default Navbar2;