import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'en', 'ua', 'de'],
    debug: false,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;
