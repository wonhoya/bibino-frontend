import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

import { PRIMARY_WHITE } from "../../../constants/colors";

const { width: windowWidth, height: windowHiehgt } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_WHITE,
  },
  header: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    height: windowHiehgt * 0.05,
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.3 : 0,
    backgroundColor: PRIMARY_WHITE,
  },
  button: {
    marginBottom: 11.46,
  },
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
});

export default styles;
