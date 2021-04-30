import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const TitleContainer = ({ title, rating, reviewCounts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.descriptionContainer}>
        <Text style={styles.ratingFont}>
          {rating ? `My Rating ${rating}` : null}
        </Text>
        <Text style={styles.descriptionFont}>{reviewCounts} reviews</Text>
      </View>
    </View>
  );
};

export default TitleContainer;
