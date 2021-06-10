import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_LIGHT_GREY } from "../../../constants/colors";
import { RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "row",
    width: windowWidth,
  },
  sectionTitle: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: PRIMARY_LIGHT_GREY,
  },
  line: {
    flex: 7,
    height: 8,
    marginVertical: 30,
    backgroundColor: PRIMARY_LIGHT_GREY,
  },
});

export default styles;
