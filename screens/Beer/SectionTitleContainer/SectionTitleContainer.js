import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const SectionTitleContainer = ({ sectionTitle, sectionDescription }) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        <View style={styles.sectionDescriptionContainer}>
          <Text style={styles.sectionDescription}>{sectionDescription}</Text>
        </View>
      </View>
      <View style={styles.sectionBottomLine} />
    </>
  );
};

export default SectionTitleContainer;
