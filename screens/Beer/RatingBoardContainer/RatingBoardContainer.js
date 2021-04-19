import React from "react";
import { View } from "react-native";

import styles from "./styles";
import RatingBoard from "../../../components/shared/RatingBoard/RatingBoard";

const RatingBoardContainer = ({ rating }) => {
  return (
    <View style={styles.container}>
      <RatingBoard rating={rating} />
    </View>
  );
};

export default RatingBoardContainer;
