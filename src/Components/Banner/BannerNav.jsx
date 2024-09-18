import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar/SearchBar";

const BannerNav = () => {
  return (
    <div className="bg-custom-image w-full bg-cover bg-center">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </div>
  );
};

export default BannerNav;
