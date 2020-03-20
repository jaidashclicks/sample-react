import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Tooltip from '@material-ui/core/Tooltip';
import AppContext from '../../context/AppContext';
import { useTranslation } from 'react-i18next';

export default function ThemeMenu() {
    const { toggleNightMode } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Tooltip title={t('dark_theme_toggle')} onClick={toggleNightMode}>
                <IconButton color="inherit">
                    <EmojiObjectsIcon />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
}
