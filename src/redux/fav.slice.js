import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "favorite",
  initialState: {
    value: false,
  },
  reducers: {
    onFav: (state) => {
      state.value = true;
    },
    offFav: (state) => {
      state.value = false;
    },
    toggleFav: (state) => {
      state.value = !state.value;
    },
  },
});

export const { onFav, offFav, toggleFav } = favSlice.actions;
export default favSlice.reducer;
