import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Heart,
  Users,
  Globe,
  Star,
  ArrowRight,
  Award,
  Target,
  Lightbulb,
  Shield,
  Clock,
  Calendar,
  CheckCircle,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Active Learners", icon: Users },
    { number: "100+", label: "Courses Available", icon: BookOpen },
    { number: "25+", label: "Countries Reached", icon: Globe },
    { number: "4.9/5", label: "User Rating", icon: Star },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We strive to provide the highest quality Islamic education through innovative teaching methods and authentic scholarship.",
      icon: Award,
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Authentic Knowledge",
      description:
        "All our content is carefully reviewed by qualified Islamic scholars to ensure accuracy and authenticity.",
      icon: Shield,
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Innovation & Accessibility",
      description:
        "We leverage modern technology to make Islamic learning accessible to everyone, anywhere in the world.",
      icon: Lightbulb,
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Community Impact",
      description:
        "Building a global community of learners who support each other in their spiritual and educational journey.",
      icon: Target,
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Ahmad Hassan",
      role: "Founder & Chief Scholar",
      specialty: "Quranic Studies & Tafseer",
      experience: "20+ Years",
      bio: "With decades of experience in Quranic studies, Dr. Ahmad Hassan founded Almunji with a vision to make authentic Islamic knowledge accessible to the global Muslim community.",
    },
    {
      name: "Prof. Fatima Al-Zahra",
      role: "Head of Curriculum",
      specialty: "Islamic History & Jurisprudence",
      experience: "15+ Years",
      bio: "A distinguished scholar with extensive experience in Islamic jurisprudence, Professor Al-Zahra leads our curriculum development team to ensure academic excellence.",
    },
    {
      name: "Imam Mohammed Rashid",
      role: "Senior Instructor",
      specialty: "Hadith Studies & Arabic Language",
      experience: "18+ Years",
      bio: "Known for his engaging teaching style, Imam Rashid helpsbridge the gap between traditional Islamic sciences and modern learning methods.",
    },
  ];

  const faqItems = [
    {
      question: "Is Almunji completely free?",
      answer: "Yes, all core features are completely free. We rely on donations to keep the platform running.",
    },
    {
      question: "How can I contribute to Almunji?",
      answer: "You can contribute through voluntary donations, volunteering your skills, or spreading the word about our platform.",
    },
    {
      question: "Are your translations scholarly reviewed?",
      answer: "Yes, all translations are carefully reviewed by qualified Islamic scholars to ensure accuracy and authenticity.",
    },
    {
      question: "Can I use Almunji offline?",
      answer: "Yes, you can download content for offline use. Our mobile apps support downloading translations and audio.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-8 shadow-2xl animate-pulse">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Almunji</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Empowering hearts and minds through authentic Islamic education. We
            bridge traditional scholarship with modern learning to make the
            beauty of Islam accessible to everyone, everywhere.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Our <span className="text-emerald-600">Vision</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Almunji, we envision a world where every Muslim has access to
                authentic Islamic knowledge in a format that is easy to
                understand, engaging, and practically applicable to daily life.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that the Quran is not just a book to be read, but a
                guide to be lived. Our mission is to create the most comprehensive
                and user-friendly platform for Quranic study and Islamic learning.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <ArrowRight className="h-5 w-5" />
                <span>Learn more about our mission</span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <Heart className="h-20 w-20 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-3xl font-bold mb-2">Spreading Knowledge</h3>
                  <p className="text-emerald-100 text-lg">
                    With Love & Dedication
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <p className="font-bold">50K+</p>
                      <p className="text-sm">Learners</p>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <p className="font-bold">100+</p>
                      <p className="text-sm">Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl shadow-2xl flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <BookOpen className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Preserving Truth</h3>
                  <p className="text-teal-100 text-lg">
                    Authentic & Scholarly
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Our <span className="text-teal-600">Mission</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To make authentic Islamic knowledge accessible to every Muslim
                through innovative technology and modern pedagogical approaches.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine traditional Islamic scholarship with cutting-edge
                technology to create immersive learning experiences that inspire,
                educate, and transform lives.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Read Our Full Manifesto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our <span className="text-emerald-600">Core Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Almunji
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Meet Our <span className="text-emerald-600">Scholars</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Distinguished Islamic scholars and educators dedicated to
              authentic knowledge sharing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 mb-4">{member.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-slate-500 text-sm italic leading-relaxed">
                    "{member.bio}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-emerald-200">Almunji?</span>
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                We're not just another Islamic learning platform. Here's what
                makes Almunji unique and the preferred choice for millions of
                Muslims worldwide.
              </p>

              <div className="space-y-4">
                {[
                  "Authentic Uthmani script with color-coded tajweed rules",
                  "Multiple translations with word-by-word breakdown",
                  "Audio synchronization with highlighting feature",
                  "Personalized reading plans and progress tracking",
                  "Offline access with downloadable content",
                  "Family-friendly interface for all ages",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-300 mt-1 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold">
                  Explore All Features
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Don't Just Take Our Word
              </h3>
              <div className="space-y-6">
                {[
                  {
                    text: "Almunji has transformed how I study the Quran. The word-by-word translations are incredibly helpful!",
                    author: "Aisha Rahman",
                    role: "Regular User",
                  },
                  {
                    text: "The best Quran app I've used. The audio feature helps me improve my tajweed significantly.",
                    author: "Mohammed Al-Saud",
                    role: "Hafiz Student",
                  },
                  {
                    text: "Perfect for my children. The interface is simple but comprehensive. Highly recommended!",
                    author: "Fatima Khan",
                    role: "Parent",
                  },
                ].map((review, index) => (
                  <div key={index} className="bg-white/10 p-6 rounded-xl">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-emerald-50 mb-4 italic">"{review.text}"</p>
                    <p className="text-white font-semibold">
                      {review.author}
                    </p>
                    <p className="text-emerald-200 text-sm">{review.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about Almunji
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold">
              View All FAQ
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Learning <span className="text-emerald-200">Community</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Start your journey of Islamic learning today. Discover courses that
            will deepen your understanding and strengthen your faith. Join
            thousands of learners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact Support
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Get in <span className="text-emerald-600">Touch</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Have questions, suggestions, or feedback? We'd love to hear from
                you. Our team is ready to assist you with any inquiries.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Email Us
                    </h4>
                    <p className="text-slate-600">support@almunji.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Join Community
                    </h4>
                    <p className="text-slate-600">Join our Discord & forums</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Donate
                    </h4>
                    <p className="text-slate-600">Support our mission</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg">
                    Send Message
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
