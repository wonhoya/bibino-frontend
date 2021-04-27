import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import CommentCard from "../shared/CommentCard/CommentCard";

const CommentBoard = ({ commentDatum }) => {
  const commentcards =
    commentDatum?.map((commentData, index) => {
      if (index < 5) {
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
