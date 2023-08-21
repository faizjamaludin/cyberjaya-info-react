import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

export interface ResizeState {
  isOpen: boolean;
}

const open = localStorage.getItem("open");

const initialState: ResizeState = {
  isOpen: open ? JSON.parse(open) : false,
};

export const resizeSlice = createSlice({
  name: "resize",
  initialState,
  reducers: {
    openCloseSideNav(state) {
      state.isOpen = !state.isOpen;
      localStorage.setItem("open", JSON.stringify(state.isOpen));
    },
  },
});

export const { openCloseSideNav } = resizeSlice.actions;
export default resizeSlice.reducer;
