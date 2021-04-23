import { StyleSheet } from "react-native";

import { PRIMARY_WHITE } from "../../../constants/colors";
import { RUBIK_REGULAR } from "../../../constants/font";

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
