import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Star,
  Download,
  Eye,
  Filter,
  Grid,
  List,
  TrendingUp,
  Sparkles,
  X,
} from "lucide-react";

interface TBook {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  language: string;
  pages: number;
  rating: number;
  downloads: number;
  coverImage: string;
  isPremium: boolean;
}

const BooksPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  const books: TBook[] = [
    {
      id: 1,
      title: "Tafsir Ibn Kathir",
      author: "Ibn Kathir",
      description:
        "A comprehensive commentary on the Quran, providing detailed explanations and interpretations of verses.",
      category: "tafsir",
      language: "english",
      pages: 3200,
      rating: 4.9,
      downloads: 15420,
      coverImage:
        "https://images.unsplash.com/photo-1544716278-e513176f20a5?w=300&h=400&fit=crop&crop=center",
      isPremium: false,
    },
    {
      id: 2,
      title: "Sahih Al-Bukhari",
      author: "Imam Al-Bukhari",
      description:
        "The most authentic collection of Hadith literature, essential for understanding Islamic teachings.",
      category: "hadith",
      language: "arabic",
      pages: 2400,
      rating: 5.0,
      downloads: 23150,
      coverImage:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center",
      isPremium: true,
    },
    {
      id: 3,
      title: "The Noble Quran Translation",
      author: "Muhammad Muhsin Khan",
      description:
        "Clear and accurate English translation of the Holy Quran with detailed footnotes.",
      category: "translation",
      language: "english",
      pages: 850,
      rating: 4.8,
      downloads: 45200,
      coverImage:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=300&h=400&fit=crop&crop=center",
      isPremium: false,
    },
    {
      id: 4,
      title: "Fiqh As-Sunnah",
      author: "Sayyid Sabiq",
      description:
        "Comprehensive guide to Islamic jurisprudence based on Quran and Sunnah.",
      category: "fiqh",
      language: "english",
      pages: 1200,
      rating: 4.7,
      downloads: 8900,
      coverImage:
        "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?w=300&h=400&fit=crop&crop=center",
      isPremium: false,
    },
    {
      id: 5,
      title: "Riyad As-Salihin",
      author: "Imam An-Nawawi",
      description:
        "Gardens of the Righteous - a collection of authentic Hadiths on various aspects of Islamic life.",
      category: "hadith",
      language: "arabic",
      pages: 680,
      rating: 4.9,
      downloads: 12300,
      coverImage:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=center",
      isPremium: false,
    },
    {
      id: 6,
      title: "Stories of the Prophets",
      author: "Ibn Kathir",
      description:
        "Detailed accounts of the lives and teachings of the Prophets mentioned in the Quran.",
      category: "biography",
      language: "english",
      pages: 920,
      rating: 4.6,
      downloads: 18700,
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center",
      isPremium: true,
    },
  ];

  const categories = [
    "all",
    "tafsir",
    "hadith",
    "translation",
    "fiqh",
    "biography",
  ];
  const languages = ["all", "english", "arabic", "urdu"];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || book.category === selectedCategory;
    const matchesLanguage =
      selectedLanguage === "all" || book.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "popular") return b.downloads - a.downloads;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "pages") return b.pages - a.pages;
    return 0;
  });

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedLanguage !== "all",
    searchQuery !== "",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLanguage("all");
  };

  const mostPopular = books.sort((a, b) => b.downloads - a.downloads)[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                  <BookOpen className="w-10 h