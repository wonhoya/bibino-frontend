import { Dimensions, StyleSheet } from "react-native";

import { PRIMARY_LIGHT_GREY } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  horizonBar: {
    width: windowWidth / 1.1,
    height: 5,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
});

export default styles;
