import { StyleSheet, Dimensions } from "react-native";

import { PRIMARY_BLACK } from "../../constants/colors";
import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  INTRO_TITLE_FONT_SIZE,
  INTRO_PARAGRAPH_FONT_SIZE,
} from "../../constants/size";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  windowContainer: { width: windowWidth, height: windowHeight },
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonConatainer: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    color: PRIMARY_BLACK,
    fontSize: INTRO_TITLE_FONT_SIZE,
    fontFamily: RUBIK_BOLD,
    margin: 25,
    textAlign: "center",
  },
  descripton: {
    color: PRIMARY_BLACK,
    fontSize: INTRO_PARAGRAPH_FONT_SIZE,
    fontFamily: RUBIK_REGULAR,
    margin: 20,
    textAlign: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

styles.dotsOpacity = (pageIndex, index) => {
  return { opacity: pageIndex === index ? 1 : 0.2 };
};

export default styles;
