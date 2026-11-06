import { baseQuranApi, baseServerApi } from "./api/baseApi";
import { dictionaryApi } from "./api/dictionaryApi";
import playerReducer from "./features/playerSlice";

export const reducer = {
  player: playerReducer,
  [baseServerApi.reducerPath]: baseServerApi.reducer,
  [baseQuranApi.reducerPath]: baseQuranApi.reducer,
  [dictionaryApi.reducerPath]: dictionaryApi.reducer,
};
