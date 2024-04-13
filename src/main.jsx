import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalcontextProvider, { Globalcontext } from './context/Globalcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalcontextProvider>
      <App />
    </GlobalcontextProvider>
  </React.StrictMode>,
)
