import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: windowWidth / 1.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default styles;
