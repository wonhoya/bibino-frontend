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
import { todayBeersSlice } from "./todayBeersSlice";
import { userSlice } from "./userSlice";
import { commentsSlice } from "./commentsSlice";

const todayBeersPersistConfig = {
  key: "todayBeers",
  storage: AsyncStorage,
  blacklist: ["status", "error"],
};
const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
  blacklist: ["status", "error", "idToken"],
};

const rootReducer = combineReducers({
  todayBeers: persistReducer(todayBeersPersistConfig, todayBeersSlice.reducer),
  user: persistReducer(userPersistConfig, userSlice.reducer),
  comments: commentsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
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
