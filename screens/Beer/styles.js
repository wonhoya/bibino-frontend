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
    padding: windowWidth / 10,
    fontSize: windowWidth / 25,
    fontFamily: RUBIK_REGULAR,
    textAlign: "justify",
    lineHeight: windowWidth / 16,
    color: PRIMARY_BLACK,
  },
  line: {
    width: windowWidth * 0.9,
    backgroundColor: PRIMARY_ORANGE,
    borderRadius: 15,
    marginTop: 20,
    height: 1,
  },
  buttonContainer: {
    position: "absolute",
    width: 200,
    height: 200,
    left: windowWidth / 2.2,
    zIndex: 1,
  },
});

styles.handleButtonY = (y) => {
  return { top: windowHeight / 1.7 + y };
};

export default styles;
