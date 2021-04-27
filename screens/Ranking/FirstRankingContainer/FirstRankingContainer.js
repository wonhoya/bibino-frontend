import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { View, Text } from "react-native";
import { CountUp } from "use-count-up";
import styles from "./styles";
import { PRIMARY_ORANGE } from "../../../constants/colors";

const FirstRankingContainer = () => {
  return (
    <>
      <View
        style={[
          styles.firstRankingNumberContainer,
          {
            transform: [{ translateY: 50 }, { translateX: 30 }],
          },
        ]}
      >
        <Text style={styles.firstNumber}>1</Text>
      </View>
      <View
        style={[
          styles.firstRankingDescriptionContainer,
          {
            transform: [{ translateX: 35 }],
          },
        ]}
      >
        <FontAwesome5 name="crown" size={30} color={PRIMARY_ORANGE} />
        <Text style={styles.rating}>
          <CountUp isCounting end={4.5} duration={4} /> stars
        </Text>
        <Text style={styles.reviewCount}>
          based on <CountUp isCounting end={1320} duration={3.2} /> review
        </Text>
        <Text style={styles.firstName}>Kloud</Text>
      </View>
    </>
  );
};

export default FirstRankingContainer;
