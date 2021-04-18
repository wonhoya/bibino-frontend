import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";

import CommentCard from "./CommentCard/CommentCard";

const CommentBoard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const usersData = require("./users.json");
      setIsLoading(false);
      setUsers(usersData);
    }, 1000);
  }, [setUsers, setIsLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : null}
      {!isLoading && !users.length ? (
        <Text>첫 리뷰를 작성해 주세요.</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => <CommentCard user={item} />}
          keyExtractor={({ id }) => "" + id}
        />
      )}
    </View>
  );
};

export default CommentBoard;
