import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/auth/authSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import resizeSlice from "./resize/resizeSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        resize: resizeSlice
    }
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector