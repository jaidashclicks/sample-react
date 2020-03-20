import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, errorInfo: info });
        // console.log(this.state.hasError, this.state.errorInfo);
    }

    render() {
        // render error
        if (this.state.hasError) {
            return <h1> Something Went wrong</h1>;
        }
        // render childeren
        return this.props.children;
    }
}

export default ErrorBoundary;
