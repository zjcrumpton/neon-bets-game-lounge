import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css'
import LandingPage from './screens/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
