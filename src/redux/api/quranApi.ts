import { tagTypes } from "../tags";
import { baseQuranApi } from "./baseApi";

export const quranApi = baseQuranApi.injectEndpoints({
  endpoints: (build) => ({
    getChapters: build.query({
      query: () => ({
        url: `/surah.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
    getChapterVerses: build.query({
      query: (chapter) => ({
        url: `/${chapter}.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
    getAllQuranVerse: build.query({
      query: (chapter) => ({
        url: `/ara-qurandoorinonun/${chapter}.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),

    getSurahByChapter: build.query({
      query: (chapter) => ({
        url: `/ara-qurandoorinonun/${chapter}.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
    getSurahBengaliByChapter: build.query({
      query: (chapter) => ({
        url: `/ben-muhiuddinkhan/${chapter}.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
  }),
});

export const {
  useGetChaptersQuery,
  useGetChapterVersesQuery,
  useGetAllQuranVerseQuery,
  useGetSurahByChapterQuery,
  useGetSurahBengaliByChapterQuery,
} = quranApi;
