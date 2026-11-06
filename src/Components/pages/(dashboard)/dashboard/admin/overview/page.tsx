import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  BookMarked,
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Heart,
  Moon,
  Settings,
  Star,
  Sun,
  TrendingUp,
  User,
} from "lucide-react";
import React, { useState } from "react";

interface Bookmark {
  id: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  timestamp: string;
}

interface RecentRead {
  surahNumber: number;
  surahName: string;
  progress: number;
  lastRead: string;
}

interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  isFavorite: boolean;
}

const UserDashboardOverview: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample data
  const stats = {
    totalRead: 45,
    bookmarks: 12,
    duasSaved: 8,
    streak: 7,
  };

  const bookmarks: Bookmark[] = [
    {
      id: "1",
      surahNumber: 2,
      surahName: "Al-Baqarah",
      ayahNumber: 255,
      timestamp: "2h ago",
    },
    {
      id: "2",
      surahNumber: 18,
      surahName: "Al-Kahf",
      ayahNumber: 10,
      timestamp: "1d ago",
    },
    {
      id: "3",
      surahNumber: 36,
      surahName: "Ya-Sin",
      ayahNumber: 1,
      timestamp: "3d ago",
    },
  ];

  const recentReads: RecentRead[] = [
    {
      surahNumber: 2,
      surahName: "Al-Baqarah",
      progress: 65,
      lastRead: "Today",
    },
    {
      surahNumber: 18,
      surahName: "Al-Kahf",
      progress: 100,
      lastRead: "Friday",
    },
    {
      surahNumber: 36,
      surahName: "Ya-Sin",
      progress: 45,
      lastRead: "2 days ago",
    },
    {
      surahNumber: 67,
      surahName: "Al-Mulk",
      progress: 80,
      lastRead: "Yesterday",
    },
  ];

  const duas: Dua[] = [
    {
      id: "1",
      title: "Morning Dua",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
      transliteration: "Asbahna wa asbahal-mulku lillah",
      isFavorite: true,
    },
    {
      id: "2",
      title: "Before Sleep",
      arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      transliteration: "Bismika Allahumma amutu wa ahya",
      isFavorite: true,
    },
    {
      id: "3",
      title: "Before Eating",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      isFavorite: false,
    },
  ];

  const bgClass = isDarkMode
    ? "bg-gray-900"
    : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50";
  const cardBg = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${cardBg} border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${textPrimary}`}>
                  Al-Munji
                </h1>
                <p className={`text-sm ${textSecondary}`}>
                  Your Quran Companion
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${cardBg} hover:bg-opacity-80 transition-colors`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <button
                className={`p-2 rounded-lg ${cardBg} hover:bg-opacity-80 transition-colors`}
              >
                <Settings className={`w-5 h-5 ${textSecondary}`} />
              </button>
              <button
                className={`p-2 rounded-lg ${cardBg} hover:bg-opacity-80 transition-colors`}
              >
                <User className={`w-5 h-5 ${textSecondary}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className={`text-3xl font-bold ${textPrimary} mb-2`}>
            As-salamu alaykum, Abdullah
          </h2>
          <p className={textSecondary}>
            Continue your journey with the Quran today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            className={`${cardBg} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <p className={`text-sm ${textSecondary} mb-1`}>Surahs Read</p>
            <p className={`text-3xl font-bold ${textPrimary}`}>
              {stats.totalRead}
            </p>
            <p className="text-xs text-emerald-600 mt-2">+5 this week</p>
          </div>

          <div
            className={`${cardBg} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BookMarked className="w-6 h-6 text-blue-600" />
              </div>
              <Heart className="w-5 h-5 text-blue-500" />
            </div>
            <p className={`text-sm ${textSecondary} mb-1`}>Bookmarks</p>
            <p className={`text-3xl font-bold ${textPrimary}`}>
              {stats.bookmarks}
            </p>
            <p className="text-xs text-blue-600 mt-2">Quick access</p>
          </div>

          <div
            className={`${cardBg} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <Star className="w-5 h-5 text-purple-500" />
            </div>
            <p className={`text-sm ${textSecondary} mb-1`}>Duas Saved</p>
            <p className={`text-3xl font-bold ${textPrimary}`}>
              {stats.duasSaved}
            </p>
            <p className="text-xs text-purple-600 mt-2">Personal collection</p>
          </div>

          <div
            className={`${cardBg} border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <Check className="w-5 h-5 text-orange-500" />
            </div>
            <p className={`text-sm ${textSecondary} mb-1`}>Reading Streak</p>
            <p className={`text-3xl font-bold ${textPrimary}`}>
              {stats.streak} days
            </p>
            <p className="text-xs text-orange-600 mt-2">Keep it up!</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bookmarks Section */}
          <div className={`${cardBg} border rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-semibold ${textPrimary} flex items-center`}
              >
                <BookMarked className="w-5 h-5 mr-2 text-blue-600" />
                Bookmarks
              </h3>
              <button className="text-blue-600 text-sm hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-100 hover:bg-gray-50"
                  } transition-colors cursor-pointer`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className={`font-semibold ${textPrimary}`}>
                        {bookmark.surahNumber}. {bookmark.surahName}
                      </p>
                      <p className={`text-sm ${textSecondary} mt-1`}>
                        Ayah {bookmark.ayahNumber}
                      </p>
                      <p
                        className={`text-xs ${textSecondary} mt-2 flex items-center`}
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {bookmark.timestamp}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${textSecondary}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reading Section */}
          <div className={`${cardBg} border rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-semibold ${textPrimary} flex items-center`}
              >
                <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                Recent Reading
              </h3>
              <button className="text-emerald-600 text-sm hover:underline">
                Continue
              </button>
            </div>
            <div className="space-y-4">
              {recentReads.map((surah, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-100 hover:bg-gray-50"
                  } transition-colors cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className={`font-semibold ${textPrimary}`}>
                        {surah.surahNumber}. {surah.surahName}
                      </p>
                      <p className={`text-xs ${textSecondary} mt-1`}>
                        {surah.lastRead}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        surah.progress === 100
                          ? "text-emerald-600"
                          : textSecondary
                      }`}
                    >
                      {surah.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        surah.progress === 100
                          ? "bg-emerald-600"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${surah.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duas Section */}
          <div className={`${cardBg} border rounded-xl p-6 shadow-sm`}>
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-semibold ${textPrimary} flex items-center`}
              >
                <Heart className="w-5 h-5 mr-2 text-purple-600" />
                Saved Duas
              </h3>
              <button className="text-purple-600 text-sm hover:underline">
                Browse
              </button>
            </div>
            <div className="space-y-4">
              {duas.map((dua) => (
                <div
                  key={dua.id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-100 hover:bg-gray-50"
                  } transition-colors cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <p className={`font-semibold ${textPrimary}`}>
                      {dua.title}
                    </p>
                    {dua.isFavorite && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p
                    className={`text-right text-lg mb-2 ${textPrimary}`}
                    style={{ fontFamily: "serif" }}
                  >
                    {dua.arabic}
                  </p>
                  <p className={`text-sm ${textSecondary} italic`}>
                    {dua.transliteration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Reminder */}
        <div className="mt-8">
          <Alert className="border-emerald-200 bg-emerald-50">
            <Calendar className="h-4 w-4 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              <span className="font-semibold">Daily Reminder:</span> It's
              Friday! Don't forget to read Surah Al-Kahf today.
            </AlertDescription>
          </Alert>
        </div>
      </main>
    </div>
  );
};

export default UserDashboardOverview;
