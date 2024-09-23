import { useContext, useEffect, useState } from "react";
import "../../../src/index.css";
import borderimg from "/public/ordermod.png";
import {
  useGetAllQuranVerseQuery,
  useGetSurahBengaliByChapterQuery,
  useGetSurahByChapterQuery,
} from "../../redux/api/quranApi";
import { json } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const QuranLayout = () => {
  const { selectedItem, setSelectedItem } = useContext(AuthContext);
  const [surahs, setSurahs] = useState([]);

  const { data: quranData, isLoading } = useGetAllQuranVerseQuery(selectedItem);

  // Fetch the Arabic and Bengali Surah dynamically using Redux
  const { data: eachsurah, isLoading: isLoadingArabic } =
    useGetSurahByChapterQuery(selectedItem?.chapter, {
      skip: !selectedItem?.chapter,
    });
  const { data: eachsurahBengali, isLoading: isLoadingBengali } =
    useGetSurahBengaliByChapterQuery(selectedItem?.chapter, {
      skip: !selectedItem?.chapter,
    });
  useEffect(() => {
    fetch("../../../public/SurahData.json")
      .then((response) => response.json())
      .then((data) => {
        setSurahs(data);
        if (data.length > 0) {
          setSelectedItem(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSurahChange = (surah) => {
    setSelectedItem(surah);
    // console.log("inside PC", selectedItem);
  };
  const handleSectionChange = (event) => {
    const selectedValue = event.target.value;
    const selectObj = JSON.parse(selectedValue);
    setSelectedItem(selectObj);
    // console.log("inside Phone", selectedItem);
  };

  if (isLoadingArabic || isLoadingBengali) {
    return <div>Loading...</div>;
  }
  // #d8dcd3
  // #fffaed
  return (
    <div className="flex w-full h-screen">
      {/* Left Navigation */}
      <div className="w-96 mt-3 bg-[#fffaed] text-[#1a413a] p-4 overflow-y-scroll  scrollbar scrollbar-thumb-[#0b8371] scrollbar-track-gray-100 h-full hidden lg:block">
        <ul>
          {surahs.map((surah, index) => (
            <li
              key={index}
              className={`roboto-font text-lg px-2 py-5 mb-2  rounded-lg ${
                selectedItem === surah
                  ? "bg-[#0b8371] text-white"
                  : "bg-transparent border border-[#0b8371] hover:text-[#0b8371]"
              }`}
              onClick={() => handleSurahChange(surah)}
            >
              {surah.name} ({surah.englishname})
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full p-6 h-full overflow-y-auto scrollbar-none">
        <div>
          <select
            className="select border-2 border-[#0b8371] text-[#0b8371] bg-[#fffaed] w-full lg:hidden"
            onChange={handleSectionChange}
          >
            {surahs.map((surah, index) => (
              <option
                key={index}
                className="hover:bg-[#0b8371]"
                value={JSON.stringify(surah)}
              >
                {surah.chapter}. {surah.name} ({surah.englishname})
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#0b8371] text-white rounded-xl mt-4 lg:mt-0 py-4">
          <h1 className="amiri-font text-4xl  lg:text-5xl  mb-4 text-center">
            {selectedItem.arabicname}
          </h1>
          <h1 className="amiri-font text-2xl lg:text-3xl font-bold mb-4 text-center">
            {selectedItem.name}
          </h1>
        </div>
        <br />
        <div className="p-10 border-4 border-[#0b8371] rounded-xl">
          {/* <img src={borderimg} className="w-full" /> */}
          <div className="bg-[rgba(255,250,237,0.87)] shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] rounded-xl">
            {eachsurah?.chapter?.map((verse, index) => (
              <div key={index} className="mb-6">
                {/* Arabic Verse */}
                <p className=" text-right mb-2 lg:px-16 py-2 rounded-lg ">
                  <span className="amiri-font text-lg md:text-xl lg:text-5xl text-[#0b8371]">
                    {verse.text}
                  </span>
                </p>

                {/* Bengali Verse (Translation) */}
                {eachsurahBengali?.chapter && (
                  <p className="text-lg md:text-xl lg:text-2xl text-left mb-10 lg:px-16 py-2 rounded-lg">
                    <span className=" text-gray-900">
                      {eachsurahBengali.chapter[index]?.text}
                    </span>
                  </p>
                )}
                <div className="border-b-2 border-[#0b8371]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranLayout;
