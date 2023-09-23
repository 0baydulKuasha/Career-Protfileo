import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Component/Root/Root.jsx';
import Home from './assets/Component/Home/Home.jsx';
import Banner from './assets/Component/Banner/Banner.jsx';
import Statistics from './assets/Component/Statisties/Statistics.jsx';
import Appliedjob from './assets/Component/Appliedjobs/Appliedjob.jsx';
import Blogs from './assets/Component/Blogs/Blogs.jsx';
import JobsDitiles from './assets/Component/Home/FeatureJobs/JobsDitiles.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <Appliedjob></Appliedjob>
      },
      {
        path:'/blog',
        element: <Blogs></Blogs>
      }
      ,
      {
        path:'/job/:id',
        element: <JobsDitiles></JobsDitiles>,
        loader: ()=>fetch('../public/jobs.json')
        

      }
    ]

  }
])













ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
