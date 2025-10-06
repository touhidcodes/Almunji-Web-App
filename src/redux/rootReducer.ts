import { baseApi, baseQuranApi } from "./api/baseApi";
import playerReducer from "./features/playerSlice";

export const reducer = {
  player: playerReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [baseQuranApi.reducerPath]: baseQuranApi.reducer,
};
