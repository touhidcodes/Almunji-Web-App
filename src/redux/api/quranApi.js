import { tagTypes } from "../tags";
import { baseApi } from "./baseApi";

export const quranApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllQuranVerse: build.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: [tagTypes.quran],
    }),
  }),
});

export const { useGetAllQuranVerseQuery } = quranApi;
