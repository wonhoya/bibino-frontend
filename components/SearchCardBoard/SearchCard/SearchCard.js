import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const SearchCard = ({
  beer: { id, name, imagePath, description },
  backgroundColor,
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate("Beer", {
          params: {
            id,
          },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imagePath }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
