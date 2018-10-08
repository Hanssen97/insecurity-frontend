import i18n from 'i18next';

// Languages
import no from './locales/no';
import en from './locales/en';

i18n
  .init({
    resources: {
      'nb-NO': {
        translations: no
      },
      'en': {
        translations: en
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;
