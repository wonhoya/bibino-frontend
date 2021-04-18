import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  SEARCH_TITLE_FONT_SIZE,
  SEARCH_INDICATOR_FONT_SIZE,
  SEARCH_CARD_TITLE_FONT_SIZE,
  SEARCH_CARD_PARAGRAPH_FONT_SIZE,
  SEARCH_INPUT_FONT_SIZE,
} from "../../constants/size";
import {
  PRIMARY_ORAGNE,
  SEARCH_GREY,
  SERACH_LIGHT_GREY,
  SERACH_BLACK,
  SEARCH_DARK_GREEN,
  PURE_BLACK,
  PRIMARY_WHITE,
} from "../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.89,
    alignSelf: "center",
  },
  titleContainer: {
    marginVertical: 18,
  },
  indicatorContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    zIndex: 1,
    left: 20,
  },
  paragraph: {
    marginRight: 6,
  },
  dropdown: {
    width: 60,
    height: 108,
  },
  input: {
    paddingLeft: 60,
    paddingRight: 20,
    paddingVertical: 14,
    backgroundColor: SERACH_LIGHT_GREY,
    borderRadius: 10,
    width: "100%",
    height: 76,
  },
  titleFont: {
    fontFamily: RUBIK_BOLD,
    fontSize: SEARCH_TITLE_FONT_SIZE,
    color: SERACH_BLACK,
  },
  indicatorFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INDICATOR_FONT_SIZE,
    color: SEARCH_GREY,
  },
  inputFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INPUT_FONT_SIZE,
    color: PRIMARY_WHITE,
  },
  dropdownFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INDICATOR_FONT_SIZE,
    color: PRIMARY_ORAGNE,
  },
  cardTitleFont: {
    fontFamily: RUBIK_BOLD,
    fontSize: SEARCH_CARD_TITLE_FONT_SIZE,
    color: PURE_BLACK,
  },
  cardDateFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
    color: SEARCH_DARK_GREEN,
  },
  cardDescriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
    color: PURE_BLACK,
  },
});

export default styles;
