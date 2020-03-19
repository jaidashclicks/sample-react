# Introduction

This a fully featured sample create react app. Real world application and uses scenario

# Features

-   [Material UI](https://material-ui.com/)
-   Notifications using [Notostack](https://iamhosseindhv.com/notistack/)
-   i18n using [react i18next](https://github.com/i18next/react-i18next) . Just deine your language json messages and start using
-   Firebase Authentications and Functions
-   Firebase functions using express js
-   PropType check using React Proptypes
-   Theming and Night Mode
-   Config variables using environment variables
-   Clean and well maintained code
-   Easy installation guide using [readme.md](readme.md)
-   Extensive uses of [react hooks](https://reactjs.org/docs/hooks-reference.html)

# Installation

```bash
#yarn
yarn  install

#npm

npm install
```

# Serve

```bash
yarn run start
# Or
npm run start
```

# Coding Style Guide

Please keep following code style guide so we maintain a good quality code

1. Please keep tab width 4
2. Use semicolon after the ending of each line of code
3. Use trailing comma
4. Use single quote in string

## How to setup it in vscode

### a

use prettier plugin and set these properties in the setting of prettier plugin and set option save on format.

### b

create a file .prettierc in the source code directory and put following properties

```json
{
    "semi": true,
    "trailingComma": "all",
    "tabWidth": 4,
    "singleQuote": true
}
```

Don't forget to set the format on save in the setting of vscode.

### c

Either install prettier package in the current project or install it globally.

```bash
# in project directory
yarn add prettier --dev
npm install prettier --save-dev

# Globally

yarn add prettier global
npm install prettier --global

```

Now you can format all the source code using

```bash
# if prettier is installed locally
 yarn run prettier --single-quote --trailing-comma=es5  --semi=true  --tab-width=4 --write "src/**/*.js"

 # if installed globally
 prettier --single-quote --trailing-comma=es5  --semi=true  --tab-width=4 --write "src/**/*.js"

```

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
