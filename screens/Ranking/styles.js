import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  PRIMARY_ORANGE,
} from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: PRIMARY_WHITE,
  },
  invisible: {
    marginBottom: -60,
  },
  firstContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.28,
  },
  secondContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.24,
  },
  thirdContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.15,
  },
  restContainer: {
    width: windowWidth,
    marginTop: 30,
  },
  restDescriptionContainer: {
    marginVertical: 10,
    borderBottomColor: PRIMARY_ORANGE,
    borderBottomWidth: 1,
  },
  restName: {
    marginLeft: 30,
    minWidth: windowWidth * 4,
    maxHeight: windowHeight * 0.05,
    marginBottom: 9,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: 20,
  },
  restDescription: {
    marginLeft: 30,
    marginBottom: 10,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
  },
});

export default styles;
