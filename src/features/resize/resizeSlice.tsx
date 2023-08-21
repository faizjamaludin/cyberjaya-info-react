import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

export interface ResizeState {
  isOpen: boolean;
}

const initialState: ResizeState = {
  isOpen: false,
};

export const resizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    openCloseSideNav(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCloseSideNav } = resizeSlice.actions;
export default resizeSlice.reducer;
