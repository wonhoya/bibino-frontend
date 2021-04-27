import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  SEARCH_CARD_TITLE_FONT_SIZE,
  SEARCH_CARD_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";
import { SEARCH_DARK_GREEN, PRIMARY_BLACK } from "../../../constants/colors";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const itemWidth = Math.round(windowWidth * 0.8);
const itemHeight = Math.round(windowHeight * 0.49);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: itemHeight * 0.23,
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
    minWidth: windowWidth * 4,
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
    flex: 1.9,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
