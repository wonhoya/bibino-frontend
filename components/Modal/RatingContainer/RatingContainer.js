import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import RatingBoard from "../../shared/RatingBoard/RatingBoard";

const RatingContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <View style={styles.textContainer}>
        <Text style={styles.myRating}>My Rating</Text>
        <Text style={styles.giveStar}>give star</Text>
      </View>
      <View style={styles.RatingBoard}>
        <RatingBoard mode="dynamic" />
      </View>
    </View>
  );
};

export default RatingContainer;
