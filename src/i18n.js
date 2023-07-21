import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enResource from './countries/en/translation.json';
import zhResource from './countries/zh/translation.json';
import jaResource from './countries/ja/translation.json';
import inResource from './countries/in/translation.json';
import thResource from './countries/th/translation.json';
import msResource from './countries/ms/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'zh', 'ja', 'in_ID', 'th', 'ms'],
        resources: {
            en: { translation: enResource },
            zh: { translation: zhResource },
            ja: { translation: jaResource },
            in_ID: { translation: inResource },
            th: { translation: thResource },
            ms: { translation: msResource },
        },
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;