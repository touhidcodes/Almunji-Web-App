import React, { useState } from "react";
import {
  Award,
  BookOpen,
  Users,
  Globe,
  Heart,
  Star,
  Building2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface Partner {
  name: string;
  description: string;
  logo: React.ReactNode;
  category: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  {
    name: "King Fahd Complex",
    description:
      "Official source for authenticated Quranic text from the Mushaf of Madinah",
    logo: <Building2 className="w-10 h-10" />,
    category: "authority",
  },
  {
    name: "Islamic University of Madinah",
    description: "Academic collaboration for Quranic studies and research",
    logo: <GraduationCap className="w-10 h-10" />,
    category: "education",
  },
  {
    name: "Al-Azhar University",
    description: "Partnership for authentic translations and scholarly content",
    logo: <BookOpen className="w-10 h-10" />,
    category: "education",
  },
  {
    name: "International Quran Academy",
    description: "Providing verified recitations from world-renowned Qaris",
    logo: <Award className="w-10 h-10" />,
    category: "recitation",
  },
  {
    name: "Muslim World League",
    description: "Global outreach and multilingual translation initiatives",
    logo: <Globe className="w-10 h-10" />,
    category: "organization",
  },
  {
    name: "Bayyinah Institute",
    description: "Educational content and Arabic language resources",
    logo: <Star className="w-10 h-10" />,
    category: "education",
  },
];

const stats: Stat[] = [
  {
    value: "50M+",
    label: "Active Users Worldwide",
    icon: <Users className="w-6 h-6" />,
  },
  {
    value: "40+",
    label: "Languages Supported",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    value: "20+",
    label: "Renowned Reciters",
    icon: <Award className="w-6 h-6" />,
  },
  {
    value: "195",
    label: "Countries Reached",
    icon: <Heart className="w-6 h-6" />,
  },
];

const recognitions = [
  {
    title: "Best Islamic App 2024",
    organization: "Islamic Digital Awards",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Excellence in Education",
    organization: "UNESCO Islamic Heritage",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Innovation in Technology",
    organization: "Dubai Islamic Economy",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export default function AlmunjiPartners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">
                Trusted Globally
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Trusted Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with renowned Islamic institutions and scholars
            worldwide to ensure authenticity, accuracy, and the highest quality
            of Quranic content for our global community
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-4 mx-auto shadow-lg">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Institutional Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl scale-110"
                      : "bg-emerald-100 text-emerald-600"
                  }`}
                >
                  {partner.logo}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-emerald-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {partner.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full border border-emerald-200">
                    {partner.category.charAt(0).toUpperCase() +
                      partner.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-6 mx-auto">
                  {recognition.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {recognition.title}
                </h3>
                <p className="text-emerald-50 text-center text-sm">
                  {recognition.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Want to Partner With Us?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
              Join our mission to make the Holy Quran accessible to everyone.
              Whether you're an Islamic institution, scholar, or organization,
              we'd love to collaborate with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                Become a Partner
              </button>
              <button className="bg-emerald-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 border-2 border-white/30 hover:border-white/50">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Verified & Authenticated By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500 font-medium">ISO Certified</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500 font-medium">
                Scholarly Verified
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500 font-medium">
                Trusted Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}
