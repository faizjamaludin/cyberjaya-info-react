import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import authService from "../service/authService";
import { useNavigate } from "react-router-dom";

interface UserType {
  fullName?: string;
  email?: string;
  password?: string;
}

export interface AuthState {
  user: UserType | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  message?: string;
}

const initialState: AuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAuthenticated: false,
  token: null,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: any, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.user = null;
      state.message = "";
    },
    isAuth: (state) => {
      state.token = localStorage.getItem("token");

      if (state.token !== null) {
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset, isAuth, logout } = authSlice.actions;
export default authSlice.reducer;
