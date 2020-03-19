# Coding Style Guide

Please keep following code style guide so we maintain a good quality code

1. Please keep tab width 4
2. Use semi column after the ending of each line of code
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

Dont forgot to set format on save in setting of vscode.

### c

Either install prettier package in current project or install it globally.

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
