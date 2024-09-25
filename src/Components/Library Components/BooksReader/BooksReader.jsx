import React, { useContext, useState } from "react";
import mammoth from "mammoth";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BooksReader = () => {
  const { bookContent, index, setSelectedChapter, selectedChapter } =
    useContext(AuthContext);

  // Function to scroll to a section
  const navigateToChapter = (id, index) => {
    setSelectedChapter(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="bg-[#fffaed] ">
        {bookContent && (
          <div className="flex w-full h-screen">
              
              {/* Left Content */}
            <div className="w-96  px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#0b8371] hidden lg:block">
              <h3 className="font-bold text-center m-2 text-[#0b8371]">
                অনুচ্ছেদ
              </h3>
              <ul>
                {index.map((chapter, i) => (
                  <li
                    className={` cursor-pointer ${
                      selectedChapter === i ? "bg-[#0b8371] text-white" : ""
                    } border-2 border-[#0b8371] mb-2 px-3 py-2 rounded-xl hover:bg-[#0b8371] hover:text-white`}
                    key={i}
                    onClick={() => navigateToChapter(chapter.id, i)}
                  >
                    {chapter.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content */}
            <div
              className="w-full px-20 py-9 text-justify tracking-tight text-base  lg:text-lg  border-2 border-[#0b8371] rounded-xl  overflow-y-auto scrollbar-none m-2"
              dangerouslySetInnerHTML={{ __html: bookContent }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksReader;
