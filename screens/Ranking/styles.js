import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  PRIMARY_LIGHT_ORANGE,
  PRIMARY_ORANGE,
  POINT_DARK_ORANGE,
  PRIMARY_LIGHT_GREY,
} from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: PRIMARY_WHITE,
  },

  title: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: 30,
    marginLeft: 20,
  },

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
  //////////////////////
  secondContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.24,
  },

  secondRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: PRIMARY_LIGHT_ORANGE,
  },

  secondRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  secondNumber: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 130,
  },

  secondName: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 50,
  },

  ////////////////////

  thirdContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.14,
  },

  thirdRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: PRIMARY_LIGHT_GREY,
  },

  thirdRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  thirdNumber: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 80,
  },

  thirdName: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 40,
  },

  /////////////////////
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
    fontSize: 20,
  },
});

export default styles;
