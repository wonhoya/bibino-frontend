import { StyleSheet, Dimensions } from "react-native";
import { primary_orange, black } from "../../../constants/colors";
import { primary_buttonFontSize } from "../../../constants/size";
import { Rubik_bold } from "../../../constants/font";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  primaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary_orange,
    paddingVertical: 8,
    width: windowWidth / 1.3,
    height: 60,
    borderRadius: 10,
  },
  primaryTextStyle: {
    color: black,
    fontSize: primary_buttonFontSize,
    fontFamily: Rubik_bold,
  },
  secondaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: black,
    paddingVertical: 8,
    width: windowWidth / 1.3,
    height: 60,
    borderRadius: 10,
  },
  secondaryTextStyle: {
    color: primary_orange,
    fontSize: primary_buttonFontSize,
    fontFamily: Rubik_bold,
  },
});

export default styles;
