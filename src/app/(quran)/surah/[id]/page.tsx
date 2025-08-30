// app/(quran)/surah/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Play,
  Bookmark,
  Share2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

// Types
interface Surah {
  id: number;
  name: string;
  englishName: string;
  ayahCount: number;
  revelationType: "Makkah" | "Madinah";
}

interface Verse {
  number: number;
  arabic: string;
  translation: string;
}

interface SurahPageProps {
  params: {
    id: string;
  };
}

interface SurahHeaderProps {
  surah: Surah;
}

interface VerseCardProps {
  verse: Verse;
  isFirstVerse: boolean;
}

interface NavigationFooterProps {
  currentSurah: Surah;
}

// Sample Surah data - you can move this to a separate data file or API
const surahs: Surah[] = [
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
];

// Sample verses for Al Fatihah
const versesData: Record<number, Verse[]> = {
  1: [
    {
      number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation:
        "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    },
    {
      number: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
    },
    {
      number: 3,
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "The Entirely Merciful, the Especially Merciful.",
    },
    {
      number: 4,
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      translation: "Sovereign of the Day of Recompense.",
    },
    {
      number: 5,
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "It is You we worship and You we ask for help.",
    },
    {
      number: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path.",
    },
    {
      number: 7,
      arabic:
        "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      translation:
        "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    },
  ],
};

const SurahHeader = ({ surah }: SurahHeaderProps) => (
  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg mb-6">
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-3xl font-bold">Surah {surah.name}</h1>
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
          <Play className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
          <Bookmark className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
    <p className="text-green-100 mb-2">
      Ayah-{surah.ayahCount}, {surah.revelationType}
    </p>
    <div className="text-sm text-green-100">SAHEEH INTERNATIONAL</div>
  </div>
);

const VerseCard = ({ verse, isFirstVerse }: VerseCardProps) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-medium">
          {verse.number}
        </div>
        {isFirstVerse && (
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            SAHEEH INTERNATIONAL
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <Play className="w-4 h-4" />
        </button>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="text-right mb-4">
      <p
        className="text-2xl leading-relaxed font-arabic"
        style={{ fontFamily: "Arabic, serif" }}
      >
        {verse.arabic}
      </p>
    </div>

    <p className="text-gray-700 leading-relaxed">{verse.translation}</p>
  </div>
);

const NavigationFooter = ({ currentSurah }: NavigationFooterProps) => {
  const prevSurah = surahs.find((s) => s.id === currentSurah.id - 1);
  const nextSurah = surahs.find((s) => s.id === currentSurah.id + 1);

  return (
    <div className="flex items-center justify-between py-6 border-t border-gray-200 mt-8">
      {prevSurah ? (
        <Link
          href={`/surah/${prevSurah.id}`}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{prevSurah.name}</span>
        </Link>
      ) : (
        <div className="flex items-center space-x-2 px-4 py-2 text-gray-300">
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </div>
      )}

      <div className="text-sm text-gray-500">
        Surah {currentSurah.id} of 114
      </div>

      {nextSurah ? (
        <Link
          href={`/surah/${nextSurah.id}`}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
        >
          <span>{nextSurah.name}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div className="flex items-center space-x-2 px-4 py-2 text-gray-300">
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

export default function SurahPage({ params }: SurahPageProps) {
  const surahId = parseInt(params.id);
  const surah = surahs.find((s) => s.id === surahId);
  const verses = versesData[surahId] || [];

  if (!surah) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Surah Not Found
          </h1>
          <p className="text-gray-600">
            The requested surah could not be found.
          </p>
          <Link
            href="/surah/1"
            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Go to Al Fatihah
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SurahHeader surah={surah} />

      <div className="space-y-4">
        {verses.length > 0 ? (
          verses.map((verse, index) => (
            <VerseCard
              key={verse.number}
              verse={verse}
              isFirstVerse={index === 0}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">
              Verses for {surah.name} coming soon...
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Currently only Al Fatihah is available in this demo
            </p>
          </div>
        )}
      </div>

      <NavigationFooter currentSurah={surah} />
    </div>
  );
}
