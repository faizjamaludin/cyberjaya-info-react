import { configureStore } from "@reduxjs/toolkit";
import resizeSlize from "./resize/resizeSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    resize: resizeSlize,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
