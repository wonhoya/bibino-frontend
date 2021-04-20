import { StyleSheet } from "react-native";

import { PRIMARY_BLACK, PRIMARY_ORANGE } from "../../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../../constants/font";
import {
  INTRO_TITLE_FONT_SIZE,
  INTRO_PARAGRAPH_FONT_SIZE,
} from "../../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
  },
  title: {
    color: PRIMARY_BLACK,
    fontSize: INTRO_TITLE_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
    margin: 25,
    textAlign: "center",
  },
  description: {
    color: PRIMARY_BLACK,
    fontSize: INTRO_PARAGRAPH_FONT_SIZE,
    fontFamily: RUBIK_REGULAR,
    margin: 20,
    textAlign: "center",
  },
  buttonConatainer: {
    marginTop: 20,
  },
});

export default styles;
