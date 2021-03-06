import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import "./config/auth";

import AppNavigation from "./navigations/AppNavigation";

import { store, persistedStore } from "./features/store";

import SplashAnimation from "./screens/SplashAnimation/SplashAnimation";

export default function App() {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleAnimationFinish = () => {
    setIsAnimationFinished(true);
  };

  return (
    <>
      {!isAnimationFinished ? (
        <SplashAnimation handleAnimationFinish={handleAnimationFinish} />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <AppNavigation />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
