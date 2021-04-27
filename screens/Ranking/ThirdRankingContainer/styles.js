import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, PRIMARY_LIGHT_GREY } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  reviewCount: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 15,
  },
  rating: {
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
    fontSize: 18,
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
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 80,
  },
  thirdName: {
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 40,
  },
});

styles.resizeFont = (string) => {
  if (string.length > 6) {
    return { fontSize: windowWidth * 0.07 };
  } else {
    return { fontSize: 80 };
  }
};

export default styles;
