import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/signup',
        element: <Signup/>
      },
      {
        path:'/login',
        element: <Login/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
