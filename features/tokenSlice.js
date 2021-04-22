import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import ASYNC_STATE from "../constants/asyncState";

const initialState = {
  accessToken: null,
  status: "idle",
  error: null,
};

const saveToken = createAsyncThunk("token/tokenSaved", async (accessToken) => {
  await SecureStore.setItemAsync("accessToken", accessToken);
  return accessToken;
});

const getToken = createAsyncThunk("token/tokenGotten", async () => {
  const accessToken = await SecureStore.getItemAsync("accessToken");
  return accessToken;
});

const removeToken = createAsyncThunk("token/tokenRemoved", async () => {
  await SecureStore.deleteItemAsync("accessToken");
  return;
});

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokenStateSet: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [saveToken.fulfilled]: (state, action) => {
      state.accessToken = action.payload;
    },
    [getToken.pending]: (state) => {
      state.status = ASYNC_STATE.LOADING;
    },
    [getToken.fulfilled]: (state, action) => {
      state.status = ASYNC_STATE.SUCCEED;
      state.accessToken = action.payload;
    },
    [removeToken.fulfilled]: (state) => {
      state.accessToken = null;
    },
  },
});

const { tokenStateSet } = tokenSlice.actions;
export { tokenSlice, saveToken, getToken, removeToken, tokenStateSet };
