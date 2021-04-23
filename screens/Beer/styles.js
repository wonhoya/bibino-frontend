import { StyleSheet, Dimensions } from "react-native";
import {
  PRIMARY_ORANGE,
  PRIMARY_GREY,
  PRIMARY_BLACK,
  PRIMARY_YELLOW,
} from "../../constants/colors";

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
});

export default styles;
