import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const SectionDivider = ({ direction, text }) => {
  if (direction === "right") {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.line} />
        <View>
          <Text style={styles.sectionTitle}>{text}</Text>
        </View>
      </View>
    );
  }

  if (direction === "left") {
    return (
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionTitle}>{text}</Text>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
};

export default SectionDivider;
