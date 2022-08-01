import { Component, ComponentClass, ErrorInfo, ReactNode } from 'react'
import { ErrorMessage } from './ErrorMessage'
interface IProps {
  children?: ReactNode
}

interface IState {
  hasError: boolean
}
export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage title="Something went wrong" />
    }

    return this.props.children
  }
}
