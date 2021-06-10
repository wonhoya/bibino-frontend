import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

const CameraLoading = () => {
  return (
    <View style={styles.resultLoadingContainer}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require("../../assets/animations/resultScreenLoadingAnimation.json")}
          style={styles.animation}
          autoPlay
          loop={true}
          speed={0.6}
        />
      </View>
      <View style={styles.descriptionContainer} />
    </View>
  );
};

export default CameraLoading;
