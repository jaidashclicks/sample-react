import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import LanguageMenu from './LanguageMenu';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        width: '100%',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {t('app_name')}
                    </Typography>
                    <LanguageMenu />
                    <Button color="inherit"> {t('login')}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
