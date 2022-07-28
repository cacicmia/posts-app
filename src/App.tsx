import React from 'react'
import logo from './logo.svg'
import './App.css'
import { AppHeader } from './shared/AppHeader'
import { AppRouter } from './AppRouter'
import { UsersContext } from './shared/hooks/useUsers'

function App() {
  return (
    <UsersContext>
      <div className="App">
        <AppHeader />

        <AppRouter />
      </div>
    </UsersContext>
  )
}

export default App
