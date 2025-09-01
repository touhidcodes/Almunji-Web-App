import { useState } from "react";
import {
  Book,
  Save,
  X,
  AlertCircle,
  Check,
  MapPin,
  Calendar,
} from "lucide-react";

const CreateSurahPage = () => {
  const [formData, setFormData] = useState({
    surahNumber: "",
    arabicName: "",
    englishName: "",
    transliteration: "",
    meaning: "",
    revelationType: "",
    revelationPlace: "",
    revelationOrder: "",
    totalAyahs: "",
    totalWords: "",
    totalLetters: "",
    juzStart: "",
    juzEnd: "",
    hizbStart: "",
    hizbEnd: "",
    rukuhCount: "",
    sajdahCount: "",
    mainThemes: "",
    introduction: "",
    historicalContext: "",
    tags: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const revelationTypes = ["Meccan", "Medinan"];
  const revelationPlaces = ["Mecca", "Medina"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !formData.surahNumber ||
      formData.surahNumber < 1 ||
      formData.surahNumber > 114
    ) {
      newErrors.surahNumber = "Surah number must be between 1 and 114";
    }

    if (!formData.arabicName.trim()) {
      newErrors.arabicName = "Arabic name is required";
    }

    if (!formData.englishName.trim()) {
      newErrors.englishName = "English name is required";
    }

    if (!formData.transliteration.trim()) {
      newErrors.transliteration = "Transliteration is required";
    }

    if (!formData.revelationType) {
      newErrors.revelationType = "Revelation type is required";
    }

    if (!formData.totalAyahs || formData.totalAyahs < 1) {
      newErrors.totalAyahs = "Total ayahs must be a positive number";
    }

    if (
      formData.revelationOrder &&
      (formData.revelationOrder < 1 || formData.revelationOrder > 114)
    ) {
      newErrors.revelationOrder = "Revelation order must be between 1 and 114";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitSuccess(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          surahNumber: "",
          arabicName: "",
          englishName: "",
          transliteration: "",
          meaning: "",
          revelationType: "",
          revelationPlace: "",
          revelationOrder: "",
          totalAyahs: "",
          totalWords: "",
          totalLetters: "",
          juzStart: "",
          juzEnd: "",
          hizbStart: "",
          hizbEnd: "",
          rukuhCount: "",
          sajdahCount: "",
          mainThemes: "",
          introduction: "",
          historicalContext: "",
          tags: "",
        });
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting surah:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      surahNumber: "",
      arabicName: "",
      englishName: "",
      transliteration: "",
      meaning: "",
      revelationType: "",
      revelationPlace: "",
      revelationOrder: "",
      totalAyahs: "",
      totalWords: "",
      totalLetters: "",
      juzStart: "",
      juzEnd: "",
      hizbStart: "",
      hizbEnd: "",
      rukuhCount: "",
      sajdahCount: "",
      mainThemes: "",
      introduction: "",
      historicalContext: "",
      tags: "",
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Book className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Create New Surah
            </h1>
          </div>
          <p className="text-gray-600">
            Add a new Surah to the database with complete information and
            metadata.
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Surah created successfully!
            </span>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6">
            {/* Basic Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Surah Number *
                  </label>
                  <input
                    type="number"
                    name="surahNumber"
                    value={formData.surahNumber}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.surahNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="1-114"
                    min="1"
                    max="114"
                  />
                  {errors.surahNumber && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.surahNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Ayahs *
                  </label>
                  <input
                    type="number"
                    name="totalAyahs"
                    value={formData.totalAyahs}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.totalAyahs ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="7"
                    min="1"
                  />
                  {errors.totalAyahs && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.totalAyahs}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Names Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Names & Translation
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arabic Name *
                  </label>
                  <input
                    type="text"
                    name="arabicName"
                    value={formData.arabicName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-right ${
                      errors.arabicName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="الفاتحة"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "18px",
                    }}
                  />
                  {errors.arabicName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.arabicName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      English Name *
                    </label>
                    <input
                      type="text"
                      name="englishName"
                      value={formData.englishName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.englishName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="The Opening"
                    />
                    {errors.englishName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.englishName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transliteration *
                    </label>
                    <input
                      type="text"
                      name="transliteration"
                      value={formData.transliteration}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.transliteration
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Al-Fatiha"
                    />
                    {errors.transliteration && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.transliteration}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meaning
                  </label>
                  <input
                    type="text"
                    name="meaning"
                    value={formData.meaning}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="The Opening, The Opener"
                  />
                </div>
              </div>
            </div>

            {/* Revelation Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                Revelation Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revelation Type *
                  </label>
                  <select
                    name="revelationType"
                    value={formData.revelationType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.revelationType
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Type</option>
                    {revelationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.revelationType && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.revelationType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revelation Place
                  </label>
                  <select
                    name="revelationPlace"
                    value={formData.revelationPlace}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Place</option>
                    {revelationPlaces.map((place) => (
                      <option key={place} value={place}>
                        {place}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revelation Order
                  </label>
                  <input
                    type="number"
                    name="revelationOrder"
                    value={formData.revelationOrder}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.revelationOrder
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="5"
                    min="1"
                    max="114"
                  />
                  {errors.revelationOrder && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.revelationOrder}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Statistics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Words
                  </label>
                  <input
                    type="number"
                    name="totalWords"
                    value={formData.totalWords}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="29"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Letters
                  </label>
                  <input
                    type="number"
                    name="totalLetters"
                    value={formData.totalLetters}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="139"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sajdah Count
                  </label>
                  <input
                    type="number"
                    name="sajdahCount"
                    value={formData.sajdahCount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Position Information Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-600" />
                Position Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">
                    Juz (Para) Range
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Start Juz
                      </label>
                      <input
                        type="number"
                        name="juzStart"
                        value={formData.juzStart}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="1"
                        min="1"
                        max="30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        End Juz
                      </label>
                      <input
                        type="number"
                        name="juzEnd"
                        value={formData.juzEnd}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="1"
                        min="1"
                        max="30"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Hizb Range</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Start Hizb
                      </label>
                      <input
                        type="number"
                        name="hizbStart"
                        value={formData.hizbStart}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="1"
                        min="1"
                        max="60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        End Hizb
                      </label>
                      <input
                        type="number"
                        name="hizbEnd"
                        value={formData.hizbEnd}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="1"
                        min="1"
                        max="60"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rukuh Count
                </label>
                <input
                  type="number"
                  name="rukuhCount"
                  value={formData.rukuhCount}
                  onChange={handleInputChange}
                  className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="1"
                  min="1"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Content & Themes
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Themes
                  </label>
                  <input
                    type="text"
                    name="mainThemes"
                    value={formData.mainThemes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Prayer, Guidance, Praise of Allah"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate themes with commas
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Introduction
                  </label>
                  <textarea
                    name="introduction"
                    value={formData.introduction}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Brief introduction about this Surah..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Historical Context
                  </label>
                  <textarea
                    name="historicalContext"
                    value={formData.historicalContext}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Historical background and circumstances of revelation..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="opening, prayer, essential, daily"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate tags with commas
                  </p>
                </div>
              </div>
            </div>

            {/* Preview Section */}
            {(formData.arabicName || formData.englishName) && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Preview
                </h3>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      {formData.surahNumber && (
                        <div className="text-sm text-purple-700 font-medium mb-1">
                          Surah {formData.surahNumber}
                        </div>
                      )}

                      <div className="flex items-center gap-4 mb-2">
                        {formData.arabicName && (
                          <div
                            className="text-2xl font-bold text-gray-900"
                            style={{ fontFamily: "Arial, sans-serif" }}
                          >
                            {formData.arabicName}
                          </div>
                        )}
                        {formData.englishName && (
                          <div className="text-xl font-bold text-gray-800">
                            {formData.englishName}
                          </div>
                        )}
                      </div>

                      {formData.transliteration && (
                        <div className="text-lg italic text-gray-600 mb-2">
                          {formData.transliteration}
                        </div>
                      )}

                      {formData.meaning && (
                        <div className="text-sm text-gray-600">
                          Meaning: {formData.meaning}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 md:mt-0 text-sm text-gray-600 space-y-1">
                      {formData.revelationType && (
                        <div className="flex items-center gap-1">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              formData.revelationType === "Meccan"
                                ? "bg-orange-400"
                                : "bg-green-400"
                            }`}
                          ></span>
                          {formData.revelationType}
                        </div>
                      )}
                      {formData.totalAyahs && (
                        <div>{formData.totalAyahs} Ayahs</div>
                      )}
                      {formData.juzStart && (
                        <div>
                          Juz {formData.juzStart}
                          {formData.juzEnd &&
                          formData.juzEnd !== formData.juzStart
                            ? `-${formData.juzEnd}`
                            : ""}
                        </div>
                      )}
                    </div>
                  </div>

                  {formData.introduction && (
                    <div className="text-gray-700 leading-relaxed">
                      {formData.introduction}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Creating Surah...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Create Surah
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <X className="h-4 w-4" />
                Reset Form
              </button>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
          <h4 className="font-semibold text-amber-900 mb-3">
            Guidelines for Adding Surahs
          </h4>
          <ul className="text-amber-800 text-sm space-y-2">
            <li>• Ensure Arabic names are accurate and properly formatted</li>
            <li>• Verify Surah number and total ayah count</li>
            <li>• Include both English name and transliteration</li>
            <li>• Specify revelation type (Meccan/Medinan) and order</li>
            <li>• Add relevant themes and historical context</li>
            <li>• Use descriptive tags for better categorization</li>
            <li>• Double-check all numerical data (Juz, Hizb, statistics)</li>
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white rounded-lg border p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">114</div>
            <div className="text-sm text-gray-600">Total Surahs</div>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">86</div>
            <div className="text-sm text-gray-600">Meccan Surahs</div>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <div className="text-2xl font-bold text-green-600">28</div>
            <div className="text-sm text-gray-600">Medinan Surahs</div>
          </div>
          <div className="bg-white rounded-lg border p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">6,236</div>
            <div className="text-sm text-gray-600">Total Ayahs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSurahPage;
