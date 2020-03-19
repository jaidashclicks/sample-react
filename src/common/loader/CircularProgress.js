import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

// for Material UI LinearProgressAPI visit https://material-ui.com/api/circular-progress/#circularprogress-api

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 300,
        display: 'flex',
        justifyContent: 'center',
    },
}));

function Circular(props) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const { color, variant } = props;

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress =>
                oldProgress >= 100 ? 0 : oldProgress + 1,
            );
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <CircularProgress
                variant={variant}
                value={progress}
                color={color}
            />
        </div>
    );
}
Circular.prototype = {
    color: PropTypes.string,
    disableShrink: PropTypes.bool,
    size: PropTypes.node,
    thickness: PropTypes.number,
    value: PropTypes.number,
    variant: PropTypes.string,
};

export default Circular;
