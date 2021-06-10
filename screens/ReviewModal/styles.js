import { StyleSheet, Dimensions } from "react-native";

import {
  PRIMARY_GREY,
  PRIMARY_BLACK,
  PRIMARY_WHITE,
  PRIMARY_LIGHT_GREY,
} from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_REGULAR } from "../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    alignItems: "center",
    width: windowWidth,
    height: windowHeight / 1.5,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
  line: {
    width: 100,
    height: 7,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: PRIMARY_GREY,
  },
  title: {
    marginVertical: 10,
    fontSize: windowHeight * 0.035,
    fontFamily: RUBIK_BOLD,
    color: PRIMARY_BLACK,
  },
  input: {
    width: "90%",
    height: windowHeight * 0.09,
    marginBottom: 30,
    paddingLeft: 25,
    borderRadius: 10,
    backgroundColor: PRIMARY_WHITE,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: windowHeight * 0.018,
  },
});

export default styles;
