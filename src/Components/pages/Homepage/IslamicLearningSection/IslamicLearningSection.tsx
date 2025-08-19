import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const IslamicLearningSection = () => {
  const learningCards = [
    {
      id: 1,
      title: "Where Was Islam Created & First Established?",
      description:
        "In this world, Islam is the major world religion promulgated by the Prophet Muhammad in...",
      image: "/api/placeholder/300/200",
      category: "History",
    },
    {
      id: 2,
      title: "Where Is The Birthplace of Islam?",
      description:
        "Here are five basic about religion in Jesus Christ in... a locality that is the birthplace of Islam.",
      image: "/api/placeholder/300/200",
      category: "Geography",
    },
    {
      id: 3,
      title: "What Is Tadyya In Islam? (Correct answer)",
      description:
        "Tadyya is the Islamic practice of concealing one's belief and forestalling religious...",
      image: "/api/placeholder/300/200",
      category: "Theology",
    },
    {
      id: 4,
      title: "What Is A Wakil In Islam? (Solution)",
      description:
        "Learn What is a Wakil in the Sharia law. Wali in an attorney, agent, and a trustee. The term...",
      image: "/api/placeholder/300/200",
      category: "Law",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Learn Quran & Basics
            <br />
            <span className="text-emerald-600">knowledge of Islam</span>
          </h1>
        </div>
        <Button className="bg-amber-400 hover:bg-amber-500 text-slate-800 font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
          <BookOpen className="mr-2 h-4 w-4" />
          Read All Blog
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningCards.map((card) => (
          <Card
            key={card.id}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl"
          >
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 text-emerald-600 text-xs font-semibold rounded-full">
                  {card.category}
                </span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                {card.description}
              </p>
              <Button
                variant="ghost"
                className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold text-sm group/btn"
              >
                Read Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="outline"
          className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
        >
          View All Articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default IslamicLearningSection;
