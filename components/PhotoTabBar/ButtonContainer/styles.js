import { StyleSheet } from "react-native";
import {
  PRIMARY_WHITE,
  PRIMARY_DARK_GREY,
  PRIMARY_LIGHT_GREY,
  PRIMARY_BLACK,
} from "../../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tabFont: {
    fontSize: 10,
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_DARK_GREY,
  },
});

export default styles;
