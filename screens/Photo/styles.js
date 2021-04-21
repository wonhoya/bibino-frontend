import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_WHITE, PRIMARY_ORANGE } from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 7,
    backgroundColor: "black",
  },
  resultLoadingContainer: {
    flex: 1,
    backgroundColor: PRIMARY_ORANGE,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    width: 400,
    height: 300,
    marginTop: "50%",
  },
  descriptionContainer: {
    marginTop: 10,
    flex: 2,
  },
  description: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 3,
    backgroundColor: "blue",
  },

  button: {
    flex: 1,
  },
  LoadingContainer: {
    position: "absolute",
    zIndex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: PRIMARY_WHITE,
  },
  image: {
    width: "30%",
    height: "30%",
  },
});

export default styles;
