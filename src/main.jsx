import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/Routes';
import AuthProvider from './Provider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto bg-white'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
