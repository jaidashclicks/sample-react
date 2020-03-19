import React, { useState, useEffect } from 'react';
import Master from './common/layout/Master';

import Loading from './common/loader/CircularProgress';
function App() {
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        // set timeout and setloading false
        setTimeout(() => setLoading(0), 2000);
    });
    return (
        <React.Fragment>
            {loading ? (
                <Loading color="primary" variant="determinate" />
            ) : (
                <Master />
            )}
        </React.Fragment>
    );
}

export default App;
