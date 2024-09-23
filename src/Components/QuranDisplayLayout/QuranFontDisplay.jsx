import React, { useEffect, useState } from "react";
import ayahlogo from "../../assets/apple-touch-icon.png";
const QuranFontDisplay = () => {
  const [surahs, setSurahs] = useState([]);
  useEffect(() => {
    fetch("/public/SurahData.json")
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data);
      });
  }, []);
  console.log(surahs);
  return (
    <div className="w-full mt-20 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {surahs.map((surah, index) => (
          <div
            key={index}
            className=" roboto-font text-[#0b8371] flex justify-between items-center border-2 border-[#0b8371] rounded-lg w-full px-10 py-2 hover:bg-[#0b8371] hover:text-white"
          >
            <div className="flex">
              <div className="mx-2 relative">
                <h1 className=" bg-slate-200 w-16 h-14 rounded-xl px-3">
                  <span className="text-[#0b8371] font-semibold text-xl absolute top-1/4 left-6">
                    {surah?.chapter}
                  </span>
                </h1>
              </div>
              <div className="">
                <p className="text-xl font-bold">{surah.name}</p>
                <p className="text-base text-wrap font-thin">
                  {surah.englishname}
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-xl font-bold text-center">{surah.verses}</p>
              <p className="text-base font-thin">Ayahs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuranFontDisplay;
