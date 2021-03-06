import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_ORANGE,
  PRIMARY_WHITE,
  TAB_ORANGE,
} from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    height: "12%",
    padding: 18,
    paddingHorizontal: 60,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    backgroundColor: PRIMARY_ORANGE,
  },
  tab: {
    flexDirection: "column",
    alignItems: "center",
  },
  tabName: {
    color: PRIMARY_WHITE,
    fontFamily: RUBIK_REGULAR,
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
    left: windowWidth / 2 - 56,
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
});

export default styles;
