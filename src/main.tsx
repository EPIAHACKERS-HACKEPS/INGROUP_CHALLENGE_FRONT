import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { dashboardCountReducer, dashboardReducer, loginReducer } from './reducers'
import userStoryReducer from './reducers/userStory'

const root = document.getElementById('root')

const store = configureStore({
  reducer: {
    dashboardReducer,
    loginReducer,
    userStoryReducer,
    dashboardCountReducer
  }
})

if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <Router/>
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error('No root element found')
}
