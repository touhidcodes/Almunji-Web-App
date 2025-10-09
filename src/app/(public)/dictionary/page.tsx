"use client";

import React, { useState, useMemo } from "react";
import { Search, Book, ChevronRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

// Type definitions
interface PersianWord {
  id: string;
  word: string;
  definition: string;
  pronunciation: string;
  persian: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  category: string;
  root: string;
  examples: string[];
  verses: string[];
}

type CategoryType =
  | "All"
  | "Divine Names"
  | "Divine Attributes"
  | "Worship"
  | "Scripture"
  | "Spiritual Concepts"
  | "Virtues"
  | "Faith";

// Sample Persian words data for demonstration
const persianWords: PersianWord[] = [
  {
    id: "1",
    word: "Khudāvand",
    pronunciation: "khu-daa-vand",
    persian: "خداوند",
    arabic: "الله",
    transliteration: "Khudāvand",
    meaning: "God, Lord, Allah",
    definition:
      "The supreme being, creator and ruler of the universe in Islamic belief",
    category: "Divine Names",
    root: "خ-د-ا",
    examples: ["خداوند بزرگ و بخشنده است", "خداوند عالمیان"],
    verses: ["2:255", "1:1", "112:1"],
  },
  {
    id: "2",
    word: "Namāz",
    pronunciation: "na-maaz",
    persian: "نماز",
    arabic: "الصلاة",
    transliteration: "Namāz",
    meaning: "Prayer, Salah",
    definition: "The ritual prayer performed by Muslims five times daily",
    category: "Worship",
    root: "ن-م-ز",
    examples: ["نماز خواندن", "وقت نماز"],
    verses: ["2:3", "4:103", "20:14"],
  },
  {
    id: "3",
    word: "Qur'ān",
    pronunciation: "qur-aan",
    persian: "قرآن",
    arabic: "القرآن",
    transliteration: "Qur'ān",
    meaning: "The Quran",
    definition:
      "The holy book of Islam, believed to be the word of God revealed to Prophet Muhammad",
    category: "Scripture",
    root: "ق-ر-آ",
    examples: ["قرآن کریم", "تلاوت قرآن"],
    verses: ["2:2", "17:9", "27:1"],
  },
  {
    id: "4",
    word: "Rahmat",
    pronunciation: "rah-mat",
    persian: "رحمت",
    arabic: "الرحمة",
    transliteration: "Rahmat",
    meaning: "Mercy, Compassion",
    definition:
      "Divine mercy and compassion, one of the most important attributes of God",
    category: "Divine Attributes",
    root: "ر-ح-م",
    examples: ["رحمت خداوند", "رحمت بی‌پایان"],
    verses: ["7:156", "6:12", "40:7"],
  },
  {
    id: "5",
    word: "Tawbah",
    pronunciation: "taw-bah",
    persian: "توبه",
    arabic: "التوبة",
    transliteration: "Tawbah",
    meaning: "Repentance",
    definition:
      "Sincere repentance and turning back to God after committing sins",
    category: "Spiritual Concepts",
    root: "ت-و-ب",
    examples: ["توبه کردن", "توبه نصوح"],
    verses: ["2:37", "4:110", "25:71"],
  },
  {
    id: "6",
    word: "Sabr",
    pronunciation: "sabr",
    persian: "صبر",
    arabic: "الصبر",
    transliteration: "Sabr",
    meaning: "Patience, Perseverance",
    definition:
      "Patience and perseverance in the face of difficulties, a highly valued virtue in Islam",
    category: "Virtues",
    root: "ص-ب-ر",
    examples: ["صبر جمیل", "اهل صبر"],
    verses: ["2:153", "16:126", "103:3"],
  },
  {
    id: "7",
    word: "Zakāt",
    pronunciation: "za-kaat",
    persian: "زکات",
    arabic: "الزكاة",
    transliteration: "Zakāt",
    meaning: "Obligatory Charity",
    definition:
      "The obligatory giving of a certain portion of wealth to charity, one of the Five Pillars of Islam",
    category: "Worship",
    root: "ز-ک-ا",
    examples: ["پرداخت زکات", "زکات مال"],
    verses: ["2:43", "9:103", "23:4"],
  },
  {
    id: "8",
    word: "Īmān",
    pronunciation: "ee-maan",
    persian: "ایمان",
    arabic: "الإيمان",
    transliteration: "Īmān",
    meaning: "Faith, Belief",
    definition:
      "Faith and belief in God, His messengers, and the teachings of Islam",
    category: "Faith",
    root: "ا-ی-م",
    examples: ["اهل ایمان", "ایمان آوردن"],
    verses: ["2:4", "49:14", "8:2"],
  },
];

const categories: CategoryType[] = [
  "All",
  "Divine Names",
  "Divine Attributes",
  "Worship",
  "Scripture",
  "Spiritual Concepts",
  "Virtues",
  "Faith",
];

export default function QuranPersianDictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [selectedWord, setSelectedWord] = useState<PersianWord | null>(null);

  // Filter words based on search term and category
  const filteredWords = useMemo(() => {
    let filtered = persianWords;

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (word) =>
          word.persian.includes(searchTerm) ||
          word.arabic.includes(searchTerm) ||
          word.transliteration.toLowerCase().includes(searchLower) ||
          word.meaning.toLowerCase().includes(searchLower) ||
          word.definition.toLowerCase().includes(searchLower)
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((word) => word.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleWordSelect = (word: PersianWord) => {
    setSelectedWord(word);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Book className="h-8 w-8 text-emerald-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              فرهنگ فارسی قرآن
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Persian Dictionary of Quranic Terms
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="lg:w-1/3">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Dictionary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search Persian, Arabic, or English..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-10"
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-1 top-1 h-8 w-8 p-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Filter by Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={(value: string) =>
                      setSelectedCategory(value as CategoryType)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                {(searchTerm || selectedCategory !== "All") && (
                  <Button
                    variant="outline"
                    onClick={clearSearch}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                )}

                {/* Results Count */}
                <div className="text-sm text-gray-500 pt-2 border-t">
                  {filteredWords.length} word
                  {filteredWords.length !== 1 ? "s" : ""} found
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Words List */}
          <div className="lg:w-1/3">
            <ScrollArea className="h-[600px]">
              <div className="space-y-3">
                {filteredWords.map((word) => (
                  <Card
                    key={word.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedWord?.id === word.id
                        ? "ring-2 ring-emerald-500 bg-emerald-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleWordSelect(word)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span
                              className="text-2xl font-bold text-right"
                              dir="rtl"
                            >
                              {word.persian}
                            </span>
                            <span className="text-lg text-gray-600" dir="rtl">
                              {word.arabic}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 italic">
                            {word.transliteration}
                          </p>
                          <p className="text-sm font-medium text-gray-700">
                            {word.meaning}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                          <Badge variant="secondary" className="text-xs">
                            {word.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredWords.length === 0 && (
                <Card className="text-center py-8">
                  <CardContent>
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      No words found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your search terms or filters
                    </p>
                  </CardContent>
                </Card>
              )}
            </ScrollArea>
          </div>

          {/* Word Details */}
          <div className="lg:w-1/3">
            {selectedWord ? (
              <Card className="sticky top-4">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="text-center">
                      <h2
                        className="text-3xl font-bold text-right mb-2"
                        dir="rtl"
                      >
                        {selectedWord.persian}
                      </h2>
                      <p className="text-xl text-gray-600 mb-1" dir="rtl">
                        {selectedWord.arabic}
                      </p>
                      <p className="text-lg italic text-gray-500">
                        {selectedWord.transliteration}
                      </p>
                    </div>
                    <Badge variant="outline" className="mx-auto w-fit">
                      {selectedWord.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Meaning */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Meaning
                    </h3>
                    <p className="text-lg font-medium text-emerald-600">
                      {selectedWord.meaning}
                    </p>
                  </div>

                  {/* Definition */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Definition
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedWord.definition}
                    </p>
                  </div>

                  {/* Root */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Root</h3>
                    <Badge variant="outline" className="text-lg">
                      {selectedWord.root}
                    </Badge>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Usage Examples
                    </h3>
                    <div className="space-y-2">
                      {selectedWord.examples.map((example, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-right font-medium" dir="rtl">
                            {example}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quranic References */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Quranic References
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedWord.verses.map((verse, index) => (
                        <Badge key={index} variant="secondary">
                          {verse}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Book className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Select a word to view details
                  </h3>
                  <p className="text-gray-500">
                    Click on any word from the list to see its detailed
                    information, definition, and Quranic references.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
