import React, { useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppHeader } from './shared/AppHeader'
import { AppRouter } from './AppRouter'
import { UsersContext } from './shared/hooks/useUsers'
import { ErrorBoundary } from './shared/components/ErrorBoundary'
import { LogContext } from '.'

function App() {
  const logMessage = useContext<string | undefined>(LogContext)
  console.log(`${logMessage} ${App.name}`)
  return (
    <ErrorBoundary>
      <UsersContext>
        <div className="App">
          <AppHeader />

          <AppRouter />
        </div>
      </UsersContext>
    </ErrorBoundary>
  )
}
export default App
