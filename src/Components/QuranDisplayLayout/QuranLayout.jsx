import { useEffect, useState } from "react";
import "../../../src/index.css";

import {
  useGetAllQuranVerseQuery,
  useGetSurahBengaliByChapterQuery,
  useGetSurahByChapterQuery,
} from "../../redux/api/quranApi";

const QuranLayout = () => {
  const [selectedItem, setSelectedItem] = useState(1);
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
      .then((data) => setSurahs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSurahChange = (surah) => {
    setSelectedItem(surah);
  };
  const handleSectionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedObj = surahs.find((option) => option.name === selectedValue);
    setSelectedItem(selectedObj);
  };

  if (isLoadingArabic || isLoadingBengali) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full h-screen mt-2">
      {/* Left Navigation */}
      <div className="w-64  bg-gray-200 p-4 overflow-y-scroll  scrollbar scrollbar-thumb-indigo-600 scrollbar-track-slate-300 h-full hidden md:block lg:block">
        <ul className="">
          {surahs.map((surah, index) => (
            <li
              key={index}
              className={`p-2 mb-2  rounded-lg ${
                selectedItem === surah
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleSurahChange(surah)}
            >
              {surah.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full p-6 h-full overflow-y-auto">
        <div>
          <select
            className="select select-primary w-full lg:hidden"
            onChange={handleSectionChange}
          >
            {surahs.map((surah, index) => (
              <option key={index}>{surah.name}</option>
            ))}
          </select>
        </div>

        <h1 className="amiri-font text-gray-900 text-4xl  mb-4 text-center mt-3">
          {selectedItem.arabicname}
        </h1>
        <h1 className="amiri-font text-gray-900 text-2xl font-bold mb-4 text-center">
          {selectedItem.name}
        </h1>
        <br />
        <div className="border-red-300">
          {eachsurah?.chapter?.map((verse, index) => (
            <div key={index} className="mb-6">
              {/* Arabic Verse */}
              <p className="text-4xl text-right bg-gray-100 mb-2 p-4 rounded-lg">
                <span className="amiri-font text-gray-900">{verse.text}</span>
              </p>

              {/* Bengali Verse (Translation) */}
              {eachsurahBengali?.chapter && (
                <p className="text-3xl text-left bg-gray-50 mb-2 p-4 rounded-lg">
                  <span className=" text-gray-700">
                    {eachsurahBengali.chapter[index]?.text}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranLayout;
