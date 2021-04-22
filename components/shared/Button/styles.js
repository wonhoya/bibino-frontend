import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../../constants/colors";
import { PRIMARY_BUTTON_FONT_SIZE } from "../../../constants/size";
import { RUBIK_BOLD } from "../../../constants/font";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  primaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth / 1.3,
    height: 60,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: PRIMARY_ORANGE,
  },
  primaryTextStyle: {
    color: PRIMARY_BLACK,
    fontSize: PRIMARY_BUTTON_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
  },
  secondaryContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth / 1.3,
    height: 60,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: PRIMARY_BLACK,
  },
  secondaryTextStyle: {
    color: PRIMARY_ORANGE,
    fontSize: PRIMARY_BUTTON_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
  },
});

export default styles;
