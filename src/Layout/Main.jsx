import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const Main = () => {
  return (
    <div className="max-w-full mx-auto font-roboto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
