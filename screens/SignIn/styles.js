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

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_ORANGE,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    alignItems: "center",
  },
  title: {
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_BOLD,
    fontSize: SIGN_IN_TITLE_FONT_SIZE,
    marginVertical: 10,
  },
  description: {
    color: PRIMARY_GREY,
    fontFamily: RUBIK_REGULAR,
    fontSize: SIGN_IN_DESCRIPTION_FONT_SIZE,
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 30,
  },
});

export default styles;
