import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const BeerCard = ({ beerId, imagePath, name, description }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.topCircularBorder,
        styles.bottomCircularBorder,
        styles.container,
      ]}
      onPress={() => navigate("Beer", { beerId })}
      activeOpacity={1}
    >
      <View style={[styles.topCircularBorder, styles.imageContainer]}>
        <ImageBackground
          style={[styles.topCircularBorder, styles.image]}
          source={{ uri: imagePath }}
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
