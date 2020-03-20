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
