import { useEffect, useState } from "react";
import LeftNavigation from "./LeftNavigation/LeftNavigation";
import MainScreen from "./MainScreen/MainScreen";

const QuranLayout = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch("../../../public/SurahData.json")
      .then((response) => response.json())
      .then((data) => setSurahs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedObj = surahs.find((option) => option.name === selectedValue);
    setSelectedItem(selectedObj);
  };

  console.log(selectedItem);

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
              onClick={() => setSelectedItem(surah)}
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
            onChange={handleChange}
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

        <p className="border-2 border-blue-500 rounded-md p-10"></p>
      </div>
    </div>
  );
};

export default QuranLayout;
