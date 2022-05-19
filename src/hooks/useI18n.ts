import { useTranslation } from "react-i18next"
import { Languages } from "~/i18n/languages"

export default function useI18n(namespace: string) {
    const { t, i18n } = useTranslation([namespace, "common"])

    const changeLanguage = (language: Languages) => {
        i18n.changeLanguage(language)
    }

    const languages = Object.values(Languages)

    return {
        t,
        i18n,
        changeLanguage,
        languages,
    }
}
