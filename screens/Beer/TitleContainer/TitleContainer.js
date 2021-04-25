import React from "react";
import { View, Text, Dimensions } from "react-native";

import styles from "./styles";
import { RUBIK_MEDIUM } from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const TitleContainer = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: RUBIK_MEDIUM, fontSize: windowWidth / 12 }}>
        {title}
      </Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.ratingFont}>4.2</Text>
        <Text style={styles.descriptionFont}>124 reviews</Text>
      </View>
    </View>
  );
};

export default TitleContainer;
