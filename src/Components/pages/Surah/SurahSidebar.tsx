"use client";

import React from "react";
import { useState } from "react";
import {
  Search,
  BookOpen,
  MapPin,
  Hash,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Surah {
  id: number;
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
}

interface SidebarProps {
  surahs: Surah[];
  selectedSurahId: number;
  onSurahSelect: (surahId: number) => void;
  isOpen: boolean;
  onToggle: () => void;
  isLoading?: boolean;
  className?: string;
}

const SidebarSkeleton = () => (
  <div className="p-4 space-y-4">
    <Skeleton className="h-10 w-full" />
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="space-y-2 p-4 rounded-lg border">
        <div className="flex justify-between items-start">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-20" />
      </div>
    ))}
  </div>
);

const SurahCard = ({
  surah,
  isSelected,
  onClick,
}: {
  surah: Surah;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full text-left p-4 rounded-xl border transition-all duration-200 hover:shadow-md group",
      isSelected
        ? "bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 shadow-sm"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
    )}
  >
    <div className="flex justify-between items-start mb-3">
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
          isSelected
            ? "bg-emerald-600 text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-emerald-100 group-hover:text-emerald-600"
        )}
      >
        {surah.id}
      </div>
      <Badge
        variant={isSelected ? "default" : "secondary"}
        className={cn(
          "text-xs",
          isSelected
            ? "bg-emerald-600 hover:bg-emerald-700"
            : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
        )}
      >
        <MapPin className="w-3 h-3 mr-1" />
        {surah.revelationPlace}
      </Badge>
    </div>

    <div className="space-y-2">
      <h3
        className={cn(
          "font-semibold text-base leading-tight",
          isSelected
            ? "text-emerald-900 dark:text-emerald-100"
            : "text-gray-900 dark:text-gray-100"
        )}
      >
        {surah.surahName}
      </h3>

      <p
        className={cn(
          "text-xl font-arabic text-right leading-relaxed",
          isSelected
            ? "text-emerald-800 dark:text-emerald-200"
            : "text-gray-700 dark:text-gray-300"
        )}
        dir="rtl"
        style={{ fontFamily: "Amiri, 'Noto Naskh Arabic', serif" }}
      >
        {surah.surahNameArabic}
      </p>

      <p
        className={cn(
          "text-sm font-medium",
          isSelected
            ? "text-emerald-700 dark:text-emerald-300"
            : "text-gray-600 dark:text-gray-400"
        )}
      >
        {surah.surahNameTranslation}
      </p>
    </div>

    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-600">
      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
        <Hash className="w-3 h-3" />
        <span>{surah.totalAyah} verses</span>
      </div>

      <ChevronRight
        className={cn(
          "w-4 h-4 transition-transform group-hover:translate-x-1",
          isSelected
            ? "text-emerald-600"
            : "text-gray-400 group-hover:text-emerald-600"
        )}
      />
    </div>
  </button>
);

const SurahSidebar: React.FC<SidebarProps> = ({
  surahs,
  selectedSurahId,
  onSurahSelect,
  isOpen,
  onToggle,
  isLoading = false,
  className,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.surahName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.surahNameTranslation
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      surah.surahNameArabic.includes(searchQuery) ||
      surah.id.toString().includes(searchQuery)
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out",
          "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800",
          "flex flex-col",
          isOpen
            ? "translate-x-0 w-96"
            : "-translate-x-full lg:translate-x-0 lg:w-16",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div
            className={cn(
              "flex items-center gap-3",
              !isOpen && "lg:justify-center"
            )}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900">
              <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            {isOpen && (
              <div>
                <h1 className="font-bold text-lg text-gray-900 dark:text-white">
                  Quran Majeed
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {surahs.length} Surahs
                </p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn("h-8 w-8 p-0", !isOpen && "lg:hidden")}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Content */}
        {isOpen && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search surahs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                />
              </div>

              {searchQuery && (
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {filteredSurahs.length} of {surahs.length} surahs
                </div>
              )}
            </div>

            {/* Surah List */}
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-3">
                {isLoading ? (
                  <SidebarSkeleton />
                ) : filteredSurahs.length > 0 ? (
                  filteredSurahs.map((surah) => (
                    <SurahCard
                      key={surah.id}
                      surah={surah}
                      isSelected={selectedSurahId === surah.id}
                      onClick={() => onSurahSelect(surah.id)}
                    />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      No surahs found
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                      Try adjusting your search
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        )}

        {/* Collapsed Toggle Button */}
        {!isOpen && (
          <div className="p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="w-full h-10 justify-center"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </aside>
    </>
  );
};

export default SurahSidebar;
