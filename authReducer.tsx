import { createSlice } from "@reduxjs/toolkit";


interface authState {
    isAuthenticated: boolean;
    token: string;
    error: string | null;
}

const initialState: authState = {
    isAuthenticated: false,
    token: "",
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
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