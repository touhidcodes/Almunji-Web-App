import { useEffect, useState } from "react";
import "../../../src/index.css";
import { useGetAllQuranVerseQuery } from "../../redux/api/quranApi";
import { data } from "autoprefixer";
const QuranLayout = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [surahs, setSurahs] = useState([]);
  const [eachsurah, setEachSurah] = useState([]);

  const { data: quranData, isLoading } = useGetAllQuranVerseQuery(selectedItem);

  console.log("Data", selectedItem, quranData);

  useEffect(() => {
    fetch("../../../public/SurahData.json")
      .then((response) => response.json())
      .then((data) => setSurahs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleSurahChange = async (surah) => {
    // console.log(surah?.chapter);
    setSelectedItem(surah?.chapter);
    // await fetch(
    //   `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoorinonun/${selectedItem?.chapter}.json`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setEachSurah(data?.chapter))
    //   .catch((error) => console.error("Error fetching data:", error));
    // console.log("Each Surah ", eachsurah);
  };

  const handleSectionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedObj = surahs.find((option) => option.name === selectedValue);
    setSelectedItem(selectedObj);

    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoorinonun/${selectedObj?.chapter}.json`
    )
      .then((response) => response.json())
      .then((data) => setEachSurah(data?.chapter))
      .catch((error) => console.error("Error fetching data:", error));
  };

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full h-screen mt-2">
      {/* Left Navigation */}
      <div className="w-64  bg-gray-200 p-4 overflow-y-scroll  scrollbar scrollbar-thumb-indigo-600 scrollbar-track-slate-300    h-full hidden md:block lg:block">
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

      {/* Main Content (Full Width After Left Nav) */}
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
          {eachsurah?.map((verse, index) => (
            <p
              key={index + 1}
              className="text-4xl text-right bg-gray-100 mb-4 p-4 rounded-lg"
            >
              <span className="amiri-font text-gray-900">{verse.text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranLayout;
