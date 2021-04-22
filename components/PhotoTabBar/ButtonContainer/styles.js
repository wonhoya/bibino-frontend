import { StyleSheet } from "react-native";

import {
  PRIMARY_WHITE,
  PRIMARY_DARK_GREY,
  PRIMARY_LIGHT_GREY,
  PRIMARY_BLACK,
} from "../../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";

const styles = StyleSheet.create({
  tabName: {
    color: PRIMARY_WHITE,
    fontFamily: RUBIK_REGULAR,
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles;
