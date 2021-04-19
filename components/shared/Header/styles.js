import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width: windowWidth, height: windowHiehgt } = Dimensions.get("window");

const styles = StyleSheet.create({
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
  },
  button: {
    marginBottom: 11.46,
  },
});

export default styles;
