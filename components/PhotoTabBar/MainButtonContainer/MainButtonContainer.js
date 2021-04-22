import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const MainButtonContainer = ({ animation, style, handlePressButton, icon }) => {
  return (
    <TouchableOpacity style={animation} onPress={handlePressButton}>
      <View style={style}>{icon}</View>
    </TouchableOpacity>
  );
};

export default MainButtonContainer;
