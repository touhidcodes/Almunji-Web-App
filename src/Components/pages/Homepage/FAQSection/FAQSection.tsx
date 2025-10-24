import React, { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Volume2,
  Search,
  Globe,
  Heart,
  Moon,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is Almunji and how does it help me?",
    answer:
      "Almunji is your complete digital companion for studying the Holy Quran. We combine authentic Arabic text, precise translations in 40+ languages, word-by-word analysis, audio recitations from world-renowned Qaris, and powerful study tools. Whether you're memorizing, learning tajweed, or simply reading for reflection, Almunji makes your journey meaningful and accessible.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "How can I listen to Quran recitations?",
    answer:
      "Experience the beauty of Quranic recitation with our extensive audio library. Choose from over 20 renowned reciters including Sheikh Mishary Rashid, Abdul Basit, and Sudais. Control playback speed from 0.5x to 2x, enable repeat mode for memorization, and download verses for offline listening. Audio is perfectly synchronized with the text highlighting each word as it's recited.",
    icon: <Volume2 className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "What languages and translations are available?",
    answer:
      "Almunji provides translations in over 40 languages from trusted scholars. Popular options include English (Sahih International, Dr. Mustafa Khattab, Yusuf Ali), Urdu (Maududi, Jalandhry), French, Spanish, Turkish, Malay, Indonesian, Bengali, and more. You can view multiple translations side-by-side and switch between them instantly.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    category: "Features",
    question: "How does the advanced search work?",
    answer:
      "Our intelligent search engine lets you find exactly what you're looking for. Search by keywords, topics, Surah names, or verse references. Use filters for Makki/Madani revelations, specific Juz or Para, and search within translations. The fuzzy search understands different spellings and transliterations, making it easy to find verses even if you're unsure of the exact wording.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    category: "Account & Personalization",
    question: "What can I do with a free account?",
    answer:
      "Create a free account to unlock powerful personalization features: bookmark unlimited verses with custom tags, track your reading progress automatically, create and organize collections for different topics, sync your data across all devices, set daily reading goals with reminders, and access your complete reading history. Your spiritual journey, perfectly organized.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    category: "Learning Tools",
    question: "Does Almunji help with memorization (Hifz)?",
    answer:
      "Absolutely! Our memorization toolkit includes: verse-by-verse repeat mode with customizable intervals, audio-only mode to test retention, progress tracking for each Surah, spaced repetition reminders, and the ability to hide translations to focus on Arabic text. Many huffaz worldwide use Almunji to strengthen their memorization.",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    category: "Mobile & Offline",
    question: "Can I use Almunji offline on my phone?",
    answer:
      "Yes! Download our mobile apps for iOS and Android to access the complete Quran offline. Pre-download your preferred translations, audio recitations, and tafsir to read without internet. The app is lightweight, battery-efficient, and includes features like night mode, adjustable fonts, and gesture controls for easy navigation.",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    category: "Trust & Authenticity",
    question: "How do you ensure Quranic text accuracy?",
    answer:
      "We take authenticity seriously. Our Arabic text is sourced from the Mushaf of Madinah (King Fahd Complex) and verified by Islamic scholars. All translations are from recognized authorities and clearly attributed. We follow Uthmani script standards and undergo regular audits. Any corrections are reviewed by qualified scholars before implementation.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    category: "Community",
    question: "Is Almunji really free? How is it funded?",
    answer:
      "Yes, Almunji is 100% free and always will be. We believe the Word of Allah should be accessible to everyone without barriers. We're funded entirely through voluntary donations from our generous community. There are no ads, no subscriptions, and no hidden costs. If Almunji benefits you, consider supporting us to help others access the Quran.",
    icon: <Users className="w-5 h-5" />,
  },
];

const categories = Array.from(new Set(faqData.map((faq) => faq.category)));

export default function AlmunjiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
              <BookOpen className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-200 text-sm font-medium">
                Support Center
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Everything you need to know about Almunji and how we help you
            connect with the Holy Quran
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-white text-emerald-900 shadow-lg shadow-emerald-500/20"
                : "bg-emerald-800/40 text-emerald-100 hover:bg-emerald-700/50 backdrop-blur-sm border border-emerald-600/30"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-emerald-900 shadow-lg shadow-emerald-500/20"
                  : "bg-emerald-800/40 text-emerald-100 hover:bg-emerald-700/50 backdrop-blur-sm border border-emerald-600/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFAQs.map((faq, index) => {
            const actualIndex = faqData.indexOf(faq);
            const isOpen = openIndex === actualIndex;

            return (
              <div
                key={actualIndex}
                className={`backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-2xl shadow-emerald-500/20 border border-emerald-200"
                    : "bg-white/90 hover:bg-white shadow-lg hover:shadow-xl border border-white/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(actualIndex)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-start justify-between hover:bg-emerald-50/50 transition-colors duration-200 group"
                >
                  <div className="flex items-start space-x-4 flex-1 pr-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg"
                          : "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200"
                      }`}
                    >
                      {faq.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-600 transition-transform duration-300 flex-shrink-0 mt-1 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6">
                    <div className="pl-16">
                      <div className="w-full h-px bg-gradient-to-r from-emerald-200 via-teal-200 to-transparent mb-4"></div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Join Our Community
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with millions of users worldwide. Share insights, ask
              questions, and grow together.
            </p>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Join Community
            </button>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need More Help?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Can't find what you're looking for? Our dedicated support team is
              ready to assist you.
            </p>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
