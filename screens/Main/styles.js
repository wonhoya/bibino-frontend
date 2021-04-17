import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  MAIN_USERNAME_FONT_SIZE,
  MAIN_PARAGRAPH_FONT_SIZE,
} from "../../constants/size";
import { PRIMARY_BLACK, PRIMARY_DARK_GREY } from "../../constants/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    width: windowWidth * 0.89,
    alignSelf: "center",
  },
  profileContainer: {
    height: windowHeight * 0.2,
  },

  upperProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingTop: 30,
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
    height: windowHeight * 0.4,
  },
  mainParagraphContainer: {
    marginVertical: 9,
  },
});

styles.userImage = {
  width: 48,
  height: 48,
  borderRadius: 24,
};

export default styles;
