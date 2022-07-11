import React from 'react';

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

// @see https://nextjs.org/docs/advanced-features/error-handling
// @see https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo | null) {
    this.setState({
      error,
      errorInfo,
    });
    console.error({ error, errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state as ErrorBoundaryState;
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Return children components in case of no error
    const { children } = this.props as any;
    return children;
  }
}

export default ErrorBoundary;
