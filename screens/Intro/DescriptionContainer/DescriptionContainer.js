import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const DescriptionContainer = ({ title, description, button }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>{button}</View>
    </View>
  );
};

export default DescriptionContainer;
