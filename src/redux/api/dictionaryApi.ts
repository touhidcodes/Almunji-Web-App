import { tagTypes } from "../tags";
import { baseQuranApi } from "./baseApi";

export const dictionaryApi = baseQuranApi.injectEndpoints({
  endpoints: (build) => ({
    getDictionarySuggestions: build.query({
      query: (word) => ({
        url: `/dictionary/suggestion?word=${word}`,
        method: "GET",
      }),
      providesTags: [tagTypes.dictionary],
    }),
    getDictionaryWord: build.query({
      query: (id) => ({
        url: `/dictionary/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.dictionary],
    }),
  }),
});

export const { useGetDictionarySuggestionsQuery } = dictionaryApi;
