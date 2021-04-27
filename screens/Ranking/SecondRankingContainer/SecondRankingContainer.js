import React from "react";

import { View, Text, Image } from "react-native";
import { CountUp } from "use-count-up";
import styles from "./styles";

const SecondRankingContainer = ({ beerInfo }) => {
  return (
    <>
      <View style={styles.secondRankingDescriptionContainer}>
        <Text style={styles.rating}>
          <CountUp isCounting end={beerInfo.totalRating} duration={3.2} /> stars
        </Text>
        <Text style={styles.reviewCount}>
          based on{" "}
          <CountUp isCounting end={beerInfo.reviewCounts} duration={3.2} />{" "}
          review
        </Text>
        <Text style={[styles.secondName, styles.resizeFont(beerInfo.name)]}>
          {beerInfo.name}
        </Text>
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
