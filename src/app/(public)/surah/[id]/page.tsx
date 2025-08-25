"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetSurahByIdQuery,
  useDeleteSurahMutation,
} from "@/redux/api/surahApi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  MapPin,
  Calendar,
  Hash,
  Edit,
  Trash2,
  Share2,
  Bookmark,
  Clock,
  Layers,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import DynamicBreadcrumb from "@/components/Shared/Breadcrumb/DynamicBreadcrumb";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";

const SurahDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const { data: surah, isLoading, error } = useGetSurahByIdQuery(id as string);
  const [deleteSurah] = useDeleteSurahMutation();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this Surah?")) {
      try {
        setIsDeleting(true);
        const res = await deleteSurah(id as string);
        if (res?.data) {
          toast.success("Surah deleted successfully!");
          router.push("/dashboard/surahs");
        } else {
          toast.error("Failed to delete Surah!");
        }
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong!");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = () => {
    router.push(`/dashboard/surahs/edit/${id}`);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Surah ${surah?.name}`,
        text: `${surah?.nameArabic} - ${surah?.description}`,
        url: window.location.href,
      });
    } catch (err) {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error || !surah)
    return <div className="text-center py-20">Surah not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-60 md:h-[350px] w-full">
        <Image
          src="/assets/images/quran-detail-banner.jpg"
          alt={surah.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/70 to-[#0D1B2A]/40 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-4xl w-full space-y-4 mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                Surah {surah.number}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                {surah.revelationPlace}
              </Badge>
            </div>
            <h1 className="text-white text-3xl md:text-6xl leading-tight font-bold">
              {surah.nameArabic}
            </h1>
            <h2 className="text-white/90 text-xl md:text-2xl font-medium">
              {surah.name} ({surah.nameTransliteration})
            </h2>
            <DynamicBreadcrumb />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Action Buttons */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleEdit}
                    className="flex items-center gap-2"
                  >
                    <Edit size={16} />
                    Edit Surah
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    {isDeleting ? "Deleting..." : "Delete"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="flex items-center gap-2"
                  >
                    <Share2 size={16} />
                    Share
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Bookmark size={16} />
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="text-blue-600" />
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {surah.description}
                </p>
              </CardContent>
            </Card>

            {/* Translation */}
            {surah.translation && (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <FileText className="text-green-600" />
                    Translation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {surah.translation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Transliteration */}
            {surah.transliteration && (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Hash className="text-purple-600" />
                    Transliteration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed font-mono text-lg whitespace-pre-wrap">
                    {surah.transliteration}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tafsir */}
            {surah.tafsir && (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Layers className="text-orange-600" />
                    Tafsir (Commentary)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {surah.tafsir}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="bg-white shadow-lg sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl">Surah Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Hash size={16} className="text-blue-600" />
                    <span className="font-medium">Number:</span>
                  </div>
                  <span>{surah.number}</span>

                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-green-600" />
                    <span className="font-medium">Verses:</span>
                  </div>
                  <span>{surah.totalVerses}</span>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-600" />
                    <span className="font-medium">Revealed:</span>
                  </div>
                  <span>{surah.revelationPlace}</span>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-purple-600" />
                    <span className="font-medium">Order:</span>
                  </div>
                  <span>{surah.revelationOrder}</span>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {surah.juzNumber && (
                    <>
                      <span className="font-medium">Juz:</span>
                      <span>{surah.juzNumber}</span>
                    </>
                  )}
                  {surah.hizbNumber && (
                    <>
                      <span className="font-medium">Hizb:</span>
                      <span>{surah.hizbNumber}</span>
                    </>
                  )}
                  {surah.rukuNumber && (
                    <>
                      <span className="font-medium">Ruku:</span>
                      <span>{surah.rukuNumber}</span>
                    </>
                  )}
                </div>

                {surah.createdAt && (
                  <>
                    <Separator />
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>
                        Added: {new Date(surah.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Themes */}
            {surah.themes && surah.themes.length > 0 && (
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {surah.themes.map((theme: string, index: number) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick Navigation */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => router.push(`/surahs/${surah.number - 1}`)}
                  disabled={surah.number <= 1}
                >
                  ← Previous Surah
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => router.push(`/surahs/${surah.number + 1}`)}
                  disabled={surah.number >= 114}
                >
                  Next Surah →
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => router.push("/surahs")}
                >
                  All Surahs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurahDetailsPage;
