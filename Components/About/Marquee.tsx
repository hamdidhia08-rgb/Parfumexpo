'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n/i18next';
import { Inter, Cairo } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'] });

export default function Marquee() {
  const { t } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    const updateLang = () => {
      setIsArabic(i18n.language === 'ar');
    };

    updateLang();
    i18n.on('languageChanged', updateLang);
    return () => i18n.off('languageChanged', updateLang);
  }, []);

  const content = (
    <div
      className={`flex items-center ${
        isArabic ? 'gap-5 sm:gap-8' : 'gap-6 sm:gap-10'
      } text-black ${
        isArabic ? 'font-bold' : 'font-extrabold'
      } text-sm sm:text-base md:text-xl tracking-wide px-4 sm:px-5`}
    >
      <span>{t('marquee.title')}</span>
      <span>✱</span>
      <span>{t('marquee.exp')}</span>
      <span>✱</span>
      <span>{t('marquee.perfumers')}</span>
      <span>✱</span>
      <span>{t('marquee.collection')}</span>
    </div>
  );

  return (
    <div
      className={`${isArabic ? cairo.className : inter.className} w-full overflow-hidden bg-[#FFC400] py-2 sm:py-3`}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {content}
        {content}
      </div>
    </div>
  );
}