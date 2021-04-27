import React from "react";

import { View, Text, Image } from "react-native";
import { CountUp } from "use-count-up";
import styles from "./styles";

const ThirdRankingContainer = ({ beerInfo }) => {
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
        <Text style={styles.rating}>
          <CountUp isCounting end={beerInfo.totalRating} duration={5} /> stars
        </Text>
        <Text style={styles.reviewCount}>
          based on{" "}
          <CountUp isCounting end={beerInfo.reviewCounts} duration={5} /> review
        </Text>
        <Text style={[styles.thirdName, styles.resizeFont(beerInfo.name)]}>
          {beerInfo.name}
        </Text>
      </View>
    </>
  );
};

export default ThirdRankingContainer;
