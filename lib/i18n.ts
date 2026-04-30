import i18next, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import statique des JSON
import enCommon from '../public/locales/en/common.json';
import frCommon from '../public/locales/fr/common.json';
import trCommon from '../public/locales/tr/common.json';
import arCommon from '../public/locales/ar/common.json';

export const languages = ['en', 'fr', 'tr', 'ar'] as const;
export const fallbackLng = 'ar';
export const defaultNS = 'common';

// Récupérer la langue depuis localStorage
const storedLng = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null;
const initialLng = storedLng && languages.includes(storedLng as any) ? storedLng : fallbackLng;

// Initialisation i18next côté client
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      lng: initialLng,
      fallbackLng,
      supportedLngs: languages,
      defaultNS,
      resources: {
        en: { common: enCommon },
        fr: { common: frCommon },
        tr: { common: trCommon },
        ar: { common: arCommon },
      },
      react: { useSuspense: false },
    } as InitOptions);
}

export default i18next;