import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useTranslation } from 'react-i18next';
import SnackBar from '../../common/snackbar/SnackBar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Appcontext from '../../context/AppContext';

console.log();
function Master() {
    const { t } = useTranslation();

    // const context = useContext(Appcontext);
    // console.log('context', context);
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
