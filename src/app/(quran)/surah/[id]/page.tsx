"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import VerseDisplay from "@/components/Pages/Surah/VerseDisplay";
import { useGetAQuranVerseQuery } from "@/redux/api/quranApi";

// Mock data - replace with your actual data source/API calls
const mockSurahs = [
  {
    id: 1,
    name: "Al-Faatiha",
    nameArabic: "الفاتحة",
    nameTranslation: "The Opening",
    revelationPlace: "Mecca" as const,
    totalVerses: 7,
  },
  {
    id: 2,
    name: "Al-Baqara",
    nameArabic: "البقرة",
    nameTranslation: "The Cow",
    revelationPlace: "Madina" as const,
    totalVerses: 286,
  },
  {
    id: 3,
    name: "Aal-i-Imraan",
    nameArabic: "آل عمران",
    nameTranslation: "The Family of Imraan",
    revelationPlace: "Madina" as const,
    totalVerses: 200,
  },
  {
    id: 4,
    name: "An-Nisaa",
    nameArabic: "النساء",
    nameTranslation: "The Women",
    revelationPlace: "Madina" as const,
    totalVerses: 176,
  },
  {
    id: 5,
    name: "Al-Maida",
    nameArabic: "المائدة",
    nameTranslation: "The Table",
    revelationPlace: "Madina" as const,
    totalVerses: 120,
  },
];

// Mock verses data - replace with your actual API
const mockVerses: Record<number, any[]> = {
  1: [
    {
      number: 1,
      arabicText: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
      translation:
        "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      transliteration: "Bismillah ir-Rahman ir-Raheem",
    },
    {
      number: 2,
      arabicText: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَـٰلَمِینَ",
      translation: "Praise is due to Allah, Lord of the worlds.",
      transliteration: "Alhamdulillahi rabbil alameen",
    },
    {
      number: 3,
      arabicText: "ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
      translation: "The Entirely Merciful, the Especially Merciful.",
      transliteration: "Ar-Rahman ir-Raheem",
    },
    {
      number: 4,
      arabicText: "مَـٰلِكِ یَوۡمِ ٱلدِّینِ",
      translation: "Sovereign of the Day of Recompense.",
      transliteration: "Maliki yawmid deen",
    },
    {
      number: 5,
      arabicText: "إِیَّاكَ نَعۡبُدُ وَإِیَّاكَ نَسۡتَعِینُ",
      translation: "It is You we worship and You we ask for help.",
      transliteration: "Iyyaka na'budu wa iyyaka nasta'een",
    },
    {
      number: 6,
      arabicText: "ٱهۡدِنَا ٱلصِّرَ ٰ⁠طَ ٱلۡمُسۡتَقِیمَ",
      translation: "Guide us to the straight path -",
      transliteration: "Ihdinassiratal mustaqeem",
    },
    {
      number: 7,
      arabicText:
        "صِرَ ٰ⁠طَ ٱلَّذِینَ أَنۡعَمۡتَ عَلَیۡهِمۡ غَیۡرِ ٱلۡمَغۡضُوبِ عَلَیۡهِمۡ وَلَا ٱلضَّاۤلِّینَ",
      translation:
        "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      transliteration:
        "Siratal lazeena an'amta alaihim ghairil maghdubi alaihim waladdaaleen",
    },
  ],
  2: [
    {
      number: 1,
      arabicText: "الٓمٓ",
      translation: "Alif, Lam, Meem.",
      transliteration: "Alif Lam Meem",
    },
    {
      number: 2,
      arabicText:
        "ذَ ٰ⁠لِكَ ٱلۡكِتَـٰبُ لَا رَیۡبَ ۛ فِیهِ ۛ هُدࣰى لِّلۡمُتَّقِینَ",
      translation:
        "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
      transliteration: "Zalikal kitabu la raiba feeh, hudal lil muttaqeen",
    },
    // Add more verses as needed...
  ],
};

interface Surah {
  id: number;
  name: string;
  nameArabic: string;
  nameTranslation: string;
  revelationPlace: "Mecca" | "Madina";
  totalVerses: number;
}

interface Verse {
  number: number;
  arabicText: string;
  translation: string;
  transliteration?: string;
}

const SurahPage: React.FC<{
  fontSize?: number;
  isPlaying?: boolean;
  onPlayPause?: () => void;
}> = ({ fontSize = 18, isPlaying = false, onPlayPause }) => {
  const params = useParams();
  const router = useRouter();
  const chapter = params.id;
  const { data: surahData, isLoading } = useGetAQuranVerseQuery(chapter);
  // console.log(data);
  const [versesLoading, setVersesLoading] = useState(true);
  const [currentPlayingVerse, setCurrentPlayingVerse] = useState<number | null>(
    null
  );
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([]);

  const surahId = parseInt(params.id as string);

  // Find current surah and verses
  const currentSurah = mockSurahs.find((s) => s.id === surahId) || null;
  const verses = mockVerses[surahId] || [];

  // Redirect if surah doesn't exist
  useEffect(() => {
    if (!currentSurah && !versesLoading) {
      notFound();
    }
  }, [currentSurah, versesLoading]);

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

  // Simulate loading verses
  useEffect(() => {
    setVersesLoading(true);
    const timer = setTimeout(() => {
      setVersesLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [surahId]);

  // Navigation handlers
  const handleNavigation = (direction: "prev" | "next") => {
    const currentIndex = mockSurahs.findIndex((s) => s.id === surahId);
    let newIndex: number;

    if (direction === "prev") {
      newIndex = Math.max(0, currentIndex - 1);
    } else {
      newIndex = Math.min(mockSurahs.length - 1, currentIndex + 1);
    }

    if (
      newIndex !== currentIndex &&
      newIndex >= 0 &&
      newIndex < mockSurahs.length
    ) {
      const newSurahId = mockSurahs[newIndex].id;
      router.push(`/surah/${newSurahId}`);
    }
  };

  // Audio handlers
  const handlePlayPause = (verseNumber: number) => {
    if (currentPlayingVerse === verseNumber) {
      // Stop current verse
      setCurrentPlayingVerse(null);
      // toast({
      //   title: "Audio paused",
      //   description: `Surah ${currentSurah?.name}, verse ${verseNumber}`,
      // });
    } else {
      // Play new verse
      setCurrentPlayingVerse(verseNumber);
      // toast({
      //   title: "Playing audio",
      //   description: `Surah ${currentSurah?.name}, verse ${verseNumber}`,
      // });

      // TODO: Implement actual audio playback
      // Example: playAudio(surahId, verseNumber);
    }
  };

  // Bookmark handlers
  const handleBookmarkToggle = (verseNumber: number) => {
    const newBookmarks = bookmarkedVerses.includes(verseNumber)
      ? bookmarkedVerses.filter((v) => v !== verseNumber)
      : [...bookmarkedVerses, verseNumber];

    setBookmarkedVerses(newBookmarks);
    localStorage.setItem(`bookmarks-${surahId}`, JSON.stringify(newBookmarks));

    // toast({
    //   title: bookmarkedVerses.includes(verseNumber)
    //     ? "Bookmark removed"
    //     : "Verse bookmarked",
    //   description: `Surah ${currentSurah?.name}, verse ${verseNumber}`,
    // });
  };

  // Navigation constraints
  const canNavigatePrev = surahId > 1;
  const canNavigateNext = surahId < mockSurahs.length;

  return (
    <VerseDisplay
      surah={surahData}
      verses={verses}
      isLoading={versesLoading}
      fontSize={fontSize}
      isPlaying={currentPlayingVerse !== null}
      currentPlayingVerse={currentPlayingVerse}
      onPlayPause={handlePlayPause}
      onNavigate={handleNavigation}
      canNavigatePrev={canNavigatePrev}
      canNavigateNext={canNavigateNext}
      bookmarkedVerses={bookmarkedVerses}
      onBookmarkToggle={handleBookmarkToggle}
    />
  );
};

export default SurahPage;
