import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

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
    lineHeight: windowWidth / 20,
  },
});

export default styles;
