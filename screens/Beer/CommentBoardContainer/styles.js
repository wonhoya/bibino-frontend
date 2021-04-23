import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  PRIMARY_BLACK,
} from "../../../constants/colors";
import { RUBIK_BOLD } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: windowHeight / 1.5,
    marginTop: windowWidth / 10,
    marginBottom: windowHeight / 5,

    borderRadius: 10,
    backgroundColor: PRIMARY_ORANGE,
    alignItems: "center",
  },
  commentContainer: {
    width: windowWidth * 0.8,
    marginBottom: 10,
    alignItems: "flex-end",
  },
  description: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
  },
});

export default styles;
