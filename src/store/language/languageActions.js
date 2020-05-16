import actionTypes from './languageTypes'
import i18n from "../../locales/i18n";

const setLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    return {
        type: actionTypes.CHANGE_LANG,
        payload: lang
    }
}

export { setLanguage }
