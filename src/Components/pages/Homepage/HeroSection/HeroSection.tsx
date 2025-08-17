import React from "react";
import { Star, Play, Book, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 px-4 py-2 text-sm font-medium w-fit">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Life Through Quran
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Make Self-Purification
                <br />
                by Reading Quran
                <span className="ml-3 w-10 h-10 bg-teal-600 rounded-lg text-white text-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  ☪
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Welcome to our Quran Reading Platform, where you can embark on a
                transformative journey through the sacred text of Islam.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1">
                <Book className="w-5 h-5 mr-2" />
                Start Reading
              </Button>

              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1">
                <Play className="w-5 h-5 mr-2" />
                Listen Audio
              </Button>
            </div>

            {/* Rating Section */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <span className="font-bold text-xl text-gray-700">(4.9)</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                100K+ ratings on Google Play & App Store
              </p>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Image - Quran Book */}
              <div className="relative group">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-500 via-purple-400 to-pink-400 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-1 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="flex items-center justify-center h-full p-6">
                    <div className="bg-teal-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20">
                      <div className="w-28 h-36 bg-gradient-to-b from-teal-700 to-teal-900 rounded-lg flex flex-col items-center justify-center text-white shadow-inner">
                        <div className="text-3xl mb-3 drop-shadow-lg">☪</div>
                        <div className="text-xs font-arabic opacity-90 text-center leading-relaxed">
                          القرآن
                          <br />
                          الكريم
                        </div>
                        <div className="w-16 h-px bg-gold-400 mt-2 opacity-70"></div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-6 left-4 w-1 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Right Image - Open Quran */}
              <div className="relative mt-8 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 group-hover:-rotate-1 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl w-full border border-white/50">
                      {/* Quran Pages Mockup */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Left Page */}
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-4/5"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-3/4"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-5/6"></div>
                        </div>
                        {/* Right Page */}
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-4/5"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-3/4"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full w-5/6"></div>
                          <div className="h-1.5 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      {/* Golden separator */}
                      <div className="mt-3 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      {/* Translation text */}
                      <div className="mt-2 space-y-1">
                        <div className="h-0.5 bg-gray-300 rounded-full w-full"></div>
                        <div className="h-0.5 bg-gray-300 rounded-full w-4/5"></div>
                        <div className="h-0.5 bg-gray-300 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-4 right-3 w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-10 h-10 bg-yellow-400/80 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 bg-teal-400/60 rounded-full blur-sm animate-pulse delay-1000"></div>
            <div className="absolute -bottom-6 left-1/3 w-6 h-6 bg-purple-400/70 rounded-full blur-sm animate-pulse delay-500"></div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border border-teal-300 rounded-full"></div>
              <div className="absolute bottom-20 right-5 w-16 h-16 border border-purple-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
