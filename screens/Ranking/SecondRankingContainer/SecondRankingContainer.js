import React from "react";

import { View, Text } from "react-native";
import { CountUp } from "use-count-up";
import styles from "./styles";

const SecondRankingContainer = () => {
  return (
    <>
      <View style={styles.secondRankingDescriptionContainer}>
        <Text style={styles.rating}>
          <CountUp isCounting end={3.5} duration={3.2} /> stars
        </Text>
        <Text style={styles.reviewCount}>
          based on <CountUp isCounting end={402} duration={3.2} /> review
        </Text>
        <Text style={styles.secondName}>Cass</Text>
      </View>
      <View
        style={[
          styles.secondRankingNumberContainer,
          {
            transform: [{ translateY: 50 }, { translateX: 5 }],
          },
        ]}
      >
        <Text style={styles.secondNumber}>2</Text>
      </View>
    </>
  );
};

export default SecondRankingContainer;
