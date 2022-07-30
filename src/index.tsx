import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createContext } from 'react'
export const LogContext = createContext<string | undefined>('Hello from')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <LogContext.Provider value={'Hello from'}>
    <App />
  </LogContext.Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
