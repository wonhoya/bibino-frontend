import React from "react";
import { CountUp } from "use-count-up";

import { View, Text } from "react-native";
import styles from "./styles";

const thirdRankingContainer = () => {
  return (
    <>
      <View
        style={[
          styles.thirdRankingNumberContainer,
          {
            transform: [{ translateY: 10 }, { translateX: -5 }],
          },
        ]}
      >
        <Text style={styles.thirdNumber}>3</Text>
      </View>
      <View style={styles.thirdRankingDescriptionContainer}>
        <Text style={styles.rating}>2.5 stars</Text>
        <Text style={styles.reviewCount}>
          based on <CountUp isCounting end={132} duration={5} /> review
        </Text>
        <Text style={styles.thirdName}>Kloud</Text>
      </View>
    </>
  );
};

export default thirdRankingContainer;
