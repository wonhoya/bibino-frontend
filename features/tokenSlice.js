import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  token: null,
};

const getToken = createAsyncThunk("token/getToken", async () => {
  const accessToken = await SecureStore.getItemAsync("accessToken");

  return accessToken;
});

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
  extraReducers: {
    [getToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
  },
});

export { tokenSlice, getToken };
