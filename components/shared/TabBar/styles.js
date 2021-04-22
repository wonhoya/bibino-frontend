import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_ORANGE,
  TAB_ORANGE,
  PRIMARY_WHITE,
} from "../../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import { TABBAR_FONT_SIZE } from "../../../constants/size";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: "13%",
    padding: 18,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    backgroundColor: PRIMARY_ORANGE,
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tabName: {
    fontFamily: RUBIK_BOLD,
    fontSize: TABBAR_FONT_SIZE,
  },
  cameraName: {
    position: "absolute",
    bottom: 10,
    color: TAB_ORANGE,
    fontFamily: RUBIK_REGULAR,
  },
  button: {
    position: "absolute",
    top: -25,
    left: windowWidth / 2 - 58,
  },
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    borderWidth: 13,
    borderRadius: 50,
    borderColor: PRIMARY_ORANGE,
    backgroundColor: PRIMARY_WHITE,
  },
  invisibleButton: {
    width: 120,
    height: 120,
    zIndex: -1,
  },
});

export default styles;
