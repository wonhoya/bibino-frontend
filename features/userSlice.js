import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SERVER_URL } from "../config";
import ASYNC_STATUS from "../constants/asyncStatus";
import getGoogleIdToken from "../utils/getGoogleIdToken";
import generateHeaderOption from "../utils/generateHeaderOption";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";
import { saveIdToken } from "./tokenSlice";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const initialState = {
  id: null,
  name: null,
  avatar: null,
  status: ASYNC_STATUS.IDLE,
  error: null,
  beers: [],
  shouldFetchBeers: true,
};

const signInUser = createAsyncThunk(
  "user/signInUser",
  async (idToken, { dispatch }) => {
    try {
      const googleIdToken = await getGoogleIdToken(idToken);

      const headers = generateHeaderOption(googleIdToken);
      const response = await fetch(`${serverUrl}/users/sign-in`, {
        method: "POST",
        headers,
      });
      const { user, idTokenByBibino } = await response.json();
      await dispatch(saveIdToken(idTokenByBibino));
      dispatch(userBeersFetched());
      return {
        user: {
          id: user._id,
          avatar: user.imagePath,
          name: user.name,
          beers: user.beers,
        },
      };
    } catch (err) {
      showErrorInDevelopment("Faild an user sign in ", err);
      throw err;
    }
  }
);

const fetchMyBeers = createAsyncThunk(
  "user/fetchMyBeers",
  async (_, { getState }) => {
    try {
      const { idToken } = getState().token;
      const { id: userId } = getState().user;
      const headers = generateHeaderOption(idToken);
      const response = await fetch(`${serverUrl}/users/${userId}/my-beers`);
    } catch (err) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStatusSet: (state, action) => {
      state.status = action.payload;
    },
    userBeersFetched: (state) => {
      state.shouldFetchBeers = false;
    },
    userDeleted: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [signInUser.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [signInUser.fulfilled]: (state, action) => {
      const { user } = action.payload;
      state.status = ASYNC_STATUS.SUCCEED;
      Object.assign(state, user);
    },
  },
});

const { userStatusSet, userDeleted, userBeersFetched } = userSlice.actions;

export { userSlice, signInUser, userStatusSet, userDeleted, userBeersFetched };
