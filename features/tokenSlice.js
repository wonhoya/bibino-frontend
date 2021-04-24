import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import ASYNC_STATE from "../constants/asyncState";

const initialState = {
  idToken: null,
  status: "idle",
  error: null,
};

const saveIdToken = createAsyncThunk("token/tokenSaved", async (idToken) => {
  await SecureStore.setItemAsync("idToken", idToken);
  return idToken;
});

const getIdToken = createAsyncThunk("token/tokenGotten", async () => {
  const idToken = await SecureStore.getItemAsync("idToken");
  return idToken;
});

const removeIdToken = createAsyncThunk("token/tokenRemoved", async () => {
  await SecureStore.deleteItemAsync("idToken");
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
    [saveIdToken.fulfilled]: (state, action) => {
      state.idToken = action.payload;
    },
    [getIdToken.pending]: (state) => {
      state.status = ASYNC_STATE.LOADING;
    },
    [getIdToken.fulfilled]: (state, action) => {
      state.status = ASYNC_STATE.SUCCEED;
      state.idToken = action.payload;
    },
    [removeIdToken.fulfilled]: (state) => {
      state = initialState;
      return state;
    },
  },
});

const { tokenStateSet } = tokenSlice.actions;
export { tokenSlice, saveIdToken, getIdToken, removeIdToken, tokenStateSet };
