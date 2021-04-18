import { StyleSheet } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  SEARCH_CARD_TITLE_FONT_SIZE,
  SEARCH_CARD_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";
import { SEARCH_DARK_GREEN, PURE_BLACK } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  name: {
    fontFamily: RUBIK_BOLD,
    fontSize: SEARCH_CARD_TITLE_FONT_SIZE,
    color: PURE_BLACK,
  },
  date: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
    color: SEARCH_DARK_GREEN,
  },
  description: {
    fontFamily: RUBIK_REGULAR,
    fontSize: SEARCH_CARD_PARAGRAPH_FONT_SIZE,
    color: PURE_BLACK,
  },
});

styles.textContainer = (backgroundColor) => {
  return {
    backgroundColor,
    flex: 1.9,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 17,
    paddingVertical: 10,
  };
};

export default styles;
