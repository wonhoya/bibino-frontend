import { StyleSheet } from "react-native";

import { RUBIK_BOLD } from "../../../../constants/font";
import { TABBAR_FONT_SIZE } from "../../../../constants/size";

const styles = StyleSheet.create({
  tab: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tabName: {
    marginTop: 3,
    fontFamily: RUBIK_BOLD,
    fontSize: TABBAR_FONT_SIZE,
  },
});

export default styles;
