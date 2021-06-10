import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, POINT_DARK_ORANGE } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";
import {
  RANKING_NAME_FONT,
  RANKING_FIRST_NUMBER_FONT,
  RANKING_FIRST_RATING_FONT,
  RANKING_FIRST_REVIEW_COUNT_FONT,
} from "../../../constants/size";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  firstRankingNumberContainer: {
    zIndex: 1,
    flex: 2.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: POINT_DARK_ORANGE,
  },
  firstRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  firstNumber: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: RANKING_FIRST_NUMBER_FONT,
  },
  firstName: {
    maxWidth: windowWidth * 0.5,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
  },
  reviewCount: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_FIRST_REVIEW_COUNT_FONT,
  },
  rating: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_FIRST_RATING_FONT,
  },
});

styles.resizeFont = (string) => {
  if (string.length > 6) {
    return { fontSize: windowWidth * 0.07 };
  } else {
    return { fontSize: RANKING_NAME_FONT };
  }
};

export default styles;
