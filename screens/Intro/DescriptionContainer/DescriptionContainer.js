import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const DescriptionContainer = ({ title, description, button }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonConatainer}>{button}</View>
    </View>
  );
};

export default DescriptionContainer;
