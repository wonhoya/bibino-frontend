import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "./styles";

const ButtonContainer = ({ style, handlePressButton, text, icon }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={handlePressButton}>
      {icon}
      <Text style={styles.tabName}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
