import { StyleSheet, Dimensions } from "react-native";
import {
  PRIMARY_ORAGNE,
  TAB_GREY,
  TAB_ORANGE,
  PURE_WHITE,
} from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  tabsContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: PRIMARY_ORAGNE,
    width: "100%",
    bottom: 0,

    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 28,
    paddingHorizontal: 60,
  },
  tab: {},
  tabFont: {
    fontFamily: RUBIK_REGULAR,
    color: PURE_WHITE,
  },
  cameraFont: {
    bottom: 10,
    fontFamily: RUBIK_REGULAR,
    color: TAB_ORANGE,
  },
  button: {
    position: "absolute",
    top: -40,
    left: windowWidth / 2 - 45,
  },
  cameraContainer: {
    width: 90,
    height: 90,
    backgroundColor: PURE_WHITE,
    borderWidth: 1,
    borderColor: TAB_GREY,
    borderRadius: 38,
  },
  columnCenter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
