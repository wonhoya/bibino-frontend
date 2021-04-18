import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

/**
 * https://reactnative.dev/docs/images
 * Network Requests for Images 검색어로 검색 ㄲ
 */

const BeerCard = ({ beerImagePath, beerName, beerDescription }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.topCircularBorder, styles.imageContainer]}>
        <ImageBackground
          style={[styles.topCircularBorder, styles.beerImage]}
          source={require("../../assets/pngs/beerSample1.png")}
        />
      </View>
      <View style={[styles.bottomCircularBorder, styles.descriptionContainer]}>
        <Text style={styles.nameFont}>{beerName}</Text>
        <Text style={styles.descriptionFont}>{beerDescription}</Text>
      </View>
    </View>
  );
};

export default BeerCard;
