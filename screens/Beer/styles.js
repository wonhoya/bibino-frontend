import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_BLACK,
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  PRIMARY_GREEN,
} from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: PRIMARY_WHITE },
  container: { alignItems: "center" },
  buttonContainer: {
    position: "absolute",
    left: windowWidth / 1,
    top: windowHeight / 1.2,
    zIndex: 1,
    backgroundColor: PRIMARY_GREEN,
  },
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
    padding: windowWidth / 7,
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
});

styles.handleButtonY = (scrollY) => {
  return { transform: [{ translateY: scrollY }] };
};

styles.handleOpacity = (scrollY) => {
  return {
    opacity: scrollY.interpolate({
      inputRange: [
        windowHeight * 0.8,
        windowHeight * 0.85,
        windowHeight * 0.9,
        windowHeight * 0.95,
        windowHeight,
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
          inputRange: [0, windowHeight * 0.5, windowHeight],
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
