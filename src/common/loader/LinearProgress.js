import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';

// for Material UI LinearProgressAPI visit https://material-ui.com/api/linear-progress/#linearprogress-api

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Linear(props) {
    const classes = useStyles();
    const { color, variant } = props;

    return (
        <div className={classes.root}>
            <LinearProgress color={color} variant={variant} />
        </div>
    );
}
Linear.prototype = {
    color: PropTypes.string,
    variant: PropTypes.string,
    value: PropTypes.number,
    valeBuffer: PropTypes.number,
};
