import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import CommentBoard from "../../../components/CommentBoard/CommentBoard";

const CommentBoardContainer = ({ navigation, beerId }) => {
  return (
    <View style={styles.container}>
      <CommentBoard beerId={beerId} />
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
