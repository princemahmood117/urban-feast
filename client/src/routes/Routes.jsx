import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Reviews from "../Pages/Reviews";
import Menu from "../Pages/Menu";


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
        {
            path: '/menu',
            element : <Menu></Menu>
        },
      ]
    },
  ]);