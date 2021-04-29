import React from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./styles";

const Button = ({ text, onPress, mode, isLoading }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={
          mode === "primary"
            ? styles.primaryContainer
            : styles.secondaryContainer
        }
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={
              mode === "primary"
                ? styles.primaryTextStyle
                : styles.secondaryTextStyle
            }
          >
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
