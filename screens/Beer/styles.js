import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK, PRIMARY_ORANGE } from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  container: { alignItems: "center" },
  buttonContainer: {
    position: "absolute",
    left: windowWidth / 1,
    top: windowHeight / 1.2,
    zIndex: 1,
    backgroundColor: "green",
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
        windowHeight * 0.9,
        windowHeight,
        windowHeight * 1.1,
        windowHeight * 1.2,
        windowHeight * 1.3,
      ],
      outputRange: [0, 0.1, 0.3, 0.5, 1],
    }),
  };
};

styles.handlePositionX = (scrollY) => {
  return {
    transform: [
      {
        translateX: scrollY.interpolate({
          inputRange: [0, windowHeight * 0.8, windowHeight],
          outputRange: [
            windowWidth,
            -windowWidth * 0.245,
            -windowWidth * 0.245,
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
