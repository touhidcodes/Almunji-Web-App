"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Settings,
  Volume2,
} from "lucide-react";
import { useGetChapterVersesQuery } from "@/redux/api/quranApi";
import { useParams, useRouter } from "next/navigation";

const QuranChapterDisplay = () => {
  const [fontSize, setFontSize] = useState(20);
  const [currentPlayingVerse, setCurrentPlayingVerse] = useState<
    number | undefined
  >(undefined);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedReciter, setSelectedReciter] = useState("1");
  const audioRef = useRef<HTMLAudioElement>(null);
  const params = useParams();
  const router = useRouter();
  const surahId = parseInt(params.id as string);
  const { data: versesData, isLoading } = useGetChapterVersesQuery(surahId);

  const handlePlayPause = (verseNumber: number) => {
    if (currentPlayingVerse === verseNumber) {
      setCurrentPlayingVerse(undefined);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setCurrentPlayingVerse(verseNumber);
      // In a real implementation, you would load and play the audio for this verse
    }
  };

  const handleBookmarkToggle = (verseNumber: number) => {
    setBookmarkedVerses((prev) =>
      prev.includes(verseNumber)
        ? prev.filter((v) => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };

  const handlePlayFullSurah = () => {
    if (audioRef.current) {
      if (currentPlayingVerse !== undefined) {
        audioRef.current.pause();
        setCurrentPlayingVerse(undefined);
      } else {
        audioRef.current.play();
        setCurrentPlayingVerse(1);
      }
    }
  };
  if (isLoading) {
    return <div className="min-h-screen relative">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-center flex-1">
              <div className="text-3xl font-arabic mb-2">
                {versesData.surahNameArabic}
              </div>
              <div className="text-lg font-semibold">
                {versesData.surahName}
              </div>
              <div className="text-sm opacity-90">
                {versesData.surahNameTranslation} • {versesData.revelationPlace}{" "}
                • {versesData.totalAyah} Ayahs
              </div>
            </div>

            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>

          {/* Audio Controls */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={handlePlayFullSurah}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full transition-colors"
            >
              {currentPlayingVerse !== undefined ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
              <span className="font-medium">Play Full Surah</span>
            </button>
            <Volume2 className="w-5 h-5" />
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Font Size</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setFontSize((prev) => Math.max(14, prev - 2))
                    }
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded transition-colors"
                  >
                    A-
                  </button>
                  <span className="text-sm">{fontSize}px</span>
                  <button
                    onClick={() =>
                      setFontSize((prev) => Math.min(32, prev + 2))
                    }
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded transition-colors"
                  >
                    A+
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Reciter</span>
                <select
                  value={selectedReciter}
                  onChange={(e) => setSelectedReciter(e.target.value)}
                  className="bg-white/20 border border-white/30 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {Object.entries(versesData.audio).map(([key, value]) => (
                    <option key={key} value={key} className="text-gray-900">
                      {value.reciter}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bismillah */}
      {versesData.surahNo !== 1 && versesData.surahNo !== 9 && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-4xl font-arabic text-emerald-700">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
        </div>
      )}

      {/* Verses */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {versesData.arabic1.map((arabicText, index) => {
          const verseNumber = index + 1;
          const isPlaying = currentPlayingVerse === verseNumber;
          const isBookmarked = bookmarkedVerses.includes(verseNumber);

          return (
            <div
              key={verseNumber}
              className={`mb-6 bg-white rounded-xl shadow-md overflow-hidden transition-all ${
                isPlaying ? "ring-2 ring-emerald-500 shadow-lg" : ""
              }`}
            >
              <div className="p-6">
                {/* Verse Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                      {verseNumber}
                    </div>
                    <span className="text-sm text-gray-600">
                      Ayah {verseNumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePlayPause(verseNumber)}
                      className="p-2 hover:bg-emerald-50 rounded-lg transition-colors text-emerald-600"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleBookmarkToggle(verseNumber)}
                      className={`p-2 hover:bg-emerald-50 rounded-lg transition-colors ${
                        isBookmarked ? "text-amber-500" : "text-gray-400"
                      }`}
                    >
                      <Bookmark
                        className="w-5 h-5"
                        fill={isBookmarked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <div
                  className="text-right mb-4 font-arabic leading-loose text-gray-900"
                  style={{ fontSize: `${fontSize + 8}px` }}
                >
                  {arabicText}
                </div>

                {/* Bengali Translation */}
                <div
                  className="text-left mb-3 leading-relaxed text-gray-700 border-l-4 border-emerald-500 pl-4"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {versesData.bengali[index]}
                </div>

                {/* English Translation */}
                <div
                  className="text-left leading-relaxed text-gray-600 italic"
                  style={{ fontSize: `${fontSize - 2}px` }}
                >
                  {versesData.english[index]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Previous Surah</span>
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-600">
              Surah {versesData.surahNo} of 114
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="font-medium">Next Surah</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={versesData.audio["1"].url} />

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap");

        .font-arabic {
          font-family: "Amiri", serif;
        }
      `}</style>
    </div>
  );
};

export default QuranChapterDisplay;
