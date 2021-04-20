import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../../constants/colors";
import { PRIMARY_BUTTON_FONT_SIZE } from "../../../constants/size";
import { RUBIK_BOLD } from "../../../constants/font";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  primaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_ORANGE,
    paddingVertical: 8,
    width: windowWidth / 1.3,
    height: 60,
    borderRadius: 10,
  },
  primaryTextStyle: {
    color: PRIMARY_BLACK,
    fontSize: PRIMARY_BUTTON_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
  },
  secondaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_BLACK,
    paddingVertical: 8,
    width: windowWidth / 1.3,
    height: 60,
    borderRadius: 10,
  },
  secondaryTextStyle: {
    color: PRIMARY_ORANGE,
    fontSize: PRIMARY_BUTTON_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
  },
});

export default styles;
