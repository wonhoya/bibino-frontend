import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "./styles";

const ButtonContainer = ({ handleOnPress, text, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>{icon}</TouchableOpacity>
      <Text style={styles.tabFont}>{text}</Text>
    </View>
  );
};

export default ButtonContainer;
