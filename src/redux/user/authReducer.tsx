import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: "",
        error: null,
    },
    reducers: {
        registerSuccess: (state) => {
            state.isAuthenticated = true;
            state.error = null
        },
        registerFail: (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        loginSuccess: (state) => {
            state.isAuthenticated = true;
            state.token = "";
            state.error = null;
        },
        loginFail: (state, action) => {
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    }
})

export const { registerSuccess, registerFail, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;