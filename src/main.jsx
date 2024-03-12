import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Index from './pages/Index.jsx';
import CreateNote from './pages/CreateNote.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      element: <Index />
    },{
      path: '/create',
      element: <CreateNote />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
