import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  MAIN_USERNAME_FONT_SIZE,
  MAIN_PARAGRAPH_FONT_SIZE,
} from "../../constants/size";
import { PRIMARY_BLACK, PRIMARY_DARK_GREY } from "../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  darkGrey: {
    color: PRIMARY_DARK_GREY,
  },
  black: {
    color: PRIMARY_BLACK,
  },
  usernameFont: {
    fontFamily: RUBIK_BOLD,
    fontSize: MAIN_USERNAME_FONT_SIZE,
  },
  mainParagraphFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: MAIN_PARAGRAPH_FONT_SIZE,
  },
  mainViewWidth: {
    width: windowWidth * 0.89,
    alignSelf: "center",
  },
  profileContainer: {
    height: windowHeight * 0.17,
  },

  upperProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: 19,
    flex: 3,
  },
  profileImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  hashTagContainer: {
    flex: 1,
  },
  contentsContainer: {
    marginTop: 10,
    height: windowHeight * 0.6,
  },
  mainParagraphContainer: {
    marginVertical: 9,
  },
  carouselContainer: {
    marginTop: 20,
  },
});

export default styles;
