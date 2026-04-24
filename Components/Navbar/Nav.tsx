'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Exhibitors', href: '/exhibitors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // ✅ seuil propre (pas de bug gris)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${inter.className} fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
       scrolled
          ? 'bg-white shadow-sm'
: 'bg-gradient-to-b from-white/[0.18] to-white/[0.08] backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)]'      }`}
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

          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            Parfume Expo
            <span className="text-[#C9A227]">.</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative flex items-center gap-1 text-[15px] font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-black/70 hover:text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}

              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
              )}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4">

          {/* LANGUAGE */}
          <div className="relative group">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-black/10 bg-black/[0.04] text-black/80 hover:text-black'
                  : 'border-white/10 bg-white/5 text-white/80 hover:text-white backdrop-blur-md'
              }`}
            >
              <Globe className="w-4 h-4 text-[#C9A227]" />
              <span className="text-sm font-medium">EN</span>
              <ChevronDown className="w-4 h-4 opacity-60" />
            </button>

            <div className="absolute right-0 mt-3 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/5 flex justify-between">
                English <span className="text-[#C9A227]">EN</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 flex justify-between">
                Français <span>FR</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 flex justify-between">
                العربية <span>AR</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 flex justify-between">
                Türkçe <span>TR</span>
              </button>
            </div>
          </div>

          <button
  className={`bg-[#C9A227] hover:bg-[#E0B93B] px-7 py-2.5 rounded-full font-semibold text-[14px] transition-all shadow-[0_10px_30px_rgba(201,162,39,0.20)] active:scale-95 ${
    scrolled ? 'text-white' : 'text-black'
  }`}
>
  Join the Expo
</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;