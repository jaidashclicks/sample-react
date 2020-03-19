import React from 'react';

let context = {
    initProp: {
        loading: true,
        isAuthenticated: false,
    },
};

const AppContext = React.createContext(context);

export default AppContext;
