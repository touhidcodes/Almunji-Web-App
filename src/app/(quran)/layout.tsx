"use client";

import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Settings,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import SurahSidebar from "@/components/Pages/Surah/SurahSidebar";

interface Surah {
  id: number;
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
}

interface QuranLayoutProps {
  children: React.ReactNode;
  surahs: Surah[];
  selectedSurahId: number;
  onSurahSelect: (surahId: number) => void;
  currentSurah?: Surah;
  isLoading?: boolean;
}

export const QuranLayout = ({
  children,
  surahs,
  selectedSurahId,
  onSurahSelect,
  currentSurah,
  isLoading = false,
}: QuranLayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [fontSize, setFontSize] = useState([18]);
  const [volume, setVolume] = useState([70]);

  // Handle dark mode
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left side */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="h-9 w-9 p-0 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>

            {/* Current Surah Info */}
            {currentSurah && (
              <div className="hidden sm:flex items-center gap-3">
                <Badge variant="outline" className="font-medium">
                  {currentSurah.id}
                </Badge>
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {currentSurah.surahName}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {currentSurah.surahNameTranslation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Audio Controls */}
            <div className="hidden md:flex items-center gap-1 mr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlayPause}
                className={cn(
                  "h-9 w-9 p-0",
                  isPlaying && "text-emerald-600 dark:text-emerald-400"
                )}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="h-9 w-9 p-0"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>

              {/* Volume Control */}
              <div className="hidden lg:flex items-center gap-2 w-20">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={5}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Font Size Controls */}
            <div className="hidden sm:flex items-center gap-1 mr-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize([Math.max(14, fontSize[0] - 2)])}
                disabled={fontSize[0] <= 14}
                className="h-8 px-2 text-xs font-medium"
              >
                A-
              </Button>
              <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[2rem] text-center">
                {fontSize[0]}px
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFontSize([Math.min(28, fontSize[0] + 2)])}
                disabled={fontSize[0] >= 28}
                className="h-8 px-2 text-xs font-medium"
              >
                A+
              </Button>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="h-9 w-9 p-0"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Settings Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Reading Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Mobile Font Size Control */}
                <div className="sm:hidden px-2 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Font Size</span>
                    <span className="text-xs text-gray-500">
                      {fontSize[0]}px
                    </span>
                  </div>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    min={14}
                    max={28}
                    step={2}
                  />
                </div>

                {/* Mobile Volume Control */}
                <div className="md:hidden px-2 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Volume</span>
                    <span className="text-xs text-gray-500">{volume[0]}%</span>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={5}
                  />
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <SurahSidebar
          surahs={surahs}
          selectedSurahId={selectedSurahId}
          onSurahSelect={onSurahSelect}
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
          isLoading={isLoading}
        />

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 min-h-[calc(100vh-4rem)] transition-all duration-300",
            isSidebarOpen ? "lg:ml-0" : "lg:ml-0"
          )}
        >
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement<any>, {
                    fontSize: fontSize[0],
                    isPlaying,
                    onPlayPause: togglePlayPause,
                  })
                : child
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
