import React from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

import styles from "./styles";

const CameraLoading = ({ navigation }) => {
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
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Analzing...</Text>
      </View>
    </View>
  );
};

export default CameraLoading;