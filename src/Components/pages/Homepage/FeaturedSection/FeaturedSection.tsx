import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Users,
  BookOpen,
  Award,
  Globe,
  GraduationCap,
  Crown,
  Shield,
  MessageCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Trophy,
  Languages,
} from "lucide-react";

const FeaturedSection = () => {
  const instructors = [
    {
      id: 1,
      name: "Sheikh Ahmed Al-Qureshi",
      title: "Master of Quranic Sciences",
      specialization: "Quran Recitation & Tajweed",
      experience: "25+ Years",
      students: "15,420",
      courses: 12,
      rating: 4.9,
      totalReviews: 3245,
      location: "Cairo, Egypt",
      bio: "A renowned Quranic scholar with Ijazah in 10 different Qira'at. Sheikh Ahmed has dedicated his life to teaching the beautiful recitation of the Quran and has trained thousands of students worldwide.",
      achievements: [
        "International Quran Competition Judge",
        "Author of 'Tajweed Made Simple'",
        "Former Imam of Al-Noor Grand Mosque",
      ],
      languages: ["Arabic", "English", "Urdu"],
      image: "sheikh-ahmed",
      badge: "Master Scholar",
      badgeColor: "from-emerald-500 to-teal-600",
      expertise: [
        "Tajweed Rules",
        "Quran Memorization",
        "Voice Training",
        "Spiritual Development",
      ],
    },
    {
      id: 2,
      name: "Dr. Fatima Al-Nahawi",
      title: "Arabic Language Expert",
      specialization: "Classical Arabic & Grammar",
      experience: "20+ Years",
      students: "8,930",
      courses: 8,
      rating: 4.8,
      totalReviews: 2156,
      location: "Damascus, Syria",
      bio: "A distinguished Arabic linguist who has made Classical Arabic accessible to modern learners. Her innovative teaching methods have helped thousands master Arabic grammar and literature.",
      achievements: [
        "Published 5 Arabic Grammar Textbooks",
        "UNESCO Arabic Language Consultant",
        "Former Professor at Damascus University",
      ],
      languages: ["Arabic", "English", "French"],
      image: "dr-fatima",
      badge: "Language Master",
      badgeColor: "from-blue-500 to-indigo-600",
      expertise: [
        "Arabic Grammar",
        "Classical Literature",
        "Poetry Analysis",
        "Linguistic Research",
      ],
    },
    {
      id: 3,
      name: "Imam Muhammad Hassan",
      title: "Islamic History Scholar",
      specialization: "Seerah & Islamic Civilization",
      experience: "18+ Years",
      students: "12,340",
      courses: 15,
      rating: 4.9,
      totalReviews: 2893,
      location: "Medina, Saudi Arabia",
      bio: "An expert in Islamic history and biography of Prophet Muhammad (PBUH). His engaging storytelling brings Islamic history to life for students around the world.",
      achievements: [
        "Masters from Islamic University of Medina",
        "Author of 'Lessons from the Seerah'",
        "International Islamic History Conference Speaker",
      ],
      languages: ["Arabic", "English", "Malay"],
      image: "imam-muhammad",
      badge: "History Expert",
      badgeColor: "from-purple-500 to-violet-600",
      expertise: [
        "Prophetic Biography",
        "Islamic Civilization",
        "Historical Analysis",
        "Leadership Lessons",
      ],
    },
    {
      id: 4,
      name: "Dr. Omar Al-Muamalat",
      title: "Islamic Finance Specialist",
      specialization: "Shariah-Compliant Finance",
      experience: "15+ Years",
      students: "4,560",
      courses: 6,
      rating: 4.7,
      totalReviews: 987,
      location: "Kuala Lumpur, Malaysia",
      bio: "A leading expert in Islamic finance with extensive experience in both academia and industry. He helps Muslims navigate modern financial systems while staying true to Islamic principles.",
      achievements: [
        "PhD in Islamic Economics",
        "Consultant for Islamic Banks",
        "Published 50+ Research Papers",
      ],
      languages: ["Arabic", "English", "Malay"],
      image: "dr-omar",
      badge: "Finance Expert",
      badgeColor: "from-amber-500 to-orange-600",
      expertise: [
        "Islamic Banking",
        "Halal Investing",
        "Economic Principles",
        "Financial Planning",
      ],
    },
  ];

  const instructorStats = [
    { number: "25+", label: "Expert Instructors", icon: Users },
    { number: "150+", label: "Years Combined Experience", icon: Calendar },
    { number: "50K+", label: "Students Taught", icon: GraduationCap },
    { number: "15+", label: "Countries Represented", icon: Globe },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-8 shadow-xl">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Learn from{" "}
            <span className="text-emerald-600">Renowned Scholars</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our world-class instructors are qualified Islamic scholars with
            decades of experience, dedicated to authentic Islamic education and
            student success.
          </p>
        </div>

        {/* Instructor Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {instructorStats.map((stat, index) => (
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

        {/* Featured Instructors Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <Card
              key={instructor.id}
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Instructor Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <span
                        className={`px-2 py-1 bg-gradient-to-r ${instructor.badgeColor} text-white text-xs font-bold rounded-full shadow-lg`}
                      >
                        <Crown className="inline h-3 w-3 mr-1" />
                        {instructor.badge}
                      </span>
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-1">
                      {instructor.title}
                    </p>
                    <p className="text-slate-500 text-sm mb-4">
                      {instructor.specialization}
                    </p>

                    {/* Rating and Stats */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="font-semibold text-slate-700">
                          {instructor.rating}
                        </span>
                        <span className="text-sm text-slate-500">
                          ({instructor.totalReviews.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {instructor.students} students
                        </span>
                      </div>
                    </div>

                    {/* Location and Experience */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{instructor.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{instructor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-600 leading-relaxed mb-6 mt-4">
                  {instructor.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full border border-emerald-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">
                    Key Achievements:
                  </h4>
                  <div className="space-y-2">
                    {instructor.achievements
                      .slice(0, 2)
                      .map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Trophy className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <Languages className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      Teaches in: {instructor.languages.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Courses
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl">
          <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Learn from the <span className="text-emerald-600">Best</span>
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our instructors are carefully selected based on their Islamic
            scholarship, teaching excellence, and commitment to authentic
            Islamic education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Meet All Instructors
              <Users className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Browse Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
