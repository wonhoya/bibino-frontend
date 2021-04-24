import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  description: {
    textAlign: "center",
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
    fontSize: 15,
  },
});

export default styles;
