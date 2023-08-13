import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import eventService from "../service/eventService";

interface EventType {
    _id?: string;
    eventTitle?: string;
    eventDesc?: string;
    from?: Date;
    to?: Date;
    eventLocation?: string;
}

export interface NewsState {
    eventItem: EventType[] | null;
    eventTitle?: string;
    eventDesc?: string;
    from?: Date | null;
    to?: Date | null;
    eventLocation?: string
}

const initialState: NewsState = {
    eventItem: [],
    eventTitle: '',
    eventDesc: '',
    from: null,
    to: null,
    eventLocation: '',
};

export const addEvent = createAsyncThunk(
    "event/add",
    async (eventData: any, thunkAPI) => {
        try {
            return await eventService.addEvent(eventData);
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
export const getAllEvent = createAsyncThunk("event/all", async (thunkAPI) => {
    try {
        return await eventService.getAllEvent();
    } catch (error: any) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();

        // return thunkAPI.rejectWithValue(message);
    }
});

// get single news when user click one of the news in homepage
export const getEvent = createAsyncThunk(
    "event/item",
    async (id: any, thunkAPI) => {
        try {
            return await eventService.getEvent(id);
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

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvent.fulfilled, (state, action: any) => {
                state.eventItem = action.payload;
            })
            .addCase(getEvent.fulfilled, (state, action: any) => {
                state.eventTitle = action.payload.eventTitle;
                state.eventDesc = action.payload.eventDesc;
                state.eventLocation = action.payload.eventLocation;
                state.from = action.payload.from;
                state.to = action.payload.to;
            });
    },
});

export const { } = eventSlice.actions;
export default eventSlice.reducer;
