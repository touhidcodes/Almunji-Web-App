import { useState } from "react";
import LeftNavigation from "./LeftNavigation/LeftNavigation";
import MainScreen from "./MainScreen/MainScreen";

const QuranLayout = () => {
  const [activePage, setActivePage] = useState("/");
  const renderContent = () => {
    switch (activePage) {
      case "/":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <p>Welcome to the Home Page!</p>
          </div>
        );
      case "/library":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Library Page</h1>
            <p>Here is your Library information.</p>
          </div>
        );
      case "/dictionary":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Dictionary Page</h1>
            <p>Manage your Dictionary here.</p>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">Home Page</h1>
            <p>Welcome to the Home Page!</p>
          </div>
        );
    }
  };

  return (
    <div className="mt-4">
      <div className="relative flex h-full w-full overflow-hidden transition-colors z-0">
        {/* Sidebar */}
        <div className="flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0 bg-blue-300 text-white">
          <ul>
            <li>
              <button
                onClick={() => setActivePage("/")}
                className={`block p-4 w-full text-left ${
                  activePage === "home" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("/library")}
                className={`block p-4 w-full text-left ${
                  activePage === "profile" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                Library
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("/dictionary")}
                className={`block p-4 w-full text-left ${
                  activePage === "settings"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                Dictionary
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-3 bg-gray-100 ">{renderContent()}</div>
      </div>
    </div>
  );
};

export default QuranLayout;
