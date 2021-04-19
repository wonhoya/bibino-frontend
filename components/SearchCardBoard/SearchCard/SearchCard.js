import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

const SearchCard = ({
  beer: { name, manufacturingDate, imageSource, description },
  backgroundColor,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer(backgroundColor)}>
        <Text style={styles.date}>{manufacturingDate}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
