import React, { useState } from 'react';
import { 
  BookOpen,
  Heart,
  Trash2,
  Plus,
  Search,
  Filter,
  Play,
  Star,
  Clock,
  Eye,
  BookMarked,
  Zap,
  TrendingUp
} from 'lucide-react';

// Import shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const QuranBookmarkDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample bookmark data
  const bookmarkData = {
    surahs: [
      {
        id: 1,
        name: "Al-Fatiha",
        arabicName: "الفاتحة",
        chapter: 1,
        verses: 7,
        progress: 100,
        lastRead: "2 hours ago",
        isFavorite: true
      },
      {
        id: 2,
        name: "Al-Baqarah",
        arabicName: "البقرة",
        chapter: 2,
        verses: 286,
        progress: 65,
        lastRead: "1 day ago",
        isFavorite: false
      },
      {
        id: 36,
        name: "Ya-Sin",
        arabicName: "يس",
        chapter: 36,
        verses: 83,
        progress: 90,
        lastRead: "3 days ago",
        isFavorite: true
      }
    ],
    ayahs: [
      {
        id: "2:255",
        title: "Ayat al-Kursi",
        surah: "Al-Baqarah",
        reference: "2:255",
        arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
        tags: ["protection", "daily"],
        savedDate: "Jan 15, 2024"
      },
      {
        id: "2:286",
        title: "Last Ayah of Al-Baqarah",
        surah: "Al-Baqarah", 
        reference: "2:286",
        arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
        translation: "Allah does not charge a soul except [with that within] its capacity.",
        tags: ["comfort", "guidance"],
        savedDate: "Jan 12, 2024"
      }
    ],
    books: [
      {
        id: "sahih-bukhari",
        title: "Sahih al-Bukhari",
        author: "Imam Bukhari",
        category: "Hadith",
        progress: 28,
        totalChapters: 97,
        currentChapter: 27,
        lastRead: "Yesterday",
        cover: "📚"
      },
      {
        id: "tafsir-kathir", 
        title: "Tafsir Ibn Kathir",
        author: "Ibn Kathir",
        category: "Tafsir",
        progress: 15,
        totalChapters: 114,
        currentChapter: 17,
        lastRead: "1 week ago",
        cover: "📖"
      },
      {
        id: