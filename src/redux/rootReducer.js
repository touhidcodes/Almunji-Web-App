import { baseApi } from "./api/baseApi";
import flatReducer from "./features/appSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  flat: flatReducer,
};
