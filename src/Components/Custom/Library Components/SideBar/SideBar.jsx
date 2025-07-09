import React from "react";

const SideBar = ({ chapters, onChapterClick }) => {
  return (
    <div className="sidebar">
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} onClick={() => onChapterClick(chapter)}>
            {chapter.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
