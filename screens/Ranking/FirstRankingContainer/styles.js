import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, POINT_DARK_ORANGE } from "../../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../../constants/font";

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
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 170,
  },
  firstName: {
    maxWidth: windowWidth * 0.5,
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
  },
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
});

styles.resizeFont = (string) => {
  if (string.length > 6) {
    return { fontSize: windowWidth * 0.07 };
  } else {
    return { fontSize: 80 };
  }
};

export default styles;
