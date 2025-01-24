import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetevtor from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ja from "./locales/ja.json";

i18n
  .use(LanguageDetevtor)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
  });
