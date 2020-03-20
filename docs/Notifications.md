# Notifications snackbar

I am using [Notistack](https://iamhosseindhv.com/notistack/) for showing notifications

## Install notistack

```bash
yarn add notistack
```

## Setup

Now create a file Snackbar.js and put following content

```js
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

// for notistack api  information see https://iamhosseindhv.com/notistack/api
function SnackBar(props) {
    const [isShown, setShown] = useState(0);
    const { enqueueSnackbar } = useSnackbar();
    const { message, variant, vertical, horizontal } = props;

    useEffect(() => {
        const showSnackBar = (message, variant, vertical, horizontal) => {
            // variant could be success, error, warning, info, or default
            enqueueSnackbar(message, {
                variant: variant,
                preventDuplicate: true,
                autoHideDuration: 3000,
                anchorOrigin: {
                    vertical: vertical,
                    horizontal: horizontal,
                },
            });
        };
        // Show Notification if not shown
        if (!isShown) {
            showSnackBar(message, variant, vertical, horizontal);
            setShown(1);
        }
    }, [
        isShown,
        setShown,
        message,
        variant,
        enqueueSnackbar,
        vertical,
        horizontal,
    ]);

    return null;
}

SnackBar.prototype = {
    message: PropTypes.node,
    variant: PropTypes.string,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
};

export default SnackBar;
```

## Uses

Now you can simply just import it and pass variant type , position and message

```js
import SnackBar from '../../common/snackbar/SnackBar';
<SnackBar
    message={t('welcome_message')}
    variant="success"
    vertical="bottom"
    horizontal="right"
/>;
```
