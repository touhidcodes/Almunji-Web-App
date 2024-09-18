import { useEffect, useState } from "react";

const QuranLayout = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [surahs, setSurahs] = useState([]);
  const [eachsurah, setEachSurah] = useState([]);

  useEffect(() => {
    fetch("../../../public/SurahData.json")
      .then((response) => response.json())
      .then((data) => setSurahs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSurahChange = async (surah) => {
    setSelectedItem(surah);
    await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurandoorinonun/${selectedItem?.chapter}.json`
    )
      .then((response) => response.json())
      .then((data) => setEachSurah(data?.chapter))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("Each Surah ", eachsurah);
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

  return (
    <div className="flex h-screen mt-4">
      {/* Left Navigation */}
      <div className="w-64 bg-gray-200 p-4 overflow-y-auto h-full hidden md:block lg:block">
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
      <div className="w-full p-6 h-full">
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

        <h1 className="text-4xl font-bold mb-4 text-center mt-3">
          {selectedItem.arabicname}
        </h1>
        <h1 className="text-2xl font-bold mb-4 text-center">
          {selectedItem.name}
        </h1>
        <br />
        <div className="border-red-300">
          {eachsurah?.map((verse, index) => (
            <p key={index + 1} className="text-4xl text-right">
              {verse.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranLayout;
