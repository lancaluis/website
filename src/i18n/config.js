import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import PT from "./locales/pt.json";
import ES from "./locales/es.json";
import DE from "./locales/de.json";
import EN from "./locales/en.json";

const resources = {
  "pt": {
    translation: PT,
  },
  "es": {
    translation: ES,
  },
  "de": {
    translation: DE,
  },
  "en": {
    translation: EN,
  }
};

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
