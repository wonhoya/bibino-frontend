import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_ORANGE } from "../../../constants/colors";
import { RUBIK_REGULAR } from "../../../constants/font";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    width: windowWidth,
  },
  sectionTitle: {
    marginHorizontal: 10,
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: PRIMARY_ORANGE,
  },
  line: {
    flex: 7,
    height: 1,
    marginTop: 20,
    backgroundColor: PRIMARY_ORANGE,
    borderRadius: 15,
  },
});

export default styles;
