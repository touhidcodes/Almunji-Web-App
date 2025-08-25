"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { useCreateSurahMutation } from "@/redux/api/surahApi";
import FormContainer from "@/components/Forms/FormContainer";
import { createSurahSchema } from "@/schema/surahSchema";
import FormInput from "@/components/Forms/FormInput";
import FormTextarea from "@/components/Forms/FormTextarea";
import FormSelect from "@/components/Forms/FormSelect";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormTagsSelector from "@/components/Forms/FormTagsSelector";
import Image from "next/image";
import { DEFAULT_THEMES } from "@/data/constants";
import DynamicBreadcrumb from "@/components/Shared/Breadcrumb/DynamicBreadcrumb";

const defaultValues = {
  name: "",
  nameArabic: "",
  nameTransliteration: "",
  number: "",
  totalVerses: "",
  revelationPlace: "",
  revelationOrder: "",
  juzNumber: "",
  hizbNumber: "",
  rukuNumber: "",
  description: "",
  themes: [],
  translation: "",
  transliteration: "",
  tafsir: "",
};

const AddSurahPage = () => {
  const [loading, setLoading] = useState(false);
  const [createSurah] = useCreateSurahMutation();
  const router = useRouter();

  //  create surah
  const handleCreateSurah = async (values: FieldValues) => {
    try {
      setLoading(true);
      const surahData = {
        ...values,
        number: Number(values.number),
        totalVerses: Number(values.totalVerses),
        revelationOrder: Number(values.revelationOrder),
        juzNumber: Number(values.juzNumber),
        hizbNumber: Number(values.hizbNumber),
        rukuNumber: Number(values.rukuNumber),
      };
      console.log(surahData);

      const res = await createSurah(surahData);

      if (res?.data?.id) {
        toast.success("Surah created successfully!");
        setLoading(false);
        router.push("/dashboard/surahs");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative h-60 md:h-[300px] w-full">
        {/* Background image */}
        <Image
          src="/assets/images/quran-banner.jpg"
          alt="create-surah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/50 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-5xl w-full space-y-2 mx-auto">
            <h1 className="text-white text-2xl md:text-5xl leading-tight font-semibold">
              Create New Surah
            </h1>
            <DynamicBreadcrumb />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <div className="w-full container px-4">
          <FormContainer
            onSubmit={handleCreateSurah}
            resolver={zodResolver(createSurahSchema)}
            defaultValues={defaultValues}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Column 1 - Basic Information */}
              <div className="space-y-4">
                <FormInput
                  label="Surah Name (English)"
                  name="name"
                  placeholder="Al-Fatiha"
                  required
                />
                <FormInput
                  label="Surah Name (Arabic)"
                  name="nameArabic"
                  placeholder="الفاتحة"
                  required
                />
                <FormInput
                  label="Name Transliteration"
                  name="nameTransliteration"
                  placeholder="Al-Faatihah"
                  required
                />
                <FormInput
                  label="Surah Number"
                  name="number"
                  placeholder="1"
                  type="number"
                  required
                />
                <FormInput
                  label="Total Verses"
                  name="totalVerses"
                  placeholder="7"
                  type="number"
                  required
                />
              </div>

              {/* Column 2 - Classification */}
              <div className="space-y-4">
                <FormSelect
                  label="Revelation Place"
                  name="revelationPlace"
                  placeholder="Select place"
                  options={[
                    { label: "Makkah", value: "MAKKAH" },
                    { label: "Madinah", value: "MADINAH" },
                  ]}
                  required
                />
                <FormInput
                  label="Revelation Order"
                  name="revelationOrder"
                  placeholder="5"
                  type="number"
                  required
                />
                <FormInput
                  label="Juz Number"
                  name="juzNumber"
                  placeholder="1"
                  type="number"
                />
                <FormInput
                  label="Hizb Number"
                  name="hizbNumber"
                  placeholder="1"
                  type="number"
                />
                <FormInput
                  label="Ruku Number"
                  name="rukuNumber"
                  placeholder="1"
                  type="number"
                />
              </div>

              {/* Column 3 - Content */}
              <div className="space-y-4">
                <FormTextarea
                  name="description"
                  label="Description"
                  placeholder="Brief description of the Surah..."
                  required
                />
                <FormTextarea
                  name="translation"
                  label="Translation"
                  placeholder="English translation of the Surah..."
                />
                <FormTextarea
                  name="transliteration"
                  label="Transliteration"
                  placeholder="Transliterated text..."
                />
              </div>
            </div>

            {/* Bottom Inputs (Full Width) */}
            <div className="grid grid-cols-1 gap-6 mt-8">
              <FormTagsSelector
                name="themes"
                tags={DEFAULT_THEMES}
                label="Surah Themes"
                required
                onSelectionChange={(tags) => console.log(tags)}
              />
              <FormTextarea
                name="tafsir"
                label="Tafsir (Commentary)"
                placeholder="Detailed commentary and explanation..."
                className="min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                disabled={loading}
                type="submit"
                className="hover:text-primary hover:border-white px-6 py-2 font-medium transition-all duration-200 group bg-[#1C2D37] hover:bg-slate-700 hover:text-white"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Create Surah"
                )}
              </Button>
            </div>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default AddSurahPage;
