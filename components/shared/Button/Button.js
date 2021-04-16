import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, mode }) => {
  return (
    <TouchableOpacity onPress={() => console.log("hi")}>
      <View
        style={
          mode === "primary"
            ? styles.primaryContainer
            : styles.secondaryContainer
        }
      >
        <Text
          style={
            mode === "primary"
              ? styles.primaryTextStyle
              : styles.secondaryTextStyle
          }
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
