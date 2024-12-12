import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import CardDetails from './components/CardDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      loader : () => fetch('../categories.json'),
      children : [
    {
      path : '/',
      element : <CoffeeCard></CoffeeCard>,
      loader : () => fetch ('../cato.json')
    },
    {
      path : '/category/:category',
      element : <CoffeeCard></CoffeeCard>,
      loader : () => fetch ('../cato.json')
    },
  
      ],
      },
      {
        path : 'cards/:id',
        element: <CardDetails></CardDetails>,
        loader : () => fetch('../cato.json')
      },
      {
        path : 'dashboard',
        element: <Dashboard></Dashboard>,
        loader : () => fetch('../cato.json')
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <ToastContainer/>
  </StrictMode>,
)
