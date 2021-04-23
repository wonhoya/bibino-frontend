import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  container: { alignItems: "center" },
  image: { width: windowWidth, height: windowWidth / 1.1 },
  description: {
    width: "100%",
    padding: windowWidth / 7,
    fontSize: windowWidth / 25,
    fontFamily: RUBIK_REGULAR,
    textAlign: "justify",
    lineHeight: windowWidth / 16,
    color: PRIMARY_BLACK,
  },
  buttonContainer: {
    position: "absolute",
    left: windowWidth / 1.02,
    zIndex: 1,
    backgroundColor: "transparent",
  },
});

styles.handleButtonY = (y) => {
  return { top: windowHeight / 1.2 + y };
};

export default styles;
