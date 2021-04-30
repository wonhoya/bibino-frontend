import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_SERVER_URL } from "@env";

import ASYNC_STATUS from "../constants/asyncStatus";
import generateHeaderOption from "../utils/generateHeaderOption";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

const initialState = {
  beers: [],
  timestamp: null,
  status: "idle",
  error: null,
};

const fetchTodayBeers = createAsyncThunk(
  "todayBeers/fetchTodayBeers",
  async (_, { getState }) => {
    const { user } = getState();
    try {
      const headers = generateHeaderOption(user.idToken);
      const response = await fetch(
        `${API_SERVER_URL}/users/${user.id}/recommendations`,
        { headers }
      );
      const beers = await response.json();
      const timestamp = Date.now();

      return { beers, timestamp };
    } catch (err) {
      showErrorInDevelopment("Failed today beers fetch ", err);
      throw err;
    }
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
      state.status = ASYNC_STATUS.LOADING;
    },
    [fetchTodayBeers.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [fetchTodayBeers.fulfilled]: (state, action) => {
      const { beers, timestamp } = action.payload;
      state.status = ASYNC_STATUS.SUCCEED;
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
