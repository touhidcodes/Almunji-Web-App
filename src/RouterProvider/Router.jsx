import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Library from "../Pages/Library/Library/Library";
import Dictionary from "../Pages/Dictionary/Dictionary/Dictionary";
import Category from "../Pages/Category/Category/Category";
import BooksReader from "../Components/Library Components/BooksReader/BooksReader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/library",
        element: <Library></Library>,
      },
      {
        path: "/dictionary",
        element: <Dictionary></Dictionary>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/bookreader",
        element: <BooksReader></BooksReader>,
      },
    ],
  },
]);

export default router;
