import React from "react";

import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="ErrorBoundary">
          <h2 className="header">Something went wrong - Please refresh</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
