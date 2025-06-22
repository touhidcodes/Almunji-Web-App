import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Library from "../Pages/Library/Library/Library";
import Dictionary from "../Pages/Dictionary/Dictionary/Dictionary";
import Category from "../Pages/Category/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/dictionary",
        element: <Dictionary />,
      },
      {
        path: "/category",
        element: <Category />,
      },
    ],
  },
]);

export default router;
