import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo)
  }

  render(): ReactNode {
    const {
      state: { hasError },
      props: { children },
    } = this
    if (hasError) {
      return <h1>Something went wrong</h1>
    }

    return children
  }
}

export default ErrorBoundary
