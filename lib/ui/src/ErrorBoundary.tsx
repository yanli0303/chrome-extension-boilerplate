import React from 'react';

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

// @see https://nextjs.org/docs/advanced-features/error-handling
// @see https://reactjs.org/docs/error-boundaries.html
export class ErrorBoundary extends React.Component<{
  logger: { error: (...args: any[]) => void };
  children: React.ReactNode;
}> {
  constructor(props: any) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo | null) {
    this.setState({
      error,
      errorInfo,
    });
    const { logger } = this.props as any;
    if (logger && logger.error) {
      logger.error(error, errorInfo);
    }
  }

  render() {
    const { error, errorInfo } = this.state as ErrorBoundaryState;
    if (errorInfo) {
      return (
        <div
          style={{
            padding: '1rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          {error ? error.toString() : null}
          <br />
          {errorInfo.componentStack}
        </div>
      );
    }

    // Return children components in case of no error
    // eslint-disable-next-line react/prop-types
    const { children } = this.props as any;
    return children;
  }
}
