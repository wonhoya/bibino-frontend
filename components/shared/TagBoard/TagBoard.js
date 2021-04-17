import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const mockTagData = ["#Aromatic", "#Body", "#TOK", "#SUCK"];

const TagBoard = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {mockTagData.map((tag, index) => {
        return (
          <View style={[styles.tag, styles.tagBackgroundColor(tag)]}>
            <Text style={styles.tagFont}>{tag}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TagBoard;
