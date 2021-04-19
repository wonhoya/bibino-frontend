import { StyleSheet, Dimensions } from "react-native";
import {
  PRIMARY_ORANGE,
  TAB_GREY,
  TAB_ORANGE,
  PRIMARY_WHITE,
} from "../../constants/colors";
import { RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 28,
    paddingHorizontal: 60,
    backgroundColor: PRIMARY_ORANGE,
  },
  mainButton: {
    position: "absolute",

    left: windowWidth / 2 - 44,
  },
  cameraContainer: {
    minWidth: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: PRIMARY_WHITE,
    borderWidth: 1,
    borderColor: TAB_GREY,
    borderRadius: 38,
  },
  columnCenter: {
    minWidth: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
