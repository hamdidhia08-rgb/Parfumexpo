'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';
import { Inter, Cairo } from 'next/font/google';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n/i18next';
import LanguageDropdown from './LanguageDropdown';
import MobileDrawer from './MobileDrawer';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

const Navbar = () => {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  // RTL + font
  useEffect(() => {
    const updateLang = () => {
      const lang = i18n.language;
      const isAr = lang === 'ar';

      setIsArabic(isAr);
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    };

    updateLang();
    i18n.on('languageChanged', updateLang);

    return () => {
      i18n.off('languageChanged', updateLang);
    };
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/', hasDropdown: true },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.Participation'), href: '/Register' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          isArabic ? cairo.className : inter.className
        } fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-sm'
            : 'bg-gradient-to-b from-white/[0.18] to-white/[0.08] backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)]'
        }`}
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
              {t('brand.name')}
              <span className="text-[#C9A227]">.</span>
            </span>
          </Link>

          {/* MENU DESKTOP */}
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

          {/* RIGHT DESKTOP */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageDropdown scrolled={scrolled} />
             <Link href="/Register">
              <button
                className={`bg-[#C9A227] hover:bg-[#E0B93B] px-7 py-2.5 rounded-full text-[14px] transition-all shadow-[0_10px_30px_rgba(201,162,39,0.20)] active:scale-95 ${
                  scrolled ? 'text-white' : 'text-black'
                } ${
                  isArabic ? 'font-semibold tracking-wide' : 'font-semibold'
                }`}
              >
                {t('nav.join')}
              </button>
              </Link>
          </div>

          {/* HAMBURGER MOBILE */}
          <div className="lg:hidden">
           
            <button
              onClick={() => setDrawerOpen(true)}
              className={`p-2 rounded-md transition ${
                scrolled
                  ? 'text-black hover:bg-black/10'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* DRAWER MOBILE */}
      <MobileDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;