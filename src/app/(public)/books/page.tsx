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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TBook } from "@/types/book";

const BooksPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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

  const BookCard: React.FC<{ book: TBook }> = ({ book }) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {book.isPremium && (
          <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            Premium
          </Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold group-hover:text-emerald-600 transition-colors">
          {book.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          by {book.author}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
          {book.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {book.language}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {book.pages} pages
          </Badge>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{book.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{book.downloads.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="default" className="flex-1" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          Read
        </Button>
        <Button variant="outline" className="flex-1" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );

  const BookListItem: React.FC<{ book: TBook }> = ({ book }) => (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <div className="flex p-4 gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-24 h-32 object-cover rounded"
          />
          {book.isPremium && (
            <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs">
              Premium
            </Badge>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold hover:text-emerald-600 transition-colors cursor-pointer">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{book.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{book.downloads.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-3 line-clamp-2">
            {book.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {book.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {book.language}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {book.pages} pages
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button variant="default" size="sm">
                <Eye className="w-4 h-4 mr-1" />
                Read
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-emerald-600" />
                Islamic Library
              </h1>
              <p className="text-gray-600 mt-1">
                Discover authentic Islamic books and resources
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2 items-center">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language === "all"
                        ? "All Languages"
                        : language.charAt(0).toUpperCase() + language.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredBooks.length} of {books.length} books
          </p>
        </div>

        {/* Books Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBooks.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </div>
        )}

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No books found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
