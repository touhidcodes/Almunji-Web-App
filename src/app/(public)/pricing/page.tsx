import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Check,
  Star,
  Crown,
  Users,
  GraduationCap,
  Heart,
  Shield,
  Zap,
  Globe,
  MessageCircle,
  Video,
  Download,
  Award,
  Infinity,
  Clock,
  UserCheck,
  Sparkles,
} from "lucide-react";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Seeker",
      description: "Perfect for those beginning their Islamic learning journey",
      icon: BookOpen,
      color: "from-slate-400 to-slate-500",
      borderColor: "border-slate-200",
      textColor: "text-slate-600",
      bgColor: "bg-white",
      monthlyPrice: 0,
      yearlyPrice: 0,
      popular: false,
      features: [
        "Access to 5 foundational courses",
        "Basic Arabic lessons",
        "Community forum access",
        "Mobile app access",
        "Weekly newsletter",
        "Basic progress tracking",
      ],
      limitations: [
        "Limited course selection",
        "No live sessions",
        "No certificate",
      ],
    },
    {
      name: "Scholar",
      description: "Comprehensive learning for dedicated students",
      icon: GraduationCap,
      color: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      bgColor: "bg-white",
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: true,
      features: [
        "Access to 50+ premium courses",
        "Live weekly study circles",
        "Advanced Arabic program",
        "One-on-one mentorship (2 sessions/month)",
        "Downloadable resources",
        "Course completion certificates",
        "Priority community support",
        "Mobile & desktop access",
        "Progress analytics",
        "Early access to new content",
      ],
      limitations: [],
    },
    {
      name: "Hafiz",
      description: "Elite program for serious Islamic scholars",
      icon: Crown,
      color: "from-amber-400 to-orange-500",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      monthlyPrice: 99,
      yearlyPrice: 990,
      popular: false,
      features: [
        "Unlimited access to all courses",
        "Personal Islamic scholar mentor",
        "Weekly 1-on-1 sessions",
        "Exclusive masterclasses",
        "Quran memorization program",
        "Advanced Tajweed training",
        "Islamic jurisprudence specialization",
        "Hadith studies program",
        "Research paper guidance",
        "Teaching certification pathway",
        "Lifetime course access",
        "Priority customer support",
        "Exclusive retreat invitations",
      ],
      limitations: [],
    },
  ];

  const familyPlan = {
    name: "Family Bundle",
    description: "Islamic education for the whole family",
    monthlyPrice: 49,
    yearlyPrice: 490,
    maxMembers: 6,
    features: [
      "Up to 6 family members",
      "All Scholar plan features",
      "Kids Islamic education program",
      "Family study sessions",
      "Parental progress monitoring",
      "Family-friendly content filtering",
    ],
  };

  const enterpriseFeatures = [
    {
      title: "Islamic Schools & Institutes",
      icon: Users,
      features: [
        "Bulk student enrollment",
        "Custom curriculum design",
        "Teacher training programs",
        "Progress monitoring dashboard",
        "White-label solution available",
      ],
    },
    {
      title: "Mosques & Communities",
      icon: Heart,
      features: [
        "Community learning programs",
        "Imam training resources",
        "Friday sermon preparation",
        "Community engagement tools",
        "Local language support",
      ],
    },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! All paid plans come with a 14-day free trial. No credit card required to start.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Are the courses taught by qualified scholars?",
      answer:
        "Yes, all our instructors are certified Islamic scholars with years of teaching experience and proper Islamic education credentials.",
    },
    {
      question: "Is content available in multiple languages?",
      answer:
        "Currently available in English, Arabic, Urdu, and Malay. We're continuously adding more languages.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-8 shadow-xl">
            <Star className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Choose Your <span className="text-emerald-600">Learning Path</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Embark on your Islamic education journey with plans designed for
            every level of commitment. From beginner to scholar, we have the
            perfect path for you.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white p-2 rounded-full shadow-lg border border-emerald-100">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-emerald-500 text-white shadow-md"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-emerald-500 text-white shadow-md"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`${plan.bgColor} ${
                plan.borderColor
              } border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden relative ${
                plan.popular ? "scale-105 ring-4 ring-emerald-200" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 shadow-lg`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-800">
                      $
                      {billingCycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-slate-500 ml-2">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>
                  {billingCycle === "yearly" && plan.yearlyPrice > 0 && (
                    <p className="text-sm text-emerald-600 mt-1">
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} annually
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full mb-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700"
                  }`}
                >
                  {plan.monthlyPrice === 0 ? "Start Free" : "Start Learning"}
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    What's included:
                  </h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Family Plan */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl rounded-3xl overflow-hidden mb-20">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {familyPlan.name}
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  {familyPlan.description}
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-800">
                    $
                    {billingCycle === "monthly"
                      ? familyPlan.monthlyPrice
                      : familyPlan.yearlyPrice}
                  </span>
                  <span className="text-slate-500 ml-2">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Family Plan
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {familyPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enterprise Section */}
        <div className="bg-white py-20 rounded-3xl shadow-xl mb-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Enterprise <span className="text-emerald-600">Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Custom solutions for Islamic institutions, schools, and
                communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {enterpriseFeatures.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6">
                    <category.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 justify-center"
                      >
                        <Shield className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-slate-800 hover:bg-slate-900 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                Contact Sales Team
                <MessageCircle className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20 rounded-3xl shadow-xl">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-emerald-100">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-emerald-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Ready to Begin Your{" "}
            <span className="text-emerald-600">Journey?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims worldwide who are deepening their faith
            through authentic Islamic education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Start 14-Day Free Trial
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View Course Catalog
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
