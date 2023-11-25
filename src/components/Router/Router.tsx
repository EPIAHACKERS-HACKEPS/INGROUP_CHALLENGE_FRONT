import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { rawHTML } from '../../assets/XRShop'
import { App } from '../index'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
  },
  {
    path: '/dashboard',
    element: <App />
  }
])

const Router = (): React.ReactElement => {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}

export default Router
