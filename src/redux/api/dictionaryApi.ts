import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dictionaryApiBaseUrl =
  process.env.NEXT_PUBLIC_DICTIONARY_API_URL ||
  "http://localhost:5000/api/v1/dictionary";

type DictionaryResponse<T> = { data: T };

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: dictionaryApiBaseUrl,
    credentials: "include",
  }),
  tagTypes: ["Dictionary"],
  endpoints: (build) => ({
    getDictionarySuggestions: build.query<DictionaryResponse<any[]>, string>({
      query: (searchTerm) => ({
        url: "/suggestion",
        method: "GET",
        params: { searchTerm },
      }),
      transformResponse: (response: DictionaryResponse<any[]> | any[]) =>
        Array.isArray(response) ? { data: response } : response,
      providesTags: ["Dictionary"],
    }),
    getDictionaryWord: build.query<DictionaryResponse<any>, string>({
      query: (id) => ({
        url: `/${encodeURIComponent(id)}`,
        method: "GET",
      }),
      providesTags: ["Dictionary"],
    }),
  }),
});

export const { useGetDictionarySuggestionsQuery, useGetDictionaryWordQuery } =
  dictionaryApi;
