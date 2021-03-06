import React from "react";
import { View, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

import splash from "../../assets/splashScreen.png";

const SplashAnimation = ({ handleAnimationFinish }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={styles.stretch} />
      <LottieView
        source={require("../../assets/animations/splashAnimation.json")}
        style={styles.animation}
        autoPlay
        loop={false}
        speed={0.6}
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
};

export default SplashAnimation;
