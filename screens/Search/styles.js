import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  SEARCH_TITLE_FONT_SIZE,
  SEARCH_INDICATOR_FONT_SIZE,
  SEARCH_INPUT_FONT_SIZE,
} from "../../constants/size";
import {
  PRIMARY_ORANGE,
  SEARCH_GREY,
  SERACH_LIGHT_GREY,
  SERACH_BLACK,
  PRIMARY_WHITE,
} from "../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: windowWidth * 0.89,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 18,
  },
  indicatorContainer: {
    flex: 0.5,
    flexDirection: "row",
    marginHorizontal: 16,
  },
  inputContainer: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  iconContainer: {
    zIndex: 1,
    position: "absolute",
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
    width: "100%",
    height: 76,
    paddingLeft: 60,
    paddingRight: 20,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: SERACH_LIGHT_GREY,
    color: PRIMARY_WHITE,
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INPUT_FONT_SIZE,
  },
  title: {
    color: SERACH_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: SEARCH_TITLE_FONT_SIZE,
  },
  indicator: {
    color: SEARCH_GREY,
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INDICATOR_FONT_SIZE,
  },
  dropdownText: {
    color: PRIMARY_ORANGE,
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_INDICATOR_FONT_SIZE,
  },
});

export default styles;
