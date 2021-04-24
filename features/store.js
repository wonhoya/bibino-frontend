import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import * as SecureStore from "expo-secure-store";

import { todayBeersSlice } from "./todayBeersSlice";
import { tokenSlice } from "./tokenSlice";
import { userSlice } from "./userSlice";

// 이 코드는 스토리지 초기화를 쉽게해서 테스트를 수월하게 하기 위한 것입니다. 추후에 삭제해야 합니다.
// AsyncStorage.clear();
// SecureStore.deleteItemAsync("idToken");

const rootReducer = combineReducers({
  todayBeers: todayBeersSlice.reducer,
  token: tokenSlice.reducer,
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "todayBeers"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
const persistedStore = persistStore(store);

export { store, persistedStore };
