import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

import { Rubik_medium, Rubik_bold } from "../../constants/font";
import {
  paragraph_textFontSize,
  main_title_textFon,
} from "../../constants/size";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  font: {
    fontFamily: Rubik_bold,
    fontSize: 50,
  },
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    width: windowWidth * 0.91,
    alignSelf: "center",
  },
  profileContainer: {
    marginTop: 10,
  },
  profileImageContainer: {
    borderRadius: 10,
  },
  upperProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: windowHeight * 0.5,
  },
  hashTagContainer: {},
  contentsContainer: {
    height: windowHeight * 0.4,
  },
});

export default styles;
