import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const CommentInput = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={25}
        autoCorrect={false}
        placeholder="드셨던 맥주에 대해 말해 주세요. :)"
      />
    </View>
  );
};

export default CommentInput;
