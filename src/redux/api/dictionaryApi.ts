import { tagTypes } from "../tags";
import { baseServerApi } from "./baseApi";

export const dictionaryApi = baseServerApi.injectEndpoints({
  endpoints: (build) => ({
    getDictionarySuggestions: build.query({
      query: (debouncedSearchTerm) => {
        // Properly encode the search term for Persian/Arabic characters
        const encodedWord = encodeURIComponent(debouncedSearchTerm);
        return {
          url: `/dictionary/suggestion?searchTerm=${encodedWord}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.dictionary],
      // Handle undefined or null responses
      transformResponse: (response: any) => {
        if (!response || response === undefined) {
          return { data: [] };
        }
        return response;
      },
    }),
    getDictionaryWord: build.query({
      query: (id) => ({
        url: `/dictionary/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.dictionary],
      // // Handle undefined or null responses
      // transformResponse: (response: any) => {
      //   if (!response || response === undefined) {
      //     return { data: null };
      //   }
      //   return response;
      // },
    }),
  }),
});

export const { useGetDictionarySuggestionsQuery, useGetDictionaryWordQuery } =
  dictionaryApi;
