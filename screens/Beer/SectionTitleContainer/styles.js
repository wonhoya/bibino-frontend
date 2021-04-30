import { StyleSheet } from "react-native";

import { PRIMARY_LIGHT_GREY, PRIMARY_GREY } from "../../../constants/colors";
import { RUBIK_MEDIUM } from "../../../constants/font";

const styles = StyleSheet.create({
  sectionContainer: {
    width: "85%",
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: RUBIK_MEDIUM,
  },
  sectionDescriptionContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: RUBIK_MEDIUM,
    color: PRIMARY_GREY,
  },
  sectionBottomLine: {
    width: "90%",
    height: 2,
    marginVertical: 10,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
});

export default styles;
