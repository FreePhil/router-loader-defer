import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enResource from './countries/en/translation.json';
import znResource from './countries/zn/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'zn',
        fallbackLng: 'en',
        supportedLngs: ['en', 'zn'],
        resources: {
            en: { translation: enResource},
            zn: { translation: znResource}
        },
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;