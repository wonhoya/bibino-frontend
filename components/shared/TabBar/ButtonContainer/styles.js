import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE, PRIMARY_WHITE } from "../../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: -25,
    left: windowWidth / 2 - 58,
  },
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    borderWidth: 13,
    borderRadius: 50,
    borderColor: PRIMARY_ORANGE,
    backgroundColor: PRIMARY_WHITE,
  },
});

export default styles;
