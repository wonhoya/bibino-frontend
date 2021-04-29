import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, PRIMARY_LIGHT_ORANGE } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";
import {
  RANKING_SECOND_RATING_FONT,
  RANKING_SECOND_NUMBER_FONT,
  RANKING_SECOND_REVIEW_COUNT_FONT,
  RANKING_NAME_FONT,
} from "../../../constants/size";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  reviewCount: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_SECOND_REVIEW_COUNT_FONT,
  },
  rating: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_SECOND_RATING_FONT,
  },
  secondContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.24,
  },
  secondRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: PRIMARY_LIGHT_ORANGE,
  },
  secondRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  secondNumber: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: RANKING_SECOND_NUMBER_FONT,
  },
  secondName: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
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
