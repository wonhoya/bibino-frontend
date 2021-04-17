import { StyleSheet } from "react-native";
import { primary_orange, black } from "../../constants/colors";
import { Rubik_regular, Rubik_medium, Rubik_bold } from "../../constants/font";
import {
  title_textFontSize,
  paragraph_textFontSize,
} from "../../constants/size";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 5,
    backgroundColor: "green",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonConatainer: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    color: "#3C3A36",
    fontSize: 40,
    fontFamily: "Rubik_700Bold",
    margin: 20,
    textAlign: "center",
  },
  descripton: {
    color: "#3C3A36",
    fontSize: 15,
    fontFamily: "Rubik_400Regular",
    margin: 20,
    textAlign: "center",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
});

styles.dotsOpacity = (pageIndex, index) => {
  return { opacity: pageIndex === index ? 1 : 0.2 };
};

console.log(styles);

export default styles;
