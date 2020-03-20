import React from 'react';
import PropTypes from 'prop-types';

export const context = {
    loading: true,
    isAuthenticated: false,
    nightMode: false,
    language: 'en',
    toggleNightMode: null,
    toggleLanguage: null,
};
const AppContext = React.createContext(context);

context.PropTypes = {
    loading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    nightMode: PropTypes.bool,
    language: PropTypes.string,
    toggleNightMode: PropTypes.func,
    toggleLanguage: PropTypes.func,
};
export default AppContext;
