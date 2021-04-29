import {
  RUBIK_LIGHT_ITALIC,
  RUBIK_BOLD,
  RUBIK_MEDIUM,
  RUBIK_LIGHT,
} from "../../constants/font";
import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_GREEN,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  PRIMARY_GREY,
  PRIMARY_LIGHT_GREY,
  PRIMARY_DARK_GREY,
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
    borderTopWidth: 10,
    lineHeight: windowWidth / 16,
    padding: windowWidth / 20,
    fontSize: windowWidth / 25,
    fontFamily: RUBIK_REGULAR,
    color: PRIMARY_BLACK,
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
  commentsDescription: {},

  beerDescriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
  },

  summaryFont: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 22,
  },

  summaryBeerDescriptionFont: {
    marginVertical: 2,
    fontFamily: RUBIK_LIGHT,
    fontSize: 15,
  },

  beerDescriptionFont2: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: PRIMARY_GREY,
  },

  priceFont: {
    fontSize: 25,
    fontFamily: RUBIK_MEDIUM,
    color: PRIMARY_BLACK,
  },

  criticQuestionFont: {
    fontSize: 15,
    fontFamily: RUBIK_LIGHT_ITALIC,
    color: PRIMARY_ORANGE,

    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_BLACK,
  },

  beerSummarySub: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
  },

  beerMakerFont: {
    marginTop: 10,
    fontFamily: RUBIK_LIGHT_ITALIC,
    fontSize: 14,
    fontStyle: "italic",
    color: PRIMARY_BLACK,
  },
  subLine: {
    width: "90%",
    marginVertical: 10,
    height: 2,
    backgroundColor: PRIMARY_LIGHT_GREY,
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
