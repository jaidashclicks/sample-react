# React Context

## How to use

1.  Define your default values object. like theme and other default data in a AppContext.js file. I would keep in a context directory
2.  create context using React.createContext(obj)
3.  Now in your app.js (Anywhere high order component) import this context and and pass value in <AppContext.Provider value={context}>
4.  now anywhere you need context import the context file and using usecontext() hook destructure your context object

### Define

```js
// src/context/AppContext.js
import React from 'react';
import PropTypes from 'prop-types';

export const context = {
    loading: true,
    isAuthenticated: false,
    nightMode: false,
    language: 'en',
};
const AppContext = React.createContext(context);

context.PropTypes = {
    loading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    nightMode: PropTypes.bool,
    language: PropTypes.string,
};
export default AppContext;
```

### initialize

```js
// src/App.js
import React, { useState, useEffect } from 'react';
import Master from './common/layout/Master';
import Loading from './common/loader/CircularProgress';
import AppContext, { context } from './context/AppContext';
function App() {
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        // set timeout and setloading false
        setTimeout(() => setLoading(0), 2000);
    });
    return (
        <React.Fragment>
            <AppContext.Provider value={context}>
                {loading ? (
                    <Loading color="primary" variant="determinate" />
                ) : (
                    <Master />
                )}
            </AppContext.Provider>
        </React.Fragment>
    );
}

export default App;
```

### use

```js
import React, { useContext } from 'react';
import Appcontext from '../../context/AppContext';
const { nightMode, loading, isAuthenticated } = useContext(Appcontext);
console.log(loading, nightMode, isAuthenticated);
```
