import React, { useContext } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { useTranslation } from 'react-i18next';

import AppContext from '../../context/AppContext';

export default function LanguageMenu() {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { toggleLanguage } = useContext(AppContext);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        // update context
        toggleLanguage(lng);
        // uncomment this if you want to close language slection after user selects a language
        // handleClose();
    };

    return (
        <React.Fragment>
            <Tooltip title={t('choose_language')} onClick={handleClick}>
                <IconButton color="inherit">
                    <LanguageIcon />
                </IconButton>
            </Tooltip>

            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => changeLanguage('en')}>
                    {t('english')}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => changeLanguage('hi')}>
                    {t('hindi')}
                </MenuItem>
                <Divider />
                <Divider />
            </Menu>
        </React.Fragment>
    );
}
