import { baseApi, baseQuranApi } from "./api/baseApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [baseQuranApi.reducerPath]: baseQuranApi.reducer,
};
