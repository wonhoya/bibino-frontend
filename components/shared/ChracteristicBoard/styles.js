import { StyleSheet } from "react-native";

import { RUBIK_REGULAR } from "../../../constants/font";

const getStyles = (size, color, intensity) => {
  const WIDTH = size / 2.5;
  const HEIGHT = WIDTH / 15;

  return StyleSheet.create({
    container: { position: "absolute" },
    title: {
      fontSize: WIDTH / 10,
      fontFamily: RUBIK_REGULAR,
      textAlign: "center",
      marginBottom: 10,
    },
    sliderContainer: { borderRadius: 50, position: "relative" },
    leftSubTitle: {
      position: "absolute",
      top: -WIDTH / 60 + 2,
      left: -WIDTH / 5,
      fontSize: WIDTH / 17,
    },
    rightSubTitle: {
      position: "absolute",
      top: -WIDTH / 60 + 2,
      right: -WIDTH / 4.8,
      fontSize: WIDTH / 17,
    },
    silderStyleContainer: {
      flexDirection: "row",
      position: "absolute",
    },
    sliderDummy: {
      backgroundColor: "#d3d3d3",
      width: WIDTH,
      height: HEIGHT,
      borderRadius: 50,
      position: "absolute",
    },
    sliderReal: {
      backgroundColor: color,
      width: (intensity * WIDTH) / 10,
      height: HEIGHT,
      borderRadius: 50,
    },
    sliderCore: {
      width: WIDTH,
      height: HEIGHT,
    },
  });
};

export default getStyles;
