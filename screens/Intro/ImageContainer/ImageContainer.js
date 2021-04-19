import React from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";

const ImageContainer = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/pngs/introImage1.png")}
      />
    </View>
  );
};

export default ImageContainer;
