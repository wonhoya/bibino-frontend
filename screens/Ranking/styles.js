import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_MEDIUM, RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: "green",
  },

  title: {
    color: PRIMARY_BLACK,
    fontSize: 30,
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
    backgroundColor: "yellow",
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
    fontSize: 15,
  },
  //////////////////////
  secondContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.24,
    backgroundColor: "red",
  },

  secondRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "green",
  },

  secondRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "red",
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
    backgroundColor: "purple",
  },

  thirdRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "yellow",
  },

  thirdRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "white",
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
    marginTop: 50,
    backgroundColor: "brown",
  },
});

export default styles;
