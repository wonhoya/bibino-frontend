import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import CommentBoard from "../../../components/CommentBoard/CommentBoard";

const CommentBoardContainer = ({ navigation, commentDatum }) => {
  const commentNumberDisplayed = 5;

  return (
    <View style={styles.container}>
      <CommentBoard
        commentDatum={commentDatum}
        commentNumber={commentNumberDisplayed}
      />
      <TouchableOpacity
        style={styles.commentContainer}
        onPress={() => navigation.navigate("Comments")}
      >
        <Text style={styles.description}>Show All comments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentBoardContainer;
