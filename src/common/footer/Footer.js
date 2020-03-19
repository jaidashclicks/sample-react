import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginLeft: 600,
    },
});

export default function Footer() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label={t('list')} icon={<ListIcon />} />
            <BottomNavigationAction label={t('add')} icon={<AddIcon />} />
        </BottomNavigation>
    );
}
