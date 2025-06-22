import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { baseApi, baseQuranApi } from "./api/baseApi";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(baseQuranApi.middleware),
});
