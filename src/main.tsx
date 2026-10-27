import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

class ErrorBoundary extends React.Component<React.PropsWithChildren, {error: Error | null}> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() { return this.state.error ? <pre style={{padding: 32, color: '#ff3038', whiteSpace: 'pre-wrap'}}>{this.state.error.stack}</pre> : this.props.children }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<ErrorBoundary><App /></ErrorBoundary>)
