import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import { todayBeersAdded } from "./todayBeersSlice";
import { saveIdToken } from "./tokenSlice";
import { SERVER_URL } from "../config";
import ASYNC_STATE from "../constants/asyncState";
import getHeadersIncludedIdToken from "../utils/getHeadersIncludedIdToken";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const initialState = {
  id: null,
  name: null,
  avatar: null,
  status: ASYNC_STATE.IDLE,
  error: null,
};

const signInUser = createAsyncThunk(
  "user/userSignedIn",
  async (idTokenByGoogle, { dispatch }) => {
    try {
      const headers = getHeadersIncludedIdToken(idTokenByGoogle);
      const response = await fetch(`${serverUrl}/users/sign-in`, {
        method: "POST",
        headers,
      });

      const { user, idTokenByBibino, beers } = await response.json();
      const resultAction = await dispatch(saveIdToken(idTokenByBibino));
      unwrapResult(resultAction);
      dispatch(todayBeersAdded({ beers, timestamp: Date.now() }));

      return {
        user: { id: user._id, avatar: user.imagePath, name: user.name },
      };
    } catch (err) {
      console.error("Faild get user data: ", err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStateSet: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.status = ASYNC_STATE.LOADING;
    },
    [signInUser.rejected]: (state, action) => {
      state.status = ASYNC_STATE.FAILED;
      state.error = action.payload;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.status = ASYNC_STATE.SUCCEED;
      const { user } = action.payload;

      Object.assign(state, user);
    },
  },
});

const { userStateSet } = userSlice.actions;
export { userSlice, signInUser, userStateSet };
