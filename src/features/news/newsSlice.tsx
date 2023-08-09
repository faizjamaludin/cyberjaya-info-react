import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import authService from "../service/authService";
import newsService from "../service/newsService";

interface NewsType {
  _id?: string;
  newsTitle?: string;
  newsInfo?: string;
  date?: Date;
}

export interface NewsState {
  newsItem: NewsType[] | null;
  newsTitle?: string;
  newsInfo?: string;
  date?: Date | null;
}

const initialState: NewsState = {
  newsItem: [],
  newsTitle: "",
  newsInfo: "",
  date: null,
};

export const addNews = createAsyncThunk(
  "news/add",
  async (newsData: any, thunkAPI) => {
    try {
      return await newsService.addNews(newsData);
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

// get all news to display in home page
export const getAllNews = createAsyncThunk("news/all", async (thunkAPI) => {
  try {
    return await newsService.getAllNews();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    // return thunkAPI.rejectWithValue(message);
  }
});

// get single news when user click one of the news in homepage
export const getNews = createAsyncThunk(
  "news/item",
  async (id: any, thunkAPI) => {
    try {
      return await newsService.getNews(id);
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

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action: any) => {
        state.newsItem = action.payload;
      })
      .addCase(getNews.fulfilled, (state, action: any) => {
        state.newsTitle = action.payload.newsTitle;
        state.newsInfo = action.payload.newsInfo;
        state.date = action.payload.date;
      });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
