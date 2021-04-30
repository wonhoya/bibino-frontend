import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_MEDIUM } from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: windowWidth / 15,
    marginTop: windowWidth / 20,
  },
  title: {
    maxWidth: 200,
    fontFamily: RUBIK_MEDIUM,
    fontSize: windowWidth / 12,
  },
  descriptionContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    fontSize: 20,
  },
  ratingFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
  },
  descriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: windowWidth / 30,
  },
});

export default styles;
