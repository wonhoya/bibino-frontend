import React from "react";
import { View, ImageBackground } from "react-native";

import styles from "./styles";

const ImageContainer = ({ source }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={source} />
    </View>
  );
};

export default ImageContainer;
