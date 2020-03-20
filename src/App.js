import React, { useState, useEffect } from 'react';
import Master from './common/layout/Master';
import Loading from './common/loader/CircularProgress';
import AppContext, { context } from './context/AppContext';
function App() {
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        // set timeout and setloading false
        setTimeout(() => setLoading(0), 2000);
    });
    return (
        <React.Fragment>
            <AppContext.Provider value={context}>
                {loading ? (
                    <Loading color="primary" variant="determinate" />
                ) : (
                    <Master />
                )}
            </AppContext.Provider>
        </React.Fragment>
    );
}

export default App;
