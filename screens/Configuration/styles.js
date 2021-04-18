import { PRIMARY_WHITE } from "../../constants/colors";
import { RUBIK_BOLD, RUBIK_MEDIUM } from "../../constants/font";
import {
  CONFIGURATION_TITLE_FONT_SIZE,
  SUCCESS_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";

import { StyleSheet } from "react-native";

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
    fontSize: 20,
    fontFamily: RUBIK_MEDIUM,
    marginBottom: 5,
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
