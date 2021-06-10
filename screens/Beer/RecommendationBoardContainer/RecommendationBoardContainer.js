import React from "react";
import { View } from "react-native";

import styles from "./styles";
import RecommendationBoard from "../../../components/RecommendationBoard/RecommendationBoard";

const RecommendationBoardContainer = ({ beers }) => {
  return (
    <View style={styles.container}>
      <RecommendationBoard beers={beers} />
    </View>
  );
};

export default RecommendationBoardContainer;
