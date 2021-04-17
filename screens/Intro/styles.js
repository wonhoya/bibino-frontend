import { StyleSheet } from "react-native";
import { black } from "../../constants/colors";
import { Rubik_regular, Rubik_bold } from "../../constants/font";
import { Dimensions } from "react-native";
import {
  title_textFontSize,
  paragraph_textFontSize,
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
    color: black,
    fontSize: title_textFontSize,
    fontFamily: Rubik_bold,
    margin: 25,
    textAlign: "center",
  },
  descripton: {
    color: black,
    fontSize: paragraph_textFontSize,
    fontFamily: Rubik_regular,
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
