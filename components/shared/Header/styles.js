import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    width: windowWidth * 0.9,
    height: 97,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  button: {
    marginBottom: 11.46,
  },
});

export default styles;
