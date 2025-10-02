"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useGetChaptersQuery } from "@/redux/api/quranApi";

// Type definitions
interface ChapterData {
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
}

interface TransformedSurah {
  id: number;
  number: string;
  name: string;
  arabicName: string;
  englishName: string;
  verses: number;
  revelationPlace: string;
}

type TabType = "Surah" | "Juz" | "Revelation Order";
type SortType = "Ascending" | "Descending";

const SurahPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Surah");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortType>("Ascending");
  const { data: chaptersData, isLoading } = useGetChaptersQuery({});

  // Transform API data to match component structure
  const surahs: TransformedSurah[] =
    chaptersData?.map((chapter: ChapterData, index: number) => ({
      id: index + 1,
      number: String(index + 1).padStart(2, "0"),
      name: chapter.surahName,
      arabicName: chapter.surahNameArabic,
      englishName: chapter.surahNameTranslation,
      verses: chapter.totalAyah,
      revelationPlace: chapter.revelationPlace,
    })) || [];

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabicName.includes(searchQuery) ||
      surah.englishName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedSurahs = [...filteredSurahs].sort((a, b) => {
    if (sortBy === "Ascending") {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Surahs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Start the Journey of Enlightenment
        </h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-white rounded-full p-1 shadow-sm">
          {(["Surah", "Juz", "Revelation Order"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTab === tab
                  ? "bg-yellow-400 text-gray-800"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="What do you want to read?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600 text-sm">
        Showing {sortedSurahs.length} of {surahs.length} Surahs
      </div>

      {/* Surah Grid */}
      {sortedSurahs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sortedSurahs.map((surah) => (
            <div
              key={surah.id}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-teal-500"
            >
              {/* Surah Number */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl font-bold text-gray-400">
                  {surah.number}
                </span>
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">
                    {surah.verses} verses
                  </span>
                  {surah.revelationPlace && (
                    <span className="text-xs text-gray-400 block mt-1">
                      {surah.revelationPlace}
                    </span>
                  )}
                </div>
              </div>

              {/* Surah Names */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {surah.name}
                </h3>
                <p
                  className="text-2xl font-arabic text-gray-700 mb-2 text-right"
                  dir="rtl"
                >
                  {surah.arabicName}
                </p>
                <p className="text-sm text-gray-600">{surah.englishName}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-2">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-gray-600">No Surahs found matching your search</p>
        </div>
      )}

      {/* Show All Button - Only show if there are hidden results */}
      {sortedSurahs.length < surahs.length && (
        <div className="text-center">
          <button
            onClick={() => setSearchQuery("")}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Show All Surahs ({surahs.length})
          </button>
        </div>
      )}

      <style jsx>{`
        .font-arabic {
          font-family: "Amiri", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
};

export default SurahPage;
