import { tagTypes } from "../tags";
import { baseQuranApi } from "./baseApi";

export const quranApi = baseQuranApi.injectEndpoints({
  endpoints: (build) => ({
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
        url: `/ben-abubakrzakaria/${chapter}.json`,
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
  }),
});

export const {
  useGetAllQuranVerseQuery,
  useGetSurahByChapterQuery,
  useGetSurahBengaliByChapterQuery,
} = quranApi;
