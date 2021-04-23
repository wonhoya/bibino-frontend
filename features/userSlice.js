import { createSlice, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";

import { saveIdToken } from "./tokenSlice";
import { SERVER_URL } from "../config";
import ASYNC_STATE from "../constants/asyncState";

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
      const response = await fetch(`${serverUrl}/signIn`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idTokenByGoogle}`,
        },
      });

      const { user, idTokenByBibino } = await response.json();
      dispatch(saveIdToken(idTokenByBibino));

      return {
        user: { id: user._id, avatar: user.imagePath, name: user.name },
      };
    } catch (err) {
      console.error("Faild get user data: ", err);
    } finally {
      dispatch(userStateSet(ASYNC_STATE.IDLE));
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
