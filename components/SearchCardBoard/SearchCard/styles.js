import { StyleSheet } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  SEARCH_CARD_TITLE_FONT_SIZE,
  SEARCH_CARD_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";
import { SEARCH_DARK_GREEN, PRIMARY_BLACK } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 120,
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  name: {
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
});

styles.textContainer = (backgroundColor) => {
  return {
    flex: 1.9,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor,
  };
};

export default styles;
