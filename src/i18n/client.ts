'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18nReady = new Promise<void>((resolve) => {
  if (i18n.isInitialized) {
    resolve();
    return;
  }

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
      {
        fallbackLng: 'en',

        load: 'languageOnly',

        ns: ['translation', 'formTranslation'],
        defaultNS: 'translation',

        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        detection: {
          order: ['localStorage', 'querystring', 'navigator'],
          caches: ['localStorage'],
          lookupQuerystring: 'lng',
        },

        interpolation: {
          escapeValue: false,
        },

        react: {
          useSuspense: false, // 🔴 залишаємо
        },

        initImmediate: false,
      },
      () => {
        resolve();
      }
    );
});

export default i18n;
