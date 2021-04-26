import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  distributeUserTag,
  distributeBeerTag,
} from "../../../utils/distributeTag";

import styles from "./styles";

const TagBoard = ({ userCharacterAvg, beerCharacterAvg }) => {
  const mockTagData = distributeUserTag();

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {mockTagData.map((tag, index) => {
        return (
          <View
            style={[styles.tag, styles.tagBackgroundColor(tag)]}
            key={index}
          >
            <Text style={styles.tagFont}>#{tag}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TagBoard;
