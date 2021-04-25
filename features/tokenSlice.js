import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import ASYNC_STATUS from "../constants/asyncStatus";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

// userSlice와 todayBeersSlice의 액션 크리에이터를 임폴트 하면 module 간의 cycle이 생겨서 경고창이 뜹니다. 그래서 임의로 액션 크리에이터를 만들었습니다.
const actionUserDeleted = () => ({
  type: "user/userDeleted",
});
const actionTodayBeerDeleted = () => ({ type: "todayBeers/todayBeersDeleted" });

const initialState = {
  idToken: null,
  status: "idle",
  error: null,
};

const saveIdToken = createAsyncThunk(
  "token/tokenSaved",
  async (idToken, { dispatch }) => {
    try {
      await SecureStore.setItemAsync("idToken", idToken);
      return idToken;
    } catch (err) {
      showErrorInDevelopment("failed id token save in the secure store ", err);
      dispatch(actionUserDeleted());
      dispatch(actionTodayBeerDeleted());
      dispatch(removeIdToken());
    }
  }
);
const getIdToken = createAsyncThunk(
  "token/tokenGotten",
  async (_, { dispatch }) => {
    try {
      const idToken = await SecureStore.getItemAsync("idToken");
      return idToken;
    } catch (err) {
      showErrorInDevelopment("failed id token load in the secure store ", err);
      dispatch(actionUserDeleted());
      dispatch(actionTodayBeerDeleted());
      dispatch(removeIdToken());
    }
  }
);
const removeIdToken = createAsyncThunk(
  "token/tokenRemoved",
  async (_, { dispatch }) => {
    try {
      await SecureStore.deleteItemAsync("idToken");
    } catch (err) {
      showErrorInDevelopment(
        "failed id token deletion in the secure store ",
        err
      );
      dispatch(actionUserDeleted());
      dispatch(actionTodayBeerDeleted());
      await SecureStore.setItemAsync("idToken", "");
    }
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokenStatusSet: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [saveIdToken.fulfilled]: (state, action) => {
      state.idToken = action.payload;
    },
    [getIdToken.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [getIdToken.fulfilled]: (state, action) => {
      state.status = ASYNC_STATUS.SUCCEED;
      state.idToken = action.payload;
    },
    [removeIdToken.fulfilled]: (state) => {
      state = initialState;
      return state;
    },
  },
});

const { tokenStatusSet } = tokenSlice.actions;

const selectIdToken = (state) => state.token.idToken;

export {
  tokenSlice,
  saveIdToken,
  getIdToken,
  removeIdToken,
  tokenStatusSet,
  selectIdToken,
};
