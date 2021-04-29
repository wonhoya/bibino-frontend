import { StyleSheet, Dimensions } from "react-native";

const { height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: windowHeight * 0.05,
  },
});

export default styles;
