import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_ORAGNE,
  TAB_GREY,
  TAB_ORANGE,
  PRIMARY_WHITE,
} from "../../../constants/colors";
import { RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 18,
    paddingHorizontal: 60,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: PRIMARY_ORAGNE,
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
    top: -40,
    left: windowWidth / 2 - 46,
  },
  cameraContainer: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: TAB_GREY,
    borderRadius: 38,
    backgroundColor: PRIMARY_WHITE,
  },
});

export default styles;
