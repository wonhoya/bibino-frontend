import React from "react";
import { TouchableOpacity, View } from "react-native";

const MainButtonContainer = ({
  animationStyle,
  iconStyle,
  handleButtonPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={animationStyle}
      onPress={handleButtonPress}
      activeOpacity={1}
    >
      <View style={iconStyle}>{icon}</View>
    </TouchableOpacity>
  );
};

export default MainButtonContainer;
