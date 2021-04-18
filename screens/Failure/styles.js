import { PRIMARY_GREY, PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  FAILURE_TITLE_FONT_SIZE,
  FAILURE_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: FAILURE_TITLE_FONT_SIZE,
    marginTop: 40,
  },

  description: {
    fontSize: FAILURE_DESCRIPTION_FONT_SIZE,
    color: PRIMARY_GREY,
    fontFamily: RUBIK_REGULAR,
    marginTop: 10,
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
