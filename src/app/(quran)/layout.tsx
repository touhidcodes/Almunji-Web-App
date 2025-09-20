"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Moon,
  Sun,
  Settings,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
  Minus,
  Plus,
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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import SurahSidebar from "@/components/Pages/Surah/SurahSidebar";

// Mock data - replace with your actual data source
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

interface SurahLayoutProps {
  children: React.ReactNode;
}

const SurahLayout: React.FC<SurahLayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [fontSize, setFontSize] = useState([18]);
  const [volume, setVolume] = useState([70]);
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();

  // Get current surah info from pathname
  const currentSurahId = pathname.startsWith("/surah/")
    ? parseInt(pathname.split("/")[2])
    : null;
  const currentSurah = mockSurahs.find((s) => s.id === currentSurahId);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }

    // Get saved settings
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      setFontSize([parseInt(savedFontSize)]);
    }

    const savedVolume = localStorage.getItem("volume");
    if (savedVolume) {
      setVolume([parseInt(savedVolume)]);
    }

    const savedSidebarState = localStorage.getItem("sidebarOpen");
    if (savedSidebarState !== null) {
      setIsSidebarOpen(savedSidebarState === "true");
    }

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize[0].toString());
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem("volume", volume[0].toString());
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", isSidebarOpen.toString());
  }, [isSidebarOpen]);

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

  const adjustFontSize = (increment: boolean) => {
    const newSize = increment
      ? Math.min(28, fontSize[0] + 2)
      : Math.max(12, fontSize[0] - 2);
    setFontSize([newSize]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
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
                <Badge
                  variant="outline"
                  className="font-medium border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                >
                  {currentSurah.id}
                </Badge>
                <Separator orientation="vertical" className="h-6" />
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {currentSurah.name}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {currentSurah.nameTranslation}
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
                  "h-9 w-9 p-0 transition-colors",
                  isPlaying &&
                    "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950"
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
                className={cn(
                  "h-9 w-9 p-0",
                  isMuted && "text-red-500 dark:text-red-400"
                )}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>

              {/* Volume Control - Desktop */}
              <div className="hidden lg:flex items-center gap-2 w-24 ml-2">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={5}
                  className="flex-1"
                  disabled={isMuted}
                />
              </div>
            </div>

            {/* Font Size Controls - Desktop */}
            <div className="hidden sm:flex items-center gap-1 mr-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => adjustFontSize(false)}
                disabled={fontSize[0] <= 12}
                className="h-7 w-7 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[2.5rem] text-center font-medium">
                {fontSize[0]}px
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => adjustFontSize(true)}
                disabled={fontSize[0] >= 28}
                className="h-7 w-7 p-0"
              >
                <Plus className="h-3 w-3" />
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
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Reading Settings
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Mobile Font Size Control */}
                <div className="sm:hidden px-3 py-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Font Size</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {fontSize[0]}px
                    </span>
                  </div>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    min={12}
                    max={28}
                    step={2}
                  />
                </div>

                <DropdownMenuSeparator className="sm:hidden" />

                {/* Mobile Audio Controls */}
                <div className="md:hidden space-y-3 px-3 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Audio</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={togglePlayPause}
                        className="h-8 w-8 p-0"
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
                        className="h-8 w-8 p-0"
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Volume</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {volume[0]}%
                    </span>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={5}
                    disabled={isMuted}
                  />
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={toggleDarkMode}
                  className="cursor-pointer"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Switch to Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Switch to Dark Mode
                    </>
                  )}
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={toggleSidebar}
                  className="cursor-pointer lg:hidden"
                >
                  <Menu className="mr-2 h-4 w-4" />
                  {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <SurahSidebar
          surahs={mockSurahs}
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
          isLoading={isLoading}
        />

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 transition-all duration-300 min-h-[calc(100vh-4rem)]",
            "bg-gray-50 dark:bg-gray-900"
          )}
        >
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            {/* Pass props to children */}
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child, {
                    fontSize: fontSize[0],
                    isPlaying,
                    onPlayPause: togglePlayPause,
                  } as any)
                : child
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SurahLayout;
