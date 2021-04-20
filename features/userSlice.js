import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

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
  "user/signInUser",
  async ({ accessToken }) => {
    const response = await fetch(`${serverUrl}/api/signin`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userWithToken = await response.json();

    await SecureStore.setItemAsync(
      "accessToken",
      "real accessToken value from userWithToken"
    );
    /*
      return 하는 객체는 다음과 같은 형태로 가공해야 한다.
      {
        user: { id: "id", name: "name" avatar: "base64 avatar image"},
        token: "accessToken",
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
      state.user.status = "loading";
    },
    [signInUser.rejected]: (state, action) => {
      state.user.status = "failed";
      state.error = action.payload;
    },
    [signInUser.fulfilled]: (state, action) => {
      const { token, user } = action.payload;

      state.user.status = "suceeded";
      Object.assign(state.user, user);
      state.token = token;
    },
  },
});

export { userSlice, signInUser };
