import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_MEDIUM, RUBIK_REGULAR } from "../../../constants/font";
import { PRIMARY_ORANGE } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: windowWidth / 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topBar: {
    width: windowWidth / 4,
    height: 5,
    position: "absolute",
    top: 10,
    backgroundColor: "#C9C8C6",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 3,
  },
  myRating: {
    position: "relative",
    right: windowWidth / 13,
    fontFamily: RUBIK_MEDIUM,
    fontSize: windowWidth / 14,
  },
  giveStar: {
    position: "relative",
    right: windowWidth / 20,
    bottom: 3,
    fontFamily: RUBIK_REGULAR,
    fontSize: windowWidth / 28,
    color: PRIMARY_ORANGE,
  },
  RatingBoard: { marginBottom: 10 },
});

export default style;
