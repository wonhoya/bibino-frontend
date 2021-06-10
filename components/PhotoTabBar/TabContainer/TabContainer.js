import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const TabContainer = ({ handleButtonPress, text, icon, isUseButton }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={handleButtonPress}>
      {icon}
      <Text style={isUseButton ? styles.useTabName : styles.tabName}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TabContainer;
