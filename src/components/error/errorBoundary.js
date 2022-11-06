import { Component } from 'react';

const logError = (error, errorInfo) => {
  // You can also log the error to an error reporting service
  console.log({ error, errorInfo });
  console.log('componentDidCatch: ', { error });
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null, hasError: null };
  }

  static getDerivedStateFromError(error) {
    // console.log("getDerivedStateFromError: ", { error });
    // Update state so the next render will show the fallback UI.
    return { error, hasError: true };
  }

  componentDidMount() {
    this.props?.router?.events.on('routeChangeComplete', (url, { shallow }) => {
      // console.log(`App is Changed to ${url}`);
      this.setState({ hasError: false });
    });
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          {error && error?.stack}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
