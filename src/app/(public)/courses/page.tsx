import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Play,
  Award,
  Filter,
  Search,
  ChevronDown,
  Globe,
  Heart,
  Shield,
  Crown,
  Lightbulb,
  Moon,
  Sun,
  Compass,
  GraduationCap,
  Volume2,
  FileText,
  Video,
  Headphones,
  CheckCircle,
  TrendingUp,
  Flame,
  Sparkles,
} from "lucide-react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = [
    { name: "All", icon: BookOpen, count: 127 },
    { name: "Quran Studies", icon: Crown, count: 28 },
    { name: "Arabic Language", icon: Globe, count: 24 },
    { name: "Islamic History", icon: Shield, count: 18 },
    { name: "Hadith Studies", icon: FileText, count: 16 },
    { name: "Fiqh & Jurisprudence", icon: Award, count: 14 },
    { name: "Spirituality", icon: Heart, count: 12 },
    { name: "Islamic Finance", icon: TrendingUp, count: 8 },
    { name: "Da'wah & Community", icon: Users, count: 7 },
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Quran Recitation & Tajweed",
      instructor: "Sheikh Ahmed Al-Qureshi",
      category: "Quran Studies",
      level: "Beginner",
      duration: "12 weeks",
      lessons: 48,
      students: 15420,
      rating: 4.9,
      price: 89,
      originalPrice: 129,
      image: "quran-tajweed",
      description:
        "Master the art of beautiful Quran recitation with proper Tajweed rules and pronunciation.",
      features: [
        "Live practice sessions",
        "Audio recordings",
        "Personalized feedback",
        "Certificate included",
      ],
      badge: "Bestseller",
      badgeColor: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      title: "Arabic Grammar Mastery Course",
      instructor: "Dr. Fatima Al-Nahawi",
      category: "Arabic Language",
      level: "Intermediate",
      duration: "16 weeks",
      lessons: 64,
      students: 8930,
      rating: 4.8,
      price: 129,
      originalPrice: 179,
      image: "arabic-grammar",
      description:
        "Comprehensive Arabic grammar course covering Nahw and Sarf with practical applications.",
      features: [
        "Interactive exercises",
        "Grammar charts",
        "Weekly assessments",
        "Lifetime access",
      ],
      badge: "Popular",
      badgeColor: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      title: "Prophetic Biography (Seerah) Complete",
      instructor: "Imam Muhammad Hassan",
      category: "Islamic History",
      level: "Beginner",
      duration: "10 weeks",
      lessons: 40,
      students: 12340,
      rating: 4.9,
      price: 79,
      originalPrice: 119,
      image: "seerah-course",
      description:
        "Journey through the life of Prophet Muhammad (PBUH) with detailed analysis and lessons.",
      features: [
        "Historical maps",
        "Timeline resources",
        "Discussion forums",
        "Mobile app access",
      ],
      badge: "Most Loved",
      badgeColor: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "Islamic Finance & Banking Fundamentals",
      instructor: "Dr. Omar Al-Muamalat",
      category: "Islamic Finance",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 32,
      students: 4560,
      rating: 4.7,
      price: 149,
      originalPrice: 199,
      image: "islamic-finance",
      description:
        "Understanding Shariah-compliant finance, banking, and investment principles.",
      features: [
        "Case studies",
        "Real-world examples",
        "Industry insights",
        "Professional certificate",
      ],
      badge: "New",
      badgeColor: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      title: "Hadith Collection Study: Sahih Bukhari",
      instructor: "Sheikh Abdullah Al-Muhaddith",
      category: "Hadith Studies",
      level: "Intermediate",
      duration: "20 weeks",
      lessons: 80,
      students: 6780,
      rating: 4.8,
      price: 169,
      originalPrice: 229,
      image: "hadith-bukhari",
      description:
        "In-depth study of selected Hadith from Sahih Bukhari with detailed commentary.",
      features: [
        "Arabic text included",
        "Chain of narration analysis",
        "Weekly quizzes",
        "Study groups",
      ],
      badge: "Scholarly",
      badgeColor: "from-purple-500 to-violet-600",
    },
    {
      id: 6,
      title: "Islamic Parenting & Family Values",
      instructor: "Dr. Aisha Al-Usra",
      category: "Spirituality",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 24,
      students: 9870,
      rating: 4.9,
      price: 69,
      originalPrice: 99,
      image: "islamic-parenting",
      description: "Raising children with Islamic values in the modern world.",
      features: [
        "Practical tips",
        "Real scenarios",
        "Parent community",
        "Resource library",
      ],
      badge: "Family Choice",
      badgeColor: "from-green-500 to-emerald-600",
    },
  ];

  const courseStats = [
    { number: "127+", label: "Courses Available", icon: BookOpen },
    { number: "50K+", label: "Active Students", icon: Users },
    { number: "98%", label: "Completion Rate", icon: Award },
    { number: "4.8/5", label: "Average Rating", icon: Star },
  ];

  const learningPaths = [
    {
      title: "Beginner's Islamic Foundation",
      courses: 8,
      duration: "6 months",
      description:
        "Complete foundation in Islamic beliefs, practices, and basic Arabic",
      icon: Compass,
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Advanced Quranic Studies",
      courses: 12,
      duration: "1 year",
      description:
        "Deep dive into Quran interpretation, memorization, and recitation mastery",
      icon: Crown,
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Islamic Scholar Track",
      courses: 20,
      duration: "2 years",
      description: "Comprehensive program covering all major Islamic sciences",
      icon: GraduationCap,
      color: "from-purple-400 to-violet-500",
    },
  ];

  const filteredCourses = featuredCourses.filter((course) => {
    const categoryMatch =
      selectedCategory === "All" || course.category === selectedCategory;
    const levelMatch =
      selectedLevel === "All" || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-8 shadow-xl">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Discover <span className="text-emerald-600">Islamic Courses</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn from qualified scholars and deepen your understanding of Islam
            through comprehensive, authentic, and engaging courses designed for
            every level.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, topics, or instructors..."
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full shadow-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {courseStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Choose Your{" "}
              <span className="text-emerald-600">Learning Path</span>
            </h2>
            <p className="text-xl text-slate-600">
              Structured programs designed to guide your Islamic education
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-3xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <path.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {path.title}
                  </h3>
                  <div className="flex justify-center space-x-6 mb-4 text-sm text-slate-500">
                    <span>{path.courses} Courses</span>
                    <span>{path.duration}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {path.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full font-semibold"
                  >
                    View Path
                    <Compass className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="font-semibold text-slate-700">Filter by:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-600">Level:</span>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedLevel === level
                      ? "bg-teal-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {course.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${course.badgeColor} text-white text-xs font-bold rounded-full shadow-lg`}
                    >
                      <Sparkles className="inline h-3 w-3 mr-1" />
                      {course.badge}
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-white/90 text-emerald-600 text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium text-slate-600">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-500 mb-3">
                  By {course.instructor}
                </p>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Video className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-emerald-600">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
                    Save{" "}
                    {Math.round(
                      ((course.originalPrice - course.price) /
                        course.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Enroll Now
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20 rounded-3xl shadow-xl text-center text-white">
          <Crown className="h-16 w-16 mx-auto mb-8 text-emerald-200" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Islamic Learning Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students worldwide who are deepening their faith
            and knowledge through our comprehensive Islamic education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Start Free Trial
              <Flame className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Browse All Courses
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
