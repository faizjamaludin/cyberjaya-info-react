import { createSlice } from "@reduxjs/toolkit";

interface OpenCloseState {
  isOpen: boolean;
}

const initialState: OpenCloseState = {
  isOpen: true,
};

const resizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    openclose(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openclose } = resizeSlice.actions;
export default resizeSlice.reducer;
