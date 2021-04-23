import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import {
  PRIMARY_LIGHT_ORANGE,
  PRIMARY_WHITE,
  POINT_DARK_ORANGE,
} from "../../../../constants/colors";

const TabContainer = ({ handleButtonPress, iconName, text, isActive }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={handleButtonPress}>
      <AntDesign
        name={iconName}
        size={25}
        color={isActive ? PRIMARY_WHITE : PRIMARY_LIGHT_ORANGE}
      />
      <Text
        style={
          isActive
            ? { ...styles.tabName, color: PRIMARY_WHITE }
            : { ...styles.tabName, color: PRIMARY_LIGHT_ORANGE }
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default TabContainer;
