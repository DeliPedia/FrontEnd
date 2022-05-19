import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import locale from "./locales"

i18n.use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources: locale,
        fallbackLng: ["kr", "en"],
        interpolation: {
            escapeValue: false,
        },
        detection: { order: ["path", "navigator"] },
    })

export default i18n
