# Code splitting / Lazy loading

## a normal module import

for a normal import you can use import()

```js
import('./test').then(test => {
    // do something
});
```

## b React.lazy()

```js
import React from 'react';
const Test = React.lazy(() => import('./test'));
```

Note: as React.lazy does not support server side rendering as it uses suspense and suspense is not supported yet on server side we can use a third party package [Loadable Component](https://github.com/gregberge/loadable-components)

## Loadable Component

```bash

yarn add @loadable/component
```

Uses

```js
import Lodable from '@lodable/component';

const Test = Loadable(() => import('./Test'));
```
