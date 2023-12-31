import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import resizeSlice from "./resize/resizeSlice";
import newsSlice from "./news/newsSlice";
import eventSlice from "./event/eventSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    resize: resizeSlice,
    news: newsSlice,
    event: eventSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
