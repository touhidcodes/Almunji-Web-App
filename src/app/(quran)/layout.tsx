"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  BookOpen,
  Moon,
  Sun,
  Settings,
  Play,
  Pause,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Hash,
} from "lucide-react";

// Mock Redux data - replace with actual Redux implementation
const mockSurahs = [
  {
    surahName: "Al-Faatiha",
    surahNameArabic: "الفاتحة",
    surahNameArabicLong: "سُورَةُ ٱلْفَاتِحَةِ",
    surahNameTranslation: "The Opening",
    revelationPlace: "Mecca",
    totalAyah: 7,
  },
  {
    surahName: "Al-Baqara",
    surahNameArabic: "البقرة",
    surahNameArabicLong: "سورة البقرة",
    surahNameTranslation: "The Cow",
    revelationPlace: "Madina",
    totalAyah: 286,
  },
  {
    surahName: "Aal-i-Imraan",
    surahNameArabic: "آل عمران",
    surahNameArabicLong: "سورة آل عمران",
    surahNameTranslation: "The Family of Imraan",
    revelationPlace: "Madina",
    totalAyah: 200,
  },
  {
    surahName: "An-Nisaa",
    surahNameArabic: "النساء",
    surahNameArabicLong: "سورة النساء",
    surahNameTranslation: "The Women",
    revelationPlace: "Madina",
    totalAyah: 176,
  },
  {
    surahName: "Al-Maida",
    surahNameArabic: "المائدة",
    surahNameArabicLong: "سورة المائدة",
    surahNameTranslation: "The Table",
    revelationPlace: "Madina",
    totalAyah: 120,
  },
];

// Mock verse data
const mockVerses = {
  1: [
    {
      ayahNumber: 1,
      arabicText: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
      translation:
        "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    },
    {
      ayahNumber: 2,
      arabicText: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَـٰلَمِینَ",
      translation: "Praise is due to Allah, Lord of the worlds.",
    },
    {
      ayahNumber: 3,
      arabicText: "ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
      translation: "The Entirely Merciful, the Especially Merciful.",
    },
  ],
};

interface Surah {
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
}

interface Verse {
  ayahNumber: number;
  arabicText: string;
  translation: string;
}

const QuranLayout: React.FC = () => {
  const [selectedSurah, setSelectedSurah] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(18);

  // Filter surahs based on search
  const filteredSurahs = mockSurahs.filter(
    (surah) =>
      surah.surahName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.surahNameTranslation
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      surah.surahNameArabic.includes(searchQuery)
  );

  const currentSurah = mockSurahs[selectedSurah - 1];
  const currentVerses = mockVerses[selectedSurah] || [];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        } border-b shadow-sm`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <div className="flex items-center gap-2">
              <BookOpen
                className={`w-6 h-6 ${
                  isDarkMode ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Quran Majeed
              </span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Audio Controls */}
            <button
              onClick={togglePlayPause}
              className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <button
              className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </button>

            {/* Font Size Controls */}
            <div className="flex items-center gap-1 mx-2">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className={`px-2 py-1 text-sm rounded ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className={`px-2 py-1 text-sm rounded ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                A+
              </button>
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Surah List */}
        <aside
          className={`${
            isSidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 overflow-hidden ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border-r ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } h-screen sticky top-16`}
        >
          <div className="p-4">
            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search Surah..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
            </div>

            {/* Surah List */}
            <div className="space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
              {filteredSurahs.map((surah, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSurah(index + 1)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedSurah === index + 1
                      ? isDarkMode
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-100 text-emerald-800 border-emerald-200"
                      : isDarkMode
                      ? "hover:bg-gray-700 text-gray-300"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-sm font-medium ${
                        selectedSurah === index + 1
                          ? isDarkMode
                            ? "text-emerald-200"
                            : "text-emerald-600"
                          : isDarkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{surah.revelationPlace}</span>
                    </div>
                  </div>

                  <div className="mb-1">
                    <h3 className="font-semibold text-base">
                      {surah.surahName}
                    </h3>
                    <p
                      className="text-lg font-arabic text-right mb-1"
                      dir="rtl"
                    >
                      {surah.surahNameArabic}
                    </p>
                    <p
                      className={`text-sm ${
                        selectedSurah === index + 1
                          ? isDarkMode
                            ? "text-emerald-100"
                            : "text-emerald-700"
                          : isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {surah.surahNameTranslation}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs">
                    <Hash className="w-3 h-3" />
                    <span>{surah.totalAyah} verses</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Surah Verses */}
        <main
          className={`flex-1 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-50"
          } min-h-screen`}
        >
          {currentSurah && (
            <div className="max-w-4xl mx-auto p-6">
              {/* Surah Header */}
              <div
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-6 mb-6 shadow-sm`}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                      isDarkMode
                        ? "bg-emerald-600"
                        : "bg-emerald-100 text-emerald-800"
                    } text-sm font-medium mb-4`}
                  >
                    <span>Surah {selectedSurah}</span>
                    <span>•</span>
                    <span>{currentSurah.revelationPlace}</span>
                  </div>

                  <h1
                    className={`text-3xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {currentSurah.surahName}
                  </h1>

                  <p
                    className={`text-4xl font-arabic mb-3 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                    dir="rtl"
                  >
                    {currentSurah.surahNameArabicLong}
                  </p>

                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } mb-4`}
                  >
                    {currentSurah.surahNameTranslation}
                  </p>

                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {currentSurah.totalAyah} verses • Revealed in{" "}
                    {currentSurah.revelationPlace}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mb-6">
                <button
                  disabled={selectedSurah === 1}
                  onClick={() => setSelectedSurah(selectedSurah - 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedSurah === 1
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous Surah
                </button>

                <button
                  disabled={selectedSurah === mockSurahs.length}
                  onClick={() => setSelectedSurah(selectedSurah + 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedSurah === mockSurahs.length
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Next Surah
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Verses */}
              <div className="space-y-6">
                {currentVerses.length > 0 ? (
                  currentVerses.map((verse: any) => (
                    <div
                      key={verse.ayahNumber}
                      className={`${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-600"
                              : "bg-emerald-100 text-emerald-800"
                          } text-sm font-bold`}
                        >
                          {verse.ayahNumber}
                        </div>
                        <button
                          className={`p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Play className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right mb-4" dir="rtl">
                        <p
                          className={`font-arabic leading-loose ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                          style={{ fontSize: `${fontSize + 8}px` }}
                        >
                          {verse.arabicText}
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <p
                          className={`leading-relaxed ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                          style={{ fontSize: `${fontSize}px` }}
                        >
                          {verse.translation}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    className={`${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    } rounded-xl p-12 text-center shadow-sm`}
                  >
                    <BookOpen
                      className={`w-12 h-12 mx-auto mb-4 ${
                        isDarkMode ? "text-gray-600" : "text-gray-400"
                      }`}
                    />
                    <p
                      className={`text-lg ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Verses will be loaded here
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      } mt-2`}
                    >
                      Connect your Redux store to display the verses
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        .font-arabic {
          font-family: "Amiri", "Noto Naskh Arabic", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
};

export default QuranLayout;
