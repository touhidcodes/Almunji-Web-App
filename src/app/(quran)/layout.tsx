// app/(quran)/layout.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

// Sample Surah data - you can move this to a separate data file or fetch from API
const surahs = [
  {
    id: 1,
    name: "Al Fatihah",
    englishName: "The Opener",
    ayahCount: 7,
    revelationType: "Makkah",
  },
  {
    id: 2,
    name: "Al Baqarah",
    englishName: "The Cow",
    ayahCount: 286,
    revelationType: "Madinah",
  },
  {
    id: 3,
    name: "Al Imran",
    englishName: "Family of Imran",
    ayahCount: 200,
    revelationType: "Madinah",
  },
  {
    id: 4,
    name: "An Nisa",
    englishName: "The Women",
    ayahCount: 176,
    revelationType: "Madinah",
  },
  {
    id: 5,
    name: "Al Ma'idah",
    englishName: "The Table Spread",
    ayahCount: 120,
    revelationType: "Madinah",
  },
  {
    id: 6,
    name: "Al An'am",
    englishName: "The Cattle",
    ayahCount: 165,
    revelationType: "Makkah",
  },
  {
    id: 7,
    name: "Al A'raf",
    englishName: "The Heights",
    ayahCount: 206,
    revelationType: "Makkah",
  },
  {
    id: 8,
    name: "Al Anfal",
    englishName: "The Spoils",
    ayahCount: 75,
    revelationType: "Madinah",
  },
  {
    id: 9,
    name: "At Tawbah",
    englishName: "The Repentance",
    ayahCount: 129,
    revelationType: "Madinah",
  },
  {
    id: 10,
    name: "Yunus",
    englishName: "Jonah",
    ayahCount: 109,
    revelationType: "Makkah",
  },
  {
    id: 11,
    name: "Hud",
    englishName: "Hud",
    ayahCount: 123,
    revelationType: "Makkah",
  },
  {
    id: 12,
    name: "Yusuf",
    englishName: "Joseph",
    ayahCount: 111,
    revelationType: "Makkah",
  },
];

const SurahSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.englishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCurrentSurahId = () => {
    const match = pathname.match(/\/surah\/(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  const currentSurahId = getCurrentSurahId();

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Surah</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Surah"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Surah List */}
      <div className="p-4">
        <div className="space-y-2">
          {filteredSurahs.map((surah) => (
            <Link
              key={surah.id}
              href={`/surah/${surah.id}`}
              className={`flex items-center p-3 rounded-lg transition-colors block ${
                currentSurahId === surah.id
                  ? "bg-green-50 border-l-4 border-l-green-500"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium mr-3">
                {surah.id}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800">{surah.name}</div>
                <div className="text-sm text-gray-500">{surah.englishName}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <SurahSidebar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
