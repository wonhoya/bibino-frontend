import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import { SERVER_URL } from "../config";
import ASYNC_STATE from "../constants/asyncState";
import generateHeaderOption from "../utils/generateHeaderOption";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";
import { saveIdToken, removeIdToken } from "./tokenSlice";
import { fetchTodayBeers, todayBeersDeleted } from "./todayBeersSlice";

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
      const headers = generateHeaderOption(idTokenByGoogle);
      const response = await fetch(`${serverUrl}/users/sign-in`, {
        method: "POST",
        headers,
      });
      const { user, idTokenByBibino } = await response.json();
      const userInfo = {
        userId: user._id,
        idToken: idTokenByBibino,
      };
      await dispatch(fetchTodayBeers(userInfo));
      const resultAction = await dispatch(saveIdToken(idTokenByBibino));
      unwrapResult(resultAction);

      return {
        user: { id: user._id, avatar: user.imagePath, name: user.name },
      };
    } catch (err) {
      showErrorInDevelopment("Faild an user sign in ", err);
      dispatch(userDeleted());
      dispatch(todayBeersDeleted());
      dispatch(removeIdToken());
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStatusSet: (state, action) => {
      state.status = action.payload;
    },
    userDeleted: (state) => {
      state = initialState;
      return state;
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
      const { user } = action.payload;
      state.status = ASYNC_STATE.SUCCEED;
      Object.assign(state, user);
    },
  },
});

const { userStatusSet, userDeleted } = userSlice.actions;

export { userSlice, signInUser, userStatusSet, userDeleted };
