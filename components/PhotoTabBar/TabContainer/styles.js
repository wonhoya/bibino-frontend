import { StyleSheet } from "react-native";

import { PRIMARY_WHITE, PRIMARY_GREEN } from "../../../constants/colors";
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
  useTabName: {
    color: PRIMARY_GREEN,
    fontFamily: RUBIK_REGULAR,
  },
});

export default styles;
