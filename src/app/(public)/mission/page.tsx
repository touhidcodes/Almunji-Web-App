import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Heart,
  Globe2,
  Users,
  Compass,
  ArrowRight,
  Star,
  Shield,
  Lightbulb,
  Zap,
  Target,
  Moon,
  Sun,
  Sparkles,
  GraduationCap,
  HandHeart,
  TreePine,
} from "lucide-react";

const MissionPage = () => {
  const missionPillars = [
    {
      title: "Authentic Knowledge",
      description:
        "We preserve and transmit the pure teachings of Islam as understood by the righteous predecessors, ensuring every lesson is rooted in authentic sources.",
      icon: Shield,
      color: "from-emerald-400 to-teal-500",
      details: [
        "Quran & Sunnah Based",
        "Scholar Verified Content",
        "Traditional Methodology",
      ],
    },
    {
      title: "Global Accessibility",
      description:
        "Breaking down geographical and linguistic barriers to make Islamic education available to every Muslim, anywhere in the world.",
      icon: Globe2,
      color: "from-teal-400 to-cyan-500",
      details: [
        "Multi-language Support",
        "24/7 Availability",
        "Mobile Optimized",
      ],
    },
    {
      title: "Modern Innovation",
      description:
        "Leveraging cutting-edge technology and pedagogy to create engaging, effective learning experiences that resonate with today's learners.",
      icon: Lightbulb,
      color: "from-cyan-400 to-blue-500",
      details: [
        "Interactive Learning",
        "AI-Powered Assistance",
        "Personalized Paths",
      ],
    },
    {
      title: "Community Building",
      description:
        "Fostering a supportive global community where learners connect, share, and grow together in their Islamic journey.",
      icon: Users,
      color: "from-blue-400 to-indigo-500",
      details: ["Peer Learning", "Mentorship Programs", "Discussion Forums"],
    },
  ];

  const impactAreas = [
    {
      title: "Spiritual Growth",
      description: "Nurturing the soul through comprehensive Islamic education",
      icon: Moon,
      metric: "Deeper Faith Connection",
    },
    {
      title: "Knowledge Excellence",
      description: "Building strong foundations in Islamic sciences",
      icon: GraduationCap,
      metric: "Mastery of Islamic Studies",
    },
    {
      title: "Character Development",
      description: "Cultivating Islamic values and noble character",
      icon: Heart,
      metric: "Ethical Leadership",
    },
    {
      title: "Community Service",
      description: "Inspiring active contribution to society",
      icon: HandHeart,
      metric: "Positive Social Impact",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "Every learner begins their journey of discovering the beauty and depth of Islamic knowledge.",
      icon: Compass,
    },
    {
      step: "02",
      title: "Learning",
      description:
        "Through structured courses and expert guidance, students deepen their understanding.",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Application",
      description:
        "Knowledge transforms into practice as learners apply Islamic teachings in their daily lives.",
      icon: Target,
    },
    {
      step: "04",
      title: "Sharing",
      description:
        "Empowered with knowledge, our graduates become beacons of light in their communities.",
      icon: Sun,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-8 shadow-2xl">
              <Target className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Our <span className="text-emerald-600">Mission</span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              To illuminate hearts and minds with authentic Islamic knowledge,
              creating a global community of learners who embody the beautiful
              teachings of Islam.
            </p>
            <div className="flex items-center justify-center space-x-2 text-emerald-600">
              <Sparkles className="h-6 w-6" />
              <span className="text-lg font-semibold">
                Transforming Lives Through Learning
              </span>
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <Star className="h-16 w-16 mx-auto mb-8 text-emerald-200" />
              <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-emerald-100">
                "To be the world's most trusted platform for authentic Islamic
                education, where every Muslim can access, understand, and live
                by the timeless wisdom of the Quran and Sunnah, fostering a
                generation of knowledgeable, righteous, and contributing members
                of society."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              The <span className="text-emerald-600">Four Pillars</span> of Our
              Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our mission stands on four fundamental pillars that guide every
              decision and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPillars.map((pillar, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-3xl overflow-hidden"
              >
                <CardContent className="p-10">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <pillar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="space-y-3">
                    {pillar.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-slate-600 font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-emerald-600">Impact Areas</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus on holistic development that transforms individuals and
              communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50 rounded-2xl overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full inline-block">
                    {area.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Journey */}
      <div className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              The Learning Journey
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Every student follows a transformative path of growth and
              enlightenment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <TreePine className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Join Our <span className="text-emerald-600">Mission</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Be part of a movement that's transforming Islamic education
              worldwide. Together, we can build a more knowledgeable and
              righteous Ummah.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey
              <BookOpen className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
            <div className="flex items-center justify-center space-x-4 text-emerald-700">
              <Zap className="h-6 w-6" />
              <span className="font-semibold text-lg">
                "And whoever Allah guides - he is the [rightly] guided" - Quran
                7:178
              </span>
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
