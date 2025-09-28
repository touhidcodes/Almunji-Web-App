"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import VerseDisplay from "@/components/Pages/Surah/VerseDisplay";
import { useGetAQuranVerseQuery } from "@/redux/api/quranApi";

const DisplaySurahPage: React.FC<{
  fontSize?: number;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}> = ({ fontSize = 18, isPlaying = false, onPlayPause }) => {
  const params = useParams();
  const router = useRouter();
  const surahId = parseInt(params.id as string);

  const { data: surahData, isLoading } = useGetAQuranVerseQuery(surahId);
  console.log(surahData);

  const [currentPlayingVerse, setCurrentPlayingVerse] = useState<number | null>(
    null
  );
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    if (surahId) {
      const saved = localStorage.getItem(`bookmarks-${surahId}`);
      if (saved) {
        try {
          setBookmarkedVerses(JSON.parse(saved));
        } catch (error) {
          console.error("Error loading bookmarks:", error);
        }
      }
    }
  }, [surahId]);

  // Audio play/pause
  const handlePlayPause = (verseNumber: number) => {
    setCurrentPlayingVerse((prev) =>
      prev === verseNumber ? null : verseNumber
    );
    // TODO: hook into real audio player
  };

  // Bookmark toggle
  const handleBookmarkToggle = (verseNumber: number) => {
    const newBookmarks = bookmarkedVerses.includes(verseNumber)
      ? bookmarkedVerses.filter((v) => v !== verseNumber)
      : [...bookmarkedVerses, verseNumber];

    setBookmarkedVerses(newBookmarks);
    localStorage.setItem(`bookmarks-${surahId}`, JSON.stringify(newBookmarks));
  };

  // Navigation (prev/next surah)
  const handleNavigation = (direction: "prev" | "next") => {
    const newId = direction === "next" ? surahId + 1 : surahId - 1;
    if (newId > 0 && newId <= 114) {
      router.push(`/surah/${newId}`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <VerseDisplay
      surah={surahData}
      isLoading={isLoading}
      fontSize={fontSize}
      isPlaying={currentPlayingVerse !== null}
      currentPlayingVerse={currentPlayingVerse}
      onPlayPause={handlePlayPause}
      onNavigate={handleNavigation}
      canNavigatePrev={surahId > 1}
      canNavigateNext={surahId < 114}
      bookmarkedVerses={bookmarkedVerses}
      onBookmarkToggle={handleBookmarkToggle}
    />
  );
};

export default DisplaySurahPage;
