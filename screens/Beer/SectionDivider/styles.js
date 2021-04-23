import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE, PRIMARY_BLACK } from "../../../constants/colors";
import { RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth,
  },
  sectionTitle: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: PRIMARY_ORANGE,
    marginHorizontal: 10,
  },
  line: {
    flex: 7,
    backgroundColor: PRIMARY_ORANGE,
    borderRadius: 15,
    marginTop: 20,
    height: 1,
  },
});

export default styles;
