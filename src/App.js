import React, { useState, useEffect } from 'react';
import Master from './common/layout/Master';
import Loading from './common/loader/CircularProgress';
import AppContext, { context } from './context/AppContext';
import { ThemeProvider } from '@material-ui/core/styles';

function App(props) {
    // todo improve context
    const [loading, setLoading] = useState(true); // default loading true
    const [darkMode, setDarkMode] = useState(false); // default darkmode false
    const [language, setLanguage] = useState('en');
    const [authenticated, setauthenticated] = useState(false); // default authenicated false
    const { lightTheme, darkTheme } = props;

    const login = () => {
        // spin loader
        setLoading(true);
        setTimeout(() => {
            // do api call
            setLoading(false);
            setauthenticated(true);
        }, 3000);
    };

    const logout = () => {
        // do cleanup

        setauthenticated(false);
    };

    const toggleNightMode = () => {
        // remove nightmode if already there
        if (localStorage.getItem('nightMode')) {
            // unset dark mode
            setDarkMode(false);
            //remove  context nightMode
            context.nightMode = false;
            // remove from local storage

            localStorage.removeItem('nightMode');
        } else {
            // add in local storage
            localStorage.setItem('nightMode', true);
            // set dark mode
            setDarkMode(true);
            // update context nightMode
            context.nightMode = true;
        }
    };

    const toggleLanguage = lang => {
        context.language = lang;
        setLanguage(lang);
    };

    useEffect(() => {
        // To do improve context

        // Theme set
        if (localStorage.getItem('nightMode')) {
            // set dark mode
            setDarkMode(1);
            // update context nightMode
            context.nightMode = true;
        }

        // set language
        if (localStorage.getItem('i18nextLng')) {
            setLanguage(localStorage.getItem('i18nextLng'));
            // update context nightMode
            context.language = localStorage.getItem('i18nextLng');
        }

        // language set
        context.language = language;

        // update toggleNightMode
        context.toggleNightMode = toggleNightMode;

        // update togglelanguage
        context.toggleLanguage = toggleLanguage;
        //update loading
        context.loading = loading;

        context.login = login;

        context.isAuthenticated = authenticated;

        context.logout = logout;

        // // language update context
        // context.language = localStorage.getItem('i18nextLng');

        // timeout
        setTimeout(() => {
            setLoading(false);
            context.loading = false;
        }, 2000);
    }, [darkMode, setDarkMode, language, loading, authenticated]);
    return (
        <React.Fragment>
            <AppContext.Provider value={context}>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    {loading ? (
                        <Loading color="primary" variant="determinate" />
                    ) : (
                        <Master />
                    )}
                </ThemeProvider>
            </AppContext.Provider>
        </React.Fragment>
    );
}

export default App;
