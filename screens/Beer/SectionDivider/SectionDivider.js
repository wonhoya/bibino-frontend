import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const SectionDivider = ({ direction, text }) => {
  return (
    <View style={styles.sectionContainer}>
      {direction === "right" ? (
        <View style={styles.line} />
      ) : (
        <Text style={styles.sectionTitle}>{text}</Text>
      )}
      {direction === "right" ? (
        <Text style={styles.sectionTitle}>{text}</Text>
      ) : (
        <View style={styles.line} />
      )}
    </View>
  );
};

export default SectionDivider;
