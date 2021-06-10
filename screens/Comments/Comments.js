import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { getComments } from "../../features/commentsSlice";

import styles from "./styles";

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
      <ScrollView contentContainerStyle={styles.commentsContainer}>
        <CommentBoard
          commentDatum={commentDatum}
          commentNumber={commentDatum.length}
        />
      </ScrollView>
    </View>
  );
};

export default Comments;
