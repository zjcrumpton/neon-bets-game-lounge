import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
