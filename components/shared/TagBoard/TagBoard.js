import React from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const mockTagData = ["#Aromatic", "#Body", "#TOK", "#SUCK"];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const TagBoard = () => {
  // testConatainer의 크기에 따라서 변화
  return (
    <>
      <SafeAreaView />
      <View style={styles.testConatainer}>
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
      </View>
    </>
  );
};

export default TagBoard;
