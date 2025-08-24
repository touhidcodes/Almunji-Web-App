"use client";

import DivineSection from "@/components/Pages/Homepage/DivineSection/DivineSection";
import HeroSection from "@/components/Pages/Homepage/HeroSection/HeroSection";
import IslamicLearningSection from "@/components/Pages/Homepage/IslamicLearningSection/IslamicLearningSection";
import JourneySection from "@/components/Pages/Homepage/JourneySection/JourneySection";
import QuranSurahDisplay from "@/components/Pages/Homepage/QuranSurahDisplay/QuranSurahDisplay";
import Footer from "@/components/Shared/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <DivineSection />
      <QuranSurahDisplay />
      <IslamicLearningSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default Homepage;
