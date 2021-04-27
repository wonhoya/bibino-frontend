import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  SEARCH_CARD_TITLE_FONT_SIZE,
  SEARCH_CARD_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";
import {
  SEARCH_DARK_GREEN,
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
} from "../../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: windowHeight * 0.09,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_BLACK,
  },
  name: {
    minWidth: windowWidth * 4,
    maxHeight: windowHeight * 0.05,
    marginBottom: 9,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: SEARCH_CARD_TITLE_FONT_SIZE,
  },
  date: {
    color: SEARCH_DARK_GREEN,
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
  },
  description: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
  },
  textContainer: {
    marginVertical: windowHeight * 0.01,
  },
});

export default styles;
