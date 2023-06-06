import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalStyle from "./styles/GlobalStyle.jsx"
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from "./pages/Home.jsx"
import PrivatePage from './pages/PrivatePage.jsx'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/private",
        element: <PrivatePage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
