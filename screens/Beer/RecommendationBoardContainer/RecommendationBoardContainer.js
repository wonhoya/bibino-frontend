import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import RecommendationBoard from "../../../components/RecommendationBoard/RecommendationBoard";

const RecommendationBoardContainer = ({ beers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Similar Beers</Text>
      <RecommendationBoard beers={beers} />
    </View>
  );
};

export default RecommendationBoardContainer;
