import { StyleSheet } from "react-native";

import { RUBIK_REGULAR } from "../../../constants/font";

const getStyles = (size, color, intensity) => {
  const WIDTH = size / 2.5;
  const HEIGHT = WIDTH / 15;

  return StyleSheet.create({
    container: { position: "absolute", alignSelf: "center" },
    title: {
      fontSize: WIDTH / 11,
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
      position: "absolute",
      flexDirection: "row",
    },
    sliderDummy: {
      position: "absolute",
      width: WIDTH,
      height: HEIGHT,
      borderRadius: 50,
      backgroundColor: "#d3d3d3",
    },
    sliderReal: {
      width: (intensity * WIDTH) / 10,
      height: HEIGHT,
      backgroundColor: color,
      borderRadius: 50,
    },
    sliderCore: {
      width: WIDTH,
      height: HEIGHT,
    },
  });
};

export default getStyles;
