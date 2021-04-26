import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  distributeUserTag,
  distributeBeerTag,
} from "../../../utils/distributeTag";
import styles from "./styles";
//distributeBeerTag 비어페이지에서 사용 예정입니다.

const TagBoard = ({ userCharacterAverage, userReviewCount }) => {
  const mockTagData = distributeUserTag(userCharacterAverage, userReviewCount);

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
