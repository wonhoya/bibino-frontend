import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../../constants/font";
import { TABBAR_FONT_SIZE } from "../../../../constants/size";

const { width: windowWidth } = Dimensions.get("window");

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
