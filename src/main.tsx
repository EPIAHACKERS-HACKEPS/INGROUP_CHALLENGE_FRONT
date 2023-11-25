import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Components'

const root = document.getElementById('root')

if (root != null) {
  ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  )
} else {
  throw new Error('No root element found')
}
