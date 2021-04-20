import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_WHITE } from "../../constants/colors";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 7,
    marginHorizontal: 20,
    marginVertical: 20,
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
  test: {
    backgroundColor: "green",
    flex: 9,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
