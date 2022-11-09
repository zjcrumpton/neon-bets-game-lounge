import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LandingPage, Lounge } from './screens/index';
import './index.css'
import { LANDING_PAGE, LOUNGE, ROOT } from './constants/endpoints';

const TEST_URL = "http://localhost:5000";
const SERVER_URL = "";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Navigate to={LANDING_PAGE} />
  },
  {
    path: LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: LOUNGE,
    element: <Lounge />
  },
]);

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
