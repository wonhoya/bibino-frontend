import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SERVER_URL } from "../config";
import ASYNC_STATE from "../constants/asyncState";
import generateHeaderOption from "../utils/generateHeaderOption";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const initialState = {
  beers: [],
  timestamp: null,
  status: "idle",
  error: null,
};

const fetchTodayBeers = createAsyncThunk(
  "todayBeers/fetchTodayBeers",
  async ({ userId, idToken }) => {
    try {
      const headers = generateHeaderOption(idToken);
      const response = await fetch(
        `${serverUrl}/users/${userId}/recommendations`,
        { headers }
      );
      const beers = await response.json();
      const timestamp = Date.now();

      return { beers, timestamp };
    } catch (err) {
      showErrorInDevelopment("Failed today beers fetch ", err);
    } finally {
      todayBeersStatusSet(ASYNC_STATE.IDLE);
    }
  }
);

const todayBeersSlice = createSlice({
  name: "todayBeers",
  initialState,
  reducers: {
    todayBeersStatusSet: (state, action) => {
      state.status = action.payload;
    },
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

const {
  todayBeersAdded,
  todayBeersDeleted,
  todayBeersStatusSet,
} = todayBeersSlice.actions;

export {
  todayBeersSlice,
  fetchTodayBeers,
  todayBeersAdded,
  todayBeersDeleted,
  todayBeersStatusSet,
};
