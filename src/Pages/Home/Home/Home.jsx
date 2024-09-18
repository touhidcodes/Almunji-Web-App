import React from "react";
import QuranLayout from "../../../Components/QuranDisplayLayout/QuranLayout";
import LeftNavigation from "../../../Components/QuranDisplayLayout/LeftNavigation/LeftNavigation";
import MainScreen from "../../../Components/QuranDisplayLayout/MainScreen/MainScreen";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <QuranLayout></QuranLayout>
    </div>
  );
};

export default Home;
