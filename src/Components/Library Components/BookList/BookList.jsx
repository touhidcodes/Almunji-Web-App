import React, { useContext } from "react";
import BooksReader from "../BooksReader/BooksReader";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import "../../../index.css";
const books = [
  {
    title: "কোরআন ও হাদিসের আলোকে আহলে বাইত",
    image:
      "/src/assets/Books/কোরআন ও হাদীসের আলোকে/najater-torii-cover-single-page-e1434754185346.png",
    file: "/src/assets/Books/কোরআন ও হাদীসের আলোকে/কোরআন ও হাদীসের আলোকে.docx",
  },
  {
    title: "আশুরা ও কারবালা বিষয় প্রশ্ন",
    image: "/src/assets/Books/আশুরা ও কারবালা বিষয় প্রশ্ন/cover.jpg",
    file: "/src/assets/Books/আশুরা ও কারবালা বিষয় প্রশ্ন/আশুরা ও কারবালা বিষয় প্রশ্ন.docx",
  },
  {
    title: "আহলে সুন্নাতের দৃষ্টিতে গাদীর",
    image: "/src/assets/Books/আহলে_সুন্নাতের_দৃষ্টিতে_গাদীর/cover (1).jpg",
    file: "/src/assets/Books/আহলে_সুন্নাতের_দৃষ্টিতে_গাদীর/আহলে_সুন্নাতের_দৃষ্টিতে_গাদীর.docx",
  },
  {
    title: "ইমাম মাহদী (আ.)-এর আত্মপ্রকাশ (আসরে যুহুর)",
    image:
      "/src/assets/Books/ইমাম মাহদী (আ.)-এর আত্মপ্রকাশ (আসরে যুহুর)/cover.jpg",
    file: "/src/assets/Books/ইমাম মাহদী (আ.)-এর আত্মপ্রকাশ (আসরে যুহুর)/ইমাম মাহদী (আ.)-এর আত্মপ্রকাশ (আসরে যুহুর).docx",
  },
  {
    title: "বিচার বিধির আলোকে আলেমে বারযাখ",
    image: "/src/assets/Books/বিচার বিধির আলোকে আলেমে বারযাখ/cover.png",
    file: "/src/assets/Books/বিচার বিধির আলোকে আলেমে বারযাখ/বিচার বিধির আলোকে আলেমে বারযাখ.docx",
  },
  {
    title: "Chirobhashwor_Mohanabi",
    image: "/src/assets/Books/Chirobhashwor_Mohanabi_s_1st_part/cover.jpg",
    file: "/src/assets/Books/Chirobhashwor_Mohanabi_s_1st_part/Chirobhashwor_Mohanabi_s_1st_part.docx",
  },
  {
    title: "nahjul_balagha",
    image: "/src/assets/Books/nahjul_balagha/cover (1).jpg",
    file: "/src/assets/Books/nahjul_balagha/nahjul_balagha.docx",
  },
];

const BookList = () => {
  const { loadBook } = useContext(AuthContext);

  return (
    <div className=" bg-[#fffaed] book-list w-full grid grid-cols-3 gap-4 py-10 justify-items-center">
      {books.map((book, index) => (
        <Link key={index} onClick={() => loadBook(book.file)} to="/bookreader">
          <div className="card navdesign w-64 h-80 shadow-md">
            <figure>
              <img className="w-32 h-52 py-2" src={book.image} />
            </figure>
            <div className="card-body">
              <p className=" text-center text-base font-semibold text-[#0b8371]">
                {book.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
