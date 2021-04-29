import { StyleSheet, Dimensions, Platform } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import { MAIN_PARAGRAPH_FONT_SIZE } from "../../../constants/size";
import { PRIMARY_BLACK, PRIMARY_DARK_GREY } from "../../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignSelf: "center",
    width: windowWidth * 0.87,
    height: windowHeight * 0.17,
  },
  upperContainer: {
    height: windowHeight * 0.11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: Platform.OS === "android" ? 0 : 10,
    maxWidth: 500,
  },
  paragraphContainer: {
    maxWidth: 100,
    marginVertical: 4,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  tagContainer: {
    marginTop: 10,
  },
  username: {
    color: PRIMARY_DARK_GREY,
    fontFamily: RUBIK_BOLD,
    fontSize: windowHeight * 0.05,
  },
  paragraph: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: MAIN_PARAGRAPH_FONT_SIZE,
  },
});

export default styles;
