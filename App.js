import React, { useState } from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import SplashAnimation from "./screens/SplashAnimation/SplashAnimation";
import Intro from "./screens/Intro/Intro";
import RatingBoard from "./components/shared/RatingBoard/RatingBoard";

export default function App() {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  let [fontsLoaded] = useFonts({
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <RatingBoard mode="static" rating="3" total="5" size="30" />
    </View>
  );

  // return (
  //   <>
  //     {!isAnimationFinished ? (
  //       <SplashAnimation handleAnimationFinish={handleAnimationFinish} />
  //     ) : (
  //       <Intro />
  //     )}
  //   </>
  // );
}
