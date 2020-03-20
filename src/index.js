import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loading from './common/loader/CircularProgress';
//initilize i18n
import './i18n';
// Error Boundary
import ErrorBoundary from './errorboundary/ErrorBoundary';

ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <ErrorBoundary>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </ErrorBoundary>
    </Suspense>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
