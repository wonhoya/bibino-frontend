import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import CommentCard from "../../components/shared/CommentCard/CommentCard";

const Comments = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const usersData = require("../../components/CommentBoard/users.json");
      setIsLoading(false);
      setUsers(usersData);
    }, 1000);
  }, [setUsers, setIsLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.rating}>
          <AntDesign name="star" size={30} color="black" /> 4.5
        </Text>
        <Text>Sorted By : Ratings</Text>
      </View>
      <View style={styles.commentsContainer}>
        {isLoading ? <Text>Loading...</Text> : null}
        {!isLoading && users.length ? (
          <FlatList
            data={users}
            renderItem={({ item }) => <CommentCard user={item} />}
            keyExtractor={({ id }) => "" + id}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
        {!isLoading && !users.length ? <Text>Leave first comment!</Text> : null}
      </View>
    </View>
  );
};

export default Comments;
