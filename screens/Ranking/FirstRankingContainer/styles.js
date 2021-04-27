import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  PRIMARY_LIGHT_ORANGE,
  PRIMARY_ORANGE,
  POINT_DARK_ORANGE,
  PRIMARY_LIGHT_GREY,
} from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.28,
  },

  firstRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: POINT_DARK_ORANGE,
    zIndex: 1,
  },

  firstRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "white",
  },

  firstNumber: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 170,
  },

  firstName: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 70,
  },

  reviewCount: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 15,
  },

  rating: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 18,
  },
});

export default styles;
