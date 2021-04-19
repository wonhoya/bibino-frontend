import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    height: 97,
  },
  button: {
    marginBottom: 11.46,
  },
});

export default styles;
