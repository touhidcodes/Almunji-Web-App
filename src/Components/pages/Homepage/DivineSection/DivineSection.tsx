import { Button } from "@/components/ui/button";

const DivineSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <img
                  src="/api/placeholder/400/500"
                  alt="Hand holding ornate Quran"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-orange-200 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Your Source of
              <br />
              Divine Guidance
              <br />
              and Wisdom
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The Quran is not just a book; it is the ultimate source of
              guidance for millions of people around the world.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Revealed over 1,400 years ago, the Quran is a timeless and
              universal scripture that offers profound insights into the human
              condition, morality, spirituality, and the nature of the universe.
              It is the word of Allah, as conveyed to humanity through the
              Prophet Muhammad (peace be upon him).
            </p>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-medium rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineSection;
