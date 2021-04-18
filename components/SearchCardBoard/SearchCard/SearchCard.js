import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const SearchCard = ({
  beer: { name, manufacturingDate, imageSource, description },
  backgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer(backgroundColor)}>
        <Text style={styles.dateFont}>{manufacturingDate}</Text>
        <Text style={styles.nameFont}>{name}</Text>
        <Text style={styles.descriptionFont}>{description}</Text>
      </View>
    </View>
  );
};

export default SearchCard;
