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
