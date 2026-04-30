'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n/i18next';
import React, { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {

useEffect(() => {
  const setDirection = () => {
    const lang = i18n.language || 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  setDirection();
  i18n.on('languageChanged', setDirection);

  return () => i18n.off('languageChanged', setDirection);
}, []);

return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}