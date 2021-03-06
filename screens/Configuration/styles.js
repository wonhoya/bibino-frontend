import { StyleSheet } from "react-native";

import { PRIMARY_WHITE } from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_MEDIUM, RUBIK_REGULAR } from "../../constants/font";
import {
  CONFIGURATION_TITLE_FONT_SIZE,
  CONFIGURATION_BUTTON_TITLE_FONT_SIZE,
  CONFIGURATION_BUTTON_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_WHITE,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
  },
  title: {
    fontSize: CONFIGURATION_TITLE_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
  },
  buttonTitle: {
    fontSize: CONFIGURATION_BUTTON_TITLE_FONT_SIZE,
    fontFamily: RUBIK_MEDIUM,
    marginBottom: 5,
  },
  buttonDescription: {
    fontSize: CONFIGURATION_BUTTON_DESCRIPTION_FONT_SIZE,
    fontFamily: RUBIK_REGULAR,
  },
  buttonContainer: {
    flex: 8,
    backgroundColor: PRIMARY_WHITE,
  },
  buttonBoard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBoard: {
    minWidth: 200,
    marginVertical: 30,
    marginHorizontal: 20,
  },
});

export default styles;
