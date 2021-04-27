import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, PRIMARY_LIGHT_GREY } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";
import {
  RANKING_NAME_FONT,
  RANKING_THIRD_RATING_FONT,
  RANKING_THIRD_REVIEW_COUNT_FONT,
} from "../../../constants/size";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  reviewCount: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_THIRD_REVIEW_COUNT_FONT,
  },
  rating: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: RANKING_THIRD_RATING_FONT,
  },
  thirdContainer: {
    flexDirection: "row",
    width: windowWidth,
    height: windowHeight * 0.14,
  },
  thirdRankingNumberContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
  thirdRankingDescriptionContainer: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  thirdNumber: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: 80,
  },
  thirdName: {
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
