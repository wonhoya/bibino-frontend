import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import CommentCard from "../shared/CommentCard/CommentCard";

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
      {!isLoading && users.length
        ? users.map((user, index) => {
            if (index < 5) {
              return <CommentCard user={user} key={user.id} />;
            }
          })
        : null}
      {!isLoading && !users.length ? <Text>Leave first comment!</Text> : null}
    </View>
  );
};

export default CommentBoard;
