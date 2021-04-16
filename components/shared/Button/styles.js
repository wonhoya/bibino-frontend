import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  primaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2994A",
    paddingVertical: 8,
    width: width / 1.3,
    height: 60,
    borderRadius: 10,
  },

  primaryTextStyle: {
    color: "#3C3A36",
    fontSize: 14,
    fontFamily: "Rubik_700Bold",
  },

  secondaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C3A36",
    paddingVertical: 8,
    width: width / 1.3,
    height: 60,
    borderRadius: 10,
  },

  secondaryTextStyle: {
    color: "#ECA046",
    fontSize: 14,
    fontFamily: "Rubik_700Bold",
  },
});

export default styles;
