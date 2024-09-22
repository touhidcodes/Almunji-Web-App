import { tagTypes } from "../tags";
import { baseQuranApi } from "./baseApi";

export const quranApi = baseQuranApi.injectEndpoints({
  endpoints: (build) => ({
    getAllQuranVerse: build.query({
      query: () => ({
        url: "/ara-qurandoorinonun.json",
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
  }),
});

export const { useGetAllQuranVerseQuery } = quranApi;
