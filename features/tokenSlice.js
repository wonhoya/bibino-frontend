import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  token: null,
};

const saveToken = createAsyncThunk("token/tokenSaved", async (accessToken) => {
  await SecureStore.setItemAsync(accessToken);
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
  reducers: {},
  extraReducers: {
    [saveToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [getToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [removeToken.fulfilled]: (state) => {
      state.token = null;
    },
  },
});

export { tokenSlice, saveToken, getToken, removeToken };
