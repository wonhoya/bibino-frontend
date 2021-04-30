import { RUBIK_LIGHT_ITALIC } from "../../constants/font";
import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
} from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: PRIMARY_WHITE },
  container: { alignItems: "center" },
  feedbackContainer: {
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    width: windowWidth * 0.6,
    height: windowHeight / 15,
    marginTop: 20,
    backgroundColor: PRIMARY_ORANGE,
    borderRadius: 10,
  },
  image: {
    width: windowWidth,
    height: windowWidth / 1.1,
  },
  description: {
    textAlign: "justify",
    width: "100%",
    lineHeight: windowWidth / 16,
    padding: windowWidth / 20,
    fontSize: windowWidth / 25,
    fontFamily: RUBIK_REGULAR,
    marginTop: 10,
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    overflow: "hidden",
  },
  opacity: {
    width: "50%",
    opacity: 0.5,
  },
  beerDescription: {
    width: "85%",
  },
  flagContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
  },
  criticQuestionFont: {
    fontSize: 15,
    fontFamily: RUBIK_LIGHT_ITALIC,
    color: PRIMARY_ORANGE,
  },
  beerMakerFont: {
    marginTop: 10,
    fontFamily: RUBIK_LIGHT_ITALIC,
    fontSize: 14,
    fontStyle: "italic",
    color: PRIMARY_BLACK,
  },
  priceFont: {
    fontSize: 25,
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
  },
  beerDescriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
  },
});

styles.handleButtonY = (scrollY) => {
  return { transform: [{ translateY: scrollY }] };
};

styles.handleOpacity = (scrollY) => {
  return {
    opacity: scrollY.interpolate({
      inputRange: [
        windowHeight * 0.8,
        windowHeight * 1,
        windowHeight * 1.1,
        windowHeight * 1.3,
        windowHeight * 1.4,
      ],
      outputRange: [0, 0.3, 0.5, 0.7, 1],
    }),
  };
};

styles.handlePositionX = (scrollY) => {
  return {
    transform: [
      {
        translateX: scrollY.interpolate({
          inputRange: [0, windowHeight * 0.8, windowHeight * 1.4],
          outputRange: [
            windowWidth,
            -windowWidth * 0.005,
            -windowWidth * 0.005,
          ],
        }),
      },
    ],
  };
};

styles.handleImageY = (scrollY) => {
  return {
    transform: [
      {
        translateY: scrollY,
      },
      {
        scale: scrollY.interpolate({
          inputRange: [0, windowWidth],
          outputRange: [1.2, 1],
        }),
      },
    ],
  };
};

export default styles;
