'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import LanguageDropdown from './LanguageDropdown';
import { Inter, Cairo } from 'next/font/google';
import i18n from '@/lib/i18n/i18next';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileDrawer({ open, setOpen, navLinks }: Props) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isArabic, setIsArabic] = useState(false);

  // 🔹 RTL + font
  useEffect(() => {
    const updateLang = () => {
      const isAr = i18n.language === 'ar';
      setIsArabic(isAr);
      document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    };

    updateLang();
    i18n.on('languageChanged', updateLang);

    return () => {
      i18n.off('languageChanged', updateLang);
    };
  }, []);

  // 🔹 fermer drawer quand langue change
  useEffect(() => {
    const handleLangChange = () => setOpen(false);
    i18n.on('languageChanged', handleLangChange);

    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [setOpen]);

  // 🔹 fermer drawer quand route change
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  // 🔹 fermer drawer si desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setOpen]);

  // 🔹 bloquer scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // 🔹 sécurité : ne jamais afficher en desktop
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return null;
  }

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* DRAWER */}
      <div
        className={`${
          isArabic ? cairo.className : inter.className
        } fixed top-0 ${
          isArabic ? 'left-0' : 'right-0'
        } h-full w-[85%] max-w-sm z-50 transform transition-transform duration-500 ${
          open
            ? 'translate-x-0'
            : isArabic
            ? '-translate-x-full'
            : 'translate-x-full'
        } bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <h2
            className={`text-[16px] text-black tracking-tight ${
              isArabic ? 'font-semibold text-right' : 'font-medium'
            }`}
          >
            {t('nav.menu')}
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-black/5 transition"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-5 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`
                px-4 py-3
                rounded-xl
                bg-black/[0.03]
                text-[15px]
                ${
                  isArabic
                    ? 'font-medium text-right'
                    : 'font-normal'
                }
                text-black/80
                hover:bg-[#C9A227]/10
                hover:text-black
                transition-all
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* LANG */}
          <div className="mt-6 pt-5 border-t border-black/10">
            <LanguageDropdown scrolled={true} />
          </div>

          {/* BUTTON */}
          <button
            className={`
              mt-6
              bg-[#C9A227]
              hover:bg-[#E0B93B]
              px-5 py-2.5
              rounded-full
              text-[14px]
              text-white
              transition
              shadow-md
              active:scale-95
              ${
                isArabic
                  ? 'font-semibold tracking-wide'
                  : 'font-medium'
              }
            `}
          >
            {t('nav.join')}
          </button>
        </div>
      </div>
    </>
  );
}