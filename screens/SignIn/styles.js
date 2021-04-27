import { StyleSheet } from "react-native";

import {
  PRIMARY_ORANGE,
  PRIMARY_GREY,
  PRIMARY_BLACK,
} from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  SIGN_IN_TITLE_FONT_SIZE,
  SIGN_IN_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY_ORANGE,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: SIGN_IN_TITLE_FONT_SIZE,
  },
  description: {
    marginBottom: 15,
    color: PRIMARY_GREY,
    fontFamily: RUBIK_REGULAR,
    fontSize: SIGN_IN_DESCRIPTION_FONT_SIZE,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 30,
  },
});

export default styles;
