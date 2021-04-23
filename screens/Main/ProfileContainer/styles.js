import { StyleSheet, Dimensions, Platform } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  MAIN_USERNAME_FONT_SIZE,
  MAIN_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";
import { PRIMARY_BLACK, PRIMARY_DARK_GREY } from "../../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: "flex-start",
    alignSelf: "center",
    width: windowWidth * 0.87,
    height: windowHeight * 0.17,
  },
  upperContainer: {
    flex: 1.4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: Platform.OS === "android" ? 0 : 10,
  },
  paragraphContainer: {
    marginVertical: 4,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  tagContainer: {
    flex: 1,
    marginRight: windowWidth * 0.09,
  },
  username: {
    color: PRIMARY_DARK_GREY,
    fontFamily: RUBIK_BOLD,
    fontSize: MAIN_USERNAME_FONT_SIZE,
  },
  paragraph: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: MAIN_PARAGRAPH_FONT_SIZE,
  },
});

export default styles;
