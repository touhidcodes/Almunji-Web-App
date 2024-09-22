import { baseApi, baseQuranApi } from "./api/baseApi";
import flatReducer from "./features/appSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [baseQuranApi.reducerPath]: baseQuranApi.reducer,

  flat: flatReducer,
};
