import React, { useContext } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useTranslation } from 'react-i18next';
import SnackBar from '../../common/snackbar/SnackBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appcontext from '../../context/AppContext';

function Master() {
    const { t } = useTranslation();
    const { nightMode, loading, isAuthenticated } = useContext(Appcontext);
    console.log(loading, nightMode, isAuthenticated);
    return (
        <React.Fragment>
            <CssBaseline />

            <Header />
            <SnackBar
                message={t('welcome_message')}
                variant="success"
                vertical="bottom"
                horizontal="right"
            />
            <Footer />
        </React.Fragment>
    );
}

export default Master;
