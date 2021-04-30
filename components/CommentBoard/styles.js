import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.1,

    paddingTop: 5,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default styles;
