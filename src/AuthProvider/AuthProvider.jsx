import React, { createContext, useEffect, useState } from "react";
import mammoth from "mammoth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [wholeQuran, setWholeQuran] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  //////Library function call/////////////////
  const [bookContent, setBookContent] = useState("");
  const [index, setIndex] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Function to load book content from server/public folder
  const loadBook = async (fileUrl) => {
    console.log("load file", fileUrl);
    // Fetch the .docx file as an array buffer
    const response = await fetch(fileUrl);
    const arrayBuffer = await response.arrayBuffer();

    // Convert the .docx file to HTML using Mammoth.js
    const result = await mammoth.convertToHtml({ arrayBuffer });
    setBookContent(result.value); // Set the HTML content of the book

    // Extract the headings for the index
    const headings = extractHeadings(result.value);
    setIndex(headings);
  };

  // Extract headings from the HTML content for the navigable index
  const extractHeadings = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const headings = [];
    doc.querySelectorAll("h1, h2, h3").forEach((heading, i) => {
      heading.classList.add(
        "font-bold",
        "lg:text-2xl",
        "text-[#0b8371]",
        "border-2",
        "border-[#0b8371]",
        "p-4",
        "rounded-xl",
        "my-5",
        "text-lg",
        "tracking-tight"
      );
      headings.push({ id: `heading-${i}`, title: heading.innerText });
      heading.setAttribute("id", `heading-${i}`); // Add ID for navigation
    });

    setBookContent(doc.body.innerHTML); // Update book content with IDs
    return headings;
  };

  /////////////////////////////////////////

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-abubakrzakaria.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Convert response to JSON
        const result = await response.json();
        // Update the state with fetched data
        setWholeQuran(result);
      } catch (error) {
        // Handle any errors
        setError(error.message);
      } finally {
        // Set loading to false when data is fetched or error occurs
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  const dataInfo = {
    wholeQuran,
    selectedItem,
    setSelectedItem,
    bookContent,
    setBookContent,
    index,
    setIndex,
    selectedChapter,
    setSelectedChapter,
    loadBook,
    extractHeadings,
  };
  return (
    <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
