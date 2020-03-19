import React from 'react';
import AppBar from './common/header/AppBar';
import Circular from './common/loader/Circular';
import Linear from './common/loader/Linear';
import SnackBar from './common/snackbar/SnackBar';

function App() {
    return (
        <React.Fragment>
            <Circular color="secondary" variant="determinate" />
            <Linear color="primary" variant="query" />
            <AppBar />
            <SnackBar
                message="test message"
                variant="warning"
                vertical="top"
                horizontal="right"
            />
        </React.Fragment>
    );
}

export default App;
