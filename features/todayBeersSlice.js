import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SERVER_URL } from "../config";
import ASYNC_STATE from "../constants/asyncState";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const initialState = {
  beers: [],
  timestamp: null,
  status: "idle",
  error: null,
};

const fetchTodayBeers = createAsyncThunk(
  "todayBeers/fetchTodayBeers",
  async () => {
    const response = await fetch(`${serverUrl}/api/beers`);
    const beers = await response.json();
    const timestamp = Date.now();

    // 정제된 today's beers 배열을 반환해야 한다
    return { beers, timestamp };
  }
);

const todayBeersSlice = createSlice({
  name: "todayBeers",
  initialState,
  reducers: {
    todayBeersAdded: (state, action) => {
      const { beers, timestamp } = action.payload;

      state.beers = beers;
      state.timestamp = timestamp;
    },
    todayBeersDeleted: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: {
    [fetchTodayBeers.pending]: (state) => {
      state.status = ASYNC_STATE.LOADING;
    },
    [fetchTodayBeers.rejected]: (state, action) => {
      state.status = ASYNC_STATE.FAILED;
      state.error = action.payload;
    },
    [fetchTodayBeers.fulfilled]: (state, action) => {
      const { beers, timestamp } = action.payload;
      state.status = ASYNC_STATE.SUCCEED;
      state.beers = beers;
      state.timestamp = timestamp;
    },
  },
});

const { todayBeersAdded, todayBeersDeleted } = todayBeersSlice.actions;
export { todayBeersSlice, fetchTodayBeers, todayBeersAdded, todayBeersDeleted };
