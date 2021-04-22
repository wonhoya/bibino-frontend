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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_ORANGE,
  },
  animationContainer: {
    width: 400,
    height: 300,
    marginTop: "50%",
  },
  descriptionContainer: {
    flex: 2,
    marginTop: 10,
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
