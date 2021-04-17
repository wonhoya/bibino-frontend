import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width * 0.9,
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
