import { configureStore } from "@reduxjs/toolkit";
import resizeSlize from "./resize/resizeSlice";

const store = configureStore({
  reducer: {
    resize: resizeSlize,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
