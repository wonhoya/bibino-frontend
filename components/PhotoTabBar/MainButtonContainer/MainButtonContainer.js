import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const MainButtonContainer = ({ animation, style, handleButtonPress, icon }) => {
  return (
    <TouchableOpacity style={animation} onPress={handleButtonPress}>
      <View style={style}>{icon}</View>
    </TouchableOpacity>
  );
};

export default MainButtonContainer;
