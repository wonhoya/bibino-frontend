import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { saveToken } from "./tokenSlice";

import getServerUrl from "../utils/getServerUrl";

const serverUrl = getServerUrl();

const initialState = {
  id: null,
  name: null,
  avatar: null,
  status: "idle",
  error: null,
};

const signInUser = createAsyncThunk(
  "user/SIGN_IN_USER",
  async ({ accessToken }, { dispatch }) => {
    const response = await fetch(`${serverUrl}/api/signin`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userWithToken = await response.json();
    dispatch(saveToken(/* accessToken */));
    /*
      return 하는 객체는 다음과 같은 형태로 가공해야 한다.
      {
        user: { id: "id", name: "name" avatar: "base64 avatar image"},

      }
    */
    return userWithToken;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.status = "loading";
    },
    [signInUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [signInUser.fulfilled]: (state, action) => {
      const { user } = action.payload;

      state.status = "suceeded";
      Object.assign(state.user, user);
    },
  },
});

export { userSlice, signInUser };
