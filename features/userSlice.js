import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

import { SERVER_URL } from "../config";
import ASYNC_STATUS from "../constants/asyncStatus";
import getGoogleIdToken from "../utils/getGoogleIdToken";
import generateHeaderOption from "../utils/generateHeaderOption";
import showErrorInDevelopment from "../utils/showErrorInDevelopment";

const serverUrl = SERVER_URL[process.env.NODE_ENV];

const signInUser = createAsyncThunk("user/signInUser", async (idToken) => {
  try {
    const googleIdToken = await getGoogleIdToken(idToken);

    const headers = generateHeaderOption(googleIdToken);
    const response = await fetch(`${serverUrl}/users/sign-in`, {
      method: "POST",
      headers,
    });
    const { user, appIdToken } = await response.json();
    await SecureStore.setItemAsync("idToken", appIdToken);

    return {
      user: {
        id: user._id,
        idToken: appIdToken,
        name: user.name,
        avatar: user.imagePath,
        reviewCounts: user.reviewCounts,
        characteristic: {
          averageBody: user.averageBody,
          averageAroma: user.averageAroma,
          averageSparkling: user.averageSparkling,
        },
        beers: user.beers || [],
      },
    };
  } catch (err) {
    showErrorInDevelopment("Faild an user sign in ", err);
    throw err;
  }
});

const fetchMyBeers = createAsyncThunk(
  "user/fetchMyBeers",
  async (_, { getState }) => {
    try {
      const { id: userId, idToken } = getState().user;
      const headers = generateHeaderOption(idToken);
      const response = await fetch(`${serverUrl}/users/${userId}`, { headers });

      const { beers } = await response.json();

      return beers || [];
    } catch (err) {
      showErrorInDevelopment("Failed user's beer fetch ", err);
      throw err;
    }
  }
);

const getIdToken = createAsyncThunk("user/getIdToken", async () => {
  try {
    return await SecureStore.getItemAsync("idToken");
  } catch (err) {
    showErrorInDevelopment("failed id token load in the secure store ", err);
    throw err;
  }
});

const removeIdToken = createAsyncThunk("user/removeIdToken", async () => {
  try {
    await SecureStore.deleteItemAsync("idToken");
  } catch (err) {
    showErrorInDevelopment(
      "failed id token deletion in the secure store ",
      err
    );
    throw err;
  }
});

const initialState = {
  id: null,
  idToken: null,
  name: null,
  avatar: null,
  characteristic: {},
  beers: [],
  status: ASYNC_STATUS.IDLE,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDeleted: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: {
    [signInUser.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [signInUser.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [signInUser.fulfilled]: (state, action) => {
      const { user } = action.payload;
      state.status = ASYNC_STATUS.SUCCEED;
      Object.assign(state, user);
    },
    [fetchMyBeers.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [fetchMyBeers.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [fetchMyBeers.fulfilled]: (state, action) => {
      state.status = ASYNC_STATUS.SUCCEED;
      state.beers = action.payload;
    },
    [getIdToken.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [getIdToken.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [getIdToken.fulfilled]: (state, action) => {
      state.status = ASYNC_STATUS.SUCCEED;
      state.idToken = action.payload;
    },
    [removeIdToken.pending]: (state) => {
      state.status = ASYNC_STATUS.LOADING;
    },
    [removeIdToken.rejected]: (state, action) => {
      state.status = ASYNC_STATUS.FAILED;
      state.error = action.payload;
    },
    [removeIdToken.fulfilled]: (state) => {
      state = initialState;
      return state;
    },
  },
});

const { userDeleted } = userSlice.actions;

const getUser = (state) => state.user;
const selectIdToken = (state) => state.user.idToken;

export {
  userSlice,
  signInUser,
  userDeleted,
  removeIdToken,
  getIdToken,
  fetchMyBeers,
  getUser,
  selectIdToken,
};
