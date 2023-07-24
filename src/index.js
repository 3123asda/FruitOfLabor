import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogPage from './pages/BlogPage';
import Third from './pages/Third';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "blog",
        element: <BlogPage/>,
    },
    {
        path: "ThirdPage",
        element: <Third/>,
    },
  ])  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router}/>
);

