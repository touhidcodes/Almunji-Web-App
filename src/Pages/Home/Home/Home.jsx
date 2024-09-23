import React from "react";
import QuranLayout from "../../../Components/QuranDisplayLayout/QuranLayout";
import QuranFontDisplay from "../../../Components/QuranDisplayLayout/QuranFontDisplay";

const Home = () => {
  return (
    <div className="flex bg-[#fffaed]">
      <QuranFontDisplay></QuranFontDisplay>
      {/* <QuranLayout></QuranLayout> */}
    </div>
  );
};

export default Home;
