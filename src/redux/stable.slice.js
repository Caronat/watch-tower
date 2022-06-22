import { createSlice } from "@reduxjs/toolkit";

export const stableSlice = createSlice({
  name: "stable",
  initialState: {
    value: true,
  },
  reducers: {
    onStable: (state) => {
      state.value = true;
    },
    offStable: (state) => {
      state.value = false;
    },
    toggleStable: (state) => {
      state.value = !state.value;
    },
  },
});

export const { onStable, offStable, toggleStable } = stableSlice.actions;

export default stableSlice.reducer;
