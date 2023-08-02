import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";


export interface AuthState {
    isAuthenticated: boolean;
    token: string;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: "",
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess: (state, action: PayloadAction<{ error: string }>) => {
            state.isAuthenticated = true;
            state.error = null
            state.error = action.payload.error
        },
        registerFail: (state) => {
            state.isAuthenticated = false;
        },
        loginSuccess: (state) => {
            state.isAuthenticated = true;
            state.token = "";
            state.error = null;
        },
        loginFail: (state, action) => {
            state.isAuthenticated = false;
        },
    }
})

export const { registerSuccess, registerFail, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
