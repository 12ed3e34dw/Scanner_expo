// import i18n from 'i18next';
// import * as Localization from 'i18next';
// import {languages} from "../locales";
// import {initReactI18next} from "react-i18next";
//
//
// const config = {
//     SUPPORT_LANGUAGES: Object.keys(languages),
//     DEFAULT_LANGUAGE_KEY:'en',
//     APP_LANGUAGS:'APP_LANGUAGE',
// }
//
//
// const getDefaultLanguage = () => {
//     const locales = Localization.getLocales();
//     return locales?.[0]?.languageCode || config.DEFAULT_LANGUAGE_KEY;
// }
//
// const initialLanguages = config.SUPPORT_LANGUAGES.includes(getDefaultLanguage()) ? getDefaultLanguage() : config.DEFAULT_LANGUAGE;
// i18next.use(initReactI18next).init({resource: languages,lng:initialLanguages,fallbackLng: config.DEFAULT_LANGUAGE,interpolation:{escapeValue:false}})
//
// export const chaneLanguage = async (lang) =>{
//     try{
//         await i18n.changeLanguage(lang);
//         await AsyncStorage.setItem(config.APP_LANGUAGS,lang);
//         if(__DEV__)
//         {
//             console.log('${lang}');
//         }
//     }
//     catch(error){
//         console.error('Error changing language', error);
//     }
// }


