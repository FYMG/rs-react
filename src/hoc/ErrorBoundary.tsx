import { Component, ReactNode } from 'react';

export interface IErrorBoundaryProperties {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProperties, IErrorBoundaryState> {
  constructor(properties: IErrorBoundaryProperties) {
    super(properties);
    this.state = { hasError: false };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log('Catched error:', error, errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    console.log('error', error);

    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center">
          <h1>Something went wrong.</h1>
          <button
            className="underline"
            type="button"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
