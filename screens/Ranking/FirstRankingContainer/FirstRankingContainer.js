import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { CountUp } from "use-count-up";

import styles from "./styles";
import { PRIMARY_ORANGE } from "../../../constants/colors";

const FirstRankingContainer = ({ beerInfo }) => {
  return (
    <>
      <View
        style={[
          styles.firstRankingNumberContainer,
          {
            transform: [{ translateY: 80 }, { translateX: 30 }],
          },
        ]}
      >
        <Text style={styles.firstNumber}>1</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: beerInfo.imagePath }} />
        </View>
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
          <CountUp isCounting end={beerInfo.averageRating} duration={4} /> stars
        </Text>
        <Text style={styles.reviewCount}>
          based on{" "}
          <CountUp isCounting end={beerInfo.reviewCounts} duration={3.2} />{" "}
          review
        </Text>
        <Text style={[styles.firstName, styles.resizeFont(beerInfo.name)]}>
          {beerInfo.name}
        </Text>
      </View>
    </>
  );
};

export default FirstRankingContainer;
