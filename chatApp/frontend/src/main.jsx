import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home/>
      }
    ]
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>,
)
