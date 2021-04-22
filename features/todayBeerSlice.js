import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SERVER_URL } from "../config";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const initialState = {
  beers: [],
  timestamp: null,
  status: "idle",
  error: null,
};

const fetchTodayBeers = createAsyncThunk(
  "todayBeers/todayBeersFetched",
  async () => {
    const response = await fetch(`${serverUrl}/api/main`);
    const beers = await response.json();
    // 정제된 today's beers 배열을 반환해야 한다
    return beers;
  }
);

const todayBeerSlice = createSlice({
  name: "todayBeers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodayBeers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTodayBeers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [fetchTodayBeers.fulfilled]: (state, action) => {
      state.status = "suceeded";
      state.beers = action.payload;
    },
  },
});

export { todayBeerSlice, fetchTodayBeers };