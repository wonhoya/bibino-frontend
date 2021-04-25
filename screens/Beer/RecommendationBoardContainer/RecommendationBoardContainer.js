import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import RecommendationBoard from "../../../components/RecommendationBoard/RecommendationBoard";

const RecommendationBoardContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Similar Beers</Text>
      <RecommendationBoard />
    </View>
  );
};

export default RecommendationBoardContainer;
