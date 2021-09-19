import i18n from 'i18next'
import i18nextReactNative from 'i18next-react-native-language-detector'
import moment from 'moment'
import 'moment/locale/en-gb'
import 'moment/locale/th'
import {initReactI18next} from 'react-i18next'
import {Platform} from 'react-native'
import {getLanguageCode} from '../utils/multiLanguage'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (language: string) => void) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
}

const resources = {
  en: {
    translation: require('../translations/en.json'),
  },
  th: {
    translation: require('../translations/th.json'),
  },
}

if (Platform.OS === 'ios') {
  i18n.language = 'en'
}

i18n
  .use(i18nextReactNative)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: ':',
  })
  .then(() => {
    moment.locale(getLanguageCode(i18n.language))
  })

i18n.on('languageChanged', lng => {
  moment.locale(getLanguageCode(lng))
})

export default i18n
