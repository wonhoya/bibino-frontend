import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: windowWidth,
    height: windowHeight / 3,
    marginVertical: windowWidth / 30,
  },
  text: {
    marginVertical: windowWidth / 15,
    fontFamily: RUBIK_REGULAR,
    fontSize: windowWidth / 20,
  },
});

export default styles;
