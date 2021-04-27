import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { getComments } from "../../features/commentsSlice";
import CommentCard from "../../components/shared/CommentCard/CommentCard";

const Comments = () => {
  const commentsData = useSelector(getComments);

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.rating}>
          <AntDesign name="star" size={30} color="black" /> 4.5
        </Text>
        <Text>Sorted By : Ratings</Text>
      </View>
      <View style={styles.commentsContainer}>
        <FlatList
          data={commentsData}
          renderItem={({ item }) => <CommentCard commentData={item} />}
          keyExtractor={({ _id }) => "" + _id}
          showsVerticalScrollIndicator={false}
        />
        {commentsData.length ? <Text>Leave first comment!</Text> : null}
      </View>
    </View>
  );
};

export default Comments;
