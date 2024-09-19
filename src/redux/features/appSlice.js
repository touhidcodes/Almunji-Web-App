import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: "",
};

export const flatSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchParams(state, action) {
      state.params = action.payload.params;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchParams } = flatSlice.actions;

export default flatSlice.reducer;
