import { StyleSheet, Dimensions } from "react-native";
import { interpolate } from "react-native-reanimated";

import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: { flex: 1 },
  container: { alignItems: "center" },
  image: {
    width: windowWidth,
    height: windowWidth / 1.1,
  },
  description: {
    width: "100%",
    padding: windowWidth / 7,
    fontSize: windowWidth / 25,
    fontFamily: RUBIK_REGULAR,
    textAlign: "justify",
    lineHeight: windowWidth / 16,
    color: PRIMARY_BLACK,
  },
  buttonContainer: {
    position: "absolute",
    left: windowWidth / 1,
    top: windowHeight / 1.2,
    zIndex: 1,
    backgroundColor: "green",
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

styles.handlePositionX = (scrollY) => {
  console.log(scrollY);
  console.log("windowHeight", windowHeight);
  console.log("windowWidth", windowWidth);
  return {
    transform: [
      {
        translateX: scrollY.interpolate({
          inputRange: [0, windowHeight * 0.8, windowHeight * 0.9],
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
