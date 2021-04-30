import { StyleSheet } from "react-native";

import { PRIMARY_GREY, PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  FAILURE_TITLE_FONT_SIZE,
  FAILURE_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 40,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: FAILURE_TITLE_FONT_SIZE,
  },
  description: {
    marginTop: 10,
    color: PRIMARY_GREY,
    fontSize: FAILURE_DESCRIPTION_FONT_SIZE,
    fontFamily: RUBIK_REGULAR,
  },
  svgContainer: {
    position: "absolute",
    alignSelf: "center",
    width: 100,
    height: 100,
    bottom: 30,
  },
});

export default styles;
