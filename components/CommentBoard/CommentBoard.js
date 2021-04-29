import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import CommentCard from "./CommentCard/CommentCard";

const CommentBoard = ({ commentDatum, commentNumber }) => {
  const commentcards =
    commentDatum?.map((commentData, index) => {
      if (index < commentNumber) {
        return (
          <CommentCard commentData={commentData} key={commentData.user._id} />
        );
      }
    }) || [];
  return (
    <View style={styles.container}>
      {commentcards}
      {!commentcards.length ? <Text>Leave the first comment!</Text> : null}
    </View>
  );
};

export default CommentBoard;
