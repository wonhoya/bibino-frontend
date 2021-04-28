import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { getComments } from "../../features/commentsSlice";
import CommentBoard from "../../components/CommentBoard/CommentBoard";

const Comments = () => {
  const commentDatum = useSelector(getComments);

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.rating}>
          <AntDesign name="star" size={30} color="black" /> 4.5
        </Text>
        <Text>Sorted By : Ratings</Text>
      </View>
      <View style={styles.commentsContainer}>
        <CommentBoard
          commentDatum={commentDatum}
          commentNumber={commentDatum.length}
        />
      </View>
    </View>
  );
};

export default Comments;
