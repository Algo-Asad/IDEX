import i18n from 'i18next';
import en from './default.json';
import lorem from './default.lorem.json';
import React from 'react';


const options = {
    interpolation: {
        escapeValue: false,
    },
    debug: true,
    resources: {
        lorem: {
            common: lorem,
        },
        en: {
            common: en,
        },
    },

    fallbackLng: 'en',

    ns: ['common'],

    defaultNS: 'common',

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    },
};

i18n.init(options)

export default i18n;
