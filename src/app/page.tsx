"use client";

import React, { useState } from "react";
import {
  Book,
  Search,
  Headphones,
  BookOpen,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

export default function AlmunjiHomepage() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Read Quran",
      description: "Access the complete Quran with multiple translations",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Listen",
      description: "Beautiful recitations from renowned Qaris",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search",
      description: "Find verses and topics instantly",
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Learn",
      description: "Study Tafsir and Islamic resources",
    },
  ];

  return (
    <div
      className={
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-emerald-50 to-white text-gray-900"
      }
    >
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Book className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-700">Almunji</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-emerald-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Read
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Listen
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Learn
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block hover:text-emerald-600 transition">
              Home
            </a>
            <a href="#" className="block hover:text-emerald-600 transition">
              Read
            </a>
            <a href="#" className="block hover:text-emerald-600 transition">
              Listen
            </a>
            <a href="#" className="block hover:text-emerald-600 transition">
              Learn
            </a>
            <a href="#" className="block hover:text-emerald-600 transition">
              About
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-emerald-800 dark:text-emerald-400">
          Experience the Holy Quran
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Read, listen, and learn from the divine words of Allah with Almunji
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Surah, verse, or topic..."
              className="w-full px-6 py-4 pr-12 rounded-full border-2 border-emerald-300 focus:border-emerald-500 focus:outline-none text-gray-900 shadow-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition shadow-lg font-semibold">
            Start Reading
          </button>
          <button className="px-8 py-3 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-50 dark:hover:bg-gray-700 transition shadow-lg font-semibold border-2 border-emerald-600">
            Browse Surahs
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800 dark:text-emerald-400">
          Explore Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-emerald-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-800 dark:text-emerald-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Verse Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 shadow-2xl text-white">
          <p className="text-sm uppercase tracking-wide mb-4 text-emerald-200">
            Verse of the Day
          </p>
          <p className="text-3xl md:text-4xl font-arabic leading-relaxed mb-6 text-right">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p className="text-xl mb-4 italic">
            "In the name of Allah, the Most Gracious, the Most Merciful"
          </p>
          <p className="text-emerald-200">Al-Fatiha 1:1</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Book className="w-6 h-6" />
                <span className="text-xl font-bold">Almunji</span>
              </div>
              <p className="text-emerald-200">
                Your gateway to understanding the Quran
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-emerald-200">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Quran
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tafsir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Recitations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-emerald-200">
                Stay connected with us on social media
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
            <p>&copy; 2025 Almunji. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
