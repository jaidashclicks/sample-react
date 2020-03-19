# Adding multiple language support (i18n) to react

This guide will show how to add i18n and start using it in create react app

# Install packages

```bash
yarn add i18next
yarn add react-i18next
yarn add i18next-browser-languagedetector
yarn add  i18next-xhr-backend
```

# set up i18n

1. create a file i18n in root of your directory and paste following

```js
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to the react-i18next components.
    // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            wait: true,
        },
    });

export default i18n;
```

2.  go to index.js and import this i18n file

```js
//initialize i18n
import './i18n';
```

Add a Loading suspense fallback

```js
//index.js
import React, { Suspense } from 'react';
ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
    </Suspense>,

    document.getElementById('root'),
);
```

# set locales

-   Go to public directory and create a new directory locales and create language code directry
-   For example for English create a directory en and in en create a file translation.
-   for every language create a iso language code directory and create translation.json and add translation.json
-   keep key id same and then add respective language translation

```json
{
    "app_name": "My APP"
}
```

# Uses using hooks

to show translated text use

```js
import React, { Suspense } from 'react';
const { t, i18n } = useTranslation();

t('app_name');
```
