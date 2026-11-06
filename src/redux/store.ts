import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
import { baseServerApi } from "./api/baseApi";
import { baseQuranApi } from "./api/baseApi";
import { dictionaryApi } from "./api/dictionaryApi";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseServerApi.middleware)
      .concat(baseQuranApi.middleware)
      .concat(dictionaryApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
