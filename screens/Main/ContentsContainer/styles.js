import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR } from "../../../constants/font";
import { MAIN_PARAGRAPH_FONT_SIZE } from "../../../constants/size";
import { PRIMARY_BLACK } from "../../../constants/colors";

const { width: windowWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  paragraphContainer: {
    alignSelf: "center",
    width: windowWidth * 0.87,
  },
  carouselContainer: {
    marginTop: windowWidth * 0.02,
  },
  paragraph: {
    marginVertical: 9,
    color: PRIMARY_BLACK,
    fontFamily: RUBIK_REGULAR,
    fontSize: MAIN_PARAGRAPH_FONT_SIZE,
  },
});

export default styles;
