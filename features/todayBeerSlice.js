import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import getServerUrl from "../utils/getServerUrl";

const serverUrl = getServerUrl();

const initialState = {
  beers: [],
  timestamp: null,
  status: "idle",
  error: null,
};

const getTodayBeers = createAsyncThunk("todayBeer/getTodayBeers", async () => {
  const response = await fetch(`${serverUrl}/api/main`);
  const beers = await response.json();
  // 정제된 today's beers 배열을 반환해야 한다
  return beers;
});

const todayBeerSlice = createSlice({
  name: "todayBeer",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodayBeers.pending]: ({ state }) => {
      state.todayBeer.status = "loading";
    },
    [getTodayBeers.rejected]: (state, action) => {
      state.todayBeer.status = "failed";
      state.error = action.payload;
    },
    [getTodayBeers.fulfilled]: (state, action) => {
      state.todayBeer.status = "suceeded";
      state.todayBeer.beers = action.payload;
    },
  },
});

export { todayBeerSlice, getTodayBeers };
