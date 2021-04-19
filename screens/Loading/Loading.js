import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import styles from "./styles";

const Loading = () => {
  const handleAnimationFinish = () => {
    console.log("finished");
  };
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/loadingAnimation.json")}
        style={styles.animation}
        autoPlay
        loop={true}
        speed={0.6}
        onAnimationFinish={handleAnimationFinish}
      />
    </View>
  );
};

export default Loading;
