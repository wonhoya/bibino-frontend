import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { POINT_DARK_ORANGE } from "../../../../constants/colors";

const ButtonContainer = ({ handleButtonPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleButtonPress}
      activeOpacity={1}
    >
      <View style={styles.cameraContainer}>
        <AntDesign name="camera" size={60} color={POINT_DARK_ORANGE} />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
