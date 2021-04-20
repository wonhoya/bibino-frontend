import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const SearchCard = ({
  beer: { name, manufacturingDate, imageSource, description },
  backgroundColor,
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate("Beer", {
          params: {
            /*나중에 파라미터 삽입 */
          },
        })
      }
    >
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
