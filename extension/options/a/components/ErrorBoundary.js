import React from '../../meta/pkg/react.js';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    console.error({ error, errorInfo });
  }
  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      return /* @__PURE__ */ React.createElement(
        'div',
        null,
        /* @__PURE__ */ React.createElement(
          'h2',
          null,
          'Something went wrong.'
        ),
        /* @__PURE__ */ React.createElement(
          'details',
          {
            style: { whiteSpace: 'pre-wrap' },
          },
          error && error.toString(),
          /* @__PURE__ */ React.createElement('br', null),
          errorInfo.componentStack
        )
      );
    }
    const { children } = this.props;
    return children;
  }
}
export default ErrorBoundary;
