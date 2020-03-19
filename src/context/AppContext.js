import React from 'react';
import PropTypes from 'prop-types';

const context = {
    loading: true,
    isAuthenticated: false,
    nightMode: false,
    language: 'en',
};
context.PropTypes = {
    loading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    nightMode: PropTypes.bool,
    language: PropTypes.string,
};

const AppContext = React.createContext(context);

export default AppContext;
