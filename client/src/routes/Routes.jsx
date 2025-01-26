import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reviews from "../Pages/Reviews";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path: '/reviews',
            element : <Reviews></Reviews>
        },
      ]
    },
  ]);