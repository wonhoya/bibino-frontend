import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR } from "../../../constants/font";
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
  descriptionContainer: {
    flexDirection: "column",

    alignItems: "flex-end",
    marginLeft: 30,
    marginTop: 5,
  },
  ratingFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
  },

  descriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
  },
});

export default styles;
