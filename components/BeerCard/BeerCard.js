import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

/**
 * https://reactnative.dev/docs/images
 * Network Requests for Images 검색어로 검색 ㄲ
 */

const BeerCard = ({ imagePath, name, description }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.topCircularBorder,
        styles.bottomCircularBorder,
        styles.container,
      ]}
      onPress={() =>
        navigate("Beer", {
          params: {
            /*나중에 파라미터 삽입 */
          },
        })
      }
    >
      <View style={[styles.topCircularBorder, styles.imageContainer]}>
        <ImageBackground
          style={[styles.topCircularBorder, styles.image]}
          source={require("../../assets/pngs/beerSample1.png")}
        />
      </View>
      <View style={[styles.bottomCircularBorder, styles.descriptionContainer]}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeerCard;
