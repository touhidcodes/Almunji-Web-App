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

const SurahPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data: chaptersData, isLoading, error } = useGetChaptersQuery({});

  // Filter surahs based on search query
  const filteredSurahs = Array.isArray(chaptersData)
    ? chaptersData.filter((chapter: ChapterData) => {
        const query = searchQuery.toLowerCase();
        return (
          chapter.surahName.toLowerCase().includes(query) ||
          chapter.surahNameArabic.includes(searchQuery) ||
          chapter.surahNameTranslation.toLowerCase().includes(query)
        );
      })
    : [];

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

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-600 mb-2">Error loading Surahs</p>
            <p className="text-gray-600 text-sm">Please try again later</p>
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

      {/* Search */}
      <div className="flex justify-center mb-6">
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
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600 text-sm">
        Showing {filteredSurahs.length} Surahs
      </div>

      {/* Surah Grid */}
      {filteredSurahs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredSurahs.map((chapter: ChapterData, index: number) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-teal-500"
            >
              {/* Surah Number */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-2xl font-bold text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">
                    {chapter.totalAyah} verses
                  </span>
                  <span className="text-xs text-gray-400 block mt-1">
                    {chapter.revelationPlace}
                  </span>
                </div>
              </div>

              {/* Surah Names */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {chapter.surahName}
                </h3>
                <p
                  className="text-2xl font-arabic text-gray-700 mb-2 text-right"
                  dir="rtl"
                >
                  {chapter.surahNameArabic}
                </p>
                <p className="text-sm text-gray-600">
                  {chapter.surahNameTranslation}
                </p>
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

      <style jsx>{`
        .font-arabic {
          font-family: "Amiri", "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
};

export default SurahPage;
