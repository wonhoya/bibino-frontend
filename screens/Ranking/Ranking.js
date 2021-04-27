import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const mockbeers = [1, 2, 3, 4, 5, 6, 7];

const Ranking = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hall of fame</Text>

      <View style={styles.firstContainer}>
        <View style={styles.firstRankingNumberContainer}>
          <Text style={styles.firstNumber}>1</Text>
        </View>
        <View style={styles.firstRankingDescriptionContainer}>
          <Text style={styles.rating}>4.5 stars</Text>
          <Text style={styles.reviewCount}>based on 124 review</Text>
          <Text style={styles.firstName}>Kloud</Text>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.secondRankingDescriptionContainer}>
          <Text style={styles.rating}>3.5 stars</Text>
          <Text style={styles.reviewCount}>based on 74 review</Text>
          <Text style={styles.secondName}>Cass</Text>
        </View>
        <View style={styles.secondRankingNumberContainer}>
          <Text style={styles.secondNumber}>2</Text>
        </View>
      </View>

      <View style={styles.thirdContainer}>
        <View style={styles.thirdRankingNumberContainer}>
          <Text style={styles.thirdNumber}>3</Text>
        </View>
        <View style={styles.thirdRankingDescriptionContainer}>
          <Text style={styles.rating}>2.5 stars</Text>
          <Text style={styles.reviewCount}>based on 124 review</Text>
          <Text style={styles.thirdName}>Kloud</Text>
        </View>
      </View>
      <View style={styles.restContainer}>
        {mockbeers.map((beer) => {
          return (
            <View>
              <Text>{beer}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Ranking;
