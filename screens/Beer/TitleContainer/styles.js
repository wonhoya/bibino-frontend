import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: windowWidth / 15,
    marginTop: windowWidth / 20,
    alignItems: "center",
  },
});

export default styles;
