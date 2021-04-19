import React from "react";
import { View } from "react-native";

import styles from "./styles";
import CommentBoard from "../../../components/CommentBoard/CommentBoard";

const CommentBoardContainer = () => {
  return (
    <View style={styles.container}>
      <CommentBoard />
    </View>
  );
};

export default CommentBoardContainer;
