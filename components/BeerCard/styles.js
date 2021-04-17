import { StyleSheet, Dimensions } from "react-native";

import { RUBIK_REGULAR, RUBIK_BOLD } from "../../constants/font";
import {
  BEER_NAME_FONT_SIZE,
  BEER_DESCRIPTION_FONT_SIZE,
} from "../../constants/size";
import {
  PRIMARY_BLACK,
  CARD_FONT_GREY,
  PRIMARY_ORAGNE,
} from "../../constants/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(windowWidth * 0.8);
const ITEM_HEIGHT = Math.round(windowHeight * 0.46);

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 30,
  },
  imageContainer: {
    width: "100%",
    flex: 2,
  },
  descriptionContainer: {
    width: "100%",
    backgroundColor: PRIMARY_BLACK,
    flex: 1,
    justifyContent: "center",
  },
  beerImage: {
    width: "100%",
    height: "100%",
  },
  nameFont: {
    fontFamily: RUBIK_BOLD,
    fontSize: BEER_NAME_FONT_SIZE,
    color: PRIMARY_ORAGNE,
    marginHorizontal: 20,
  },
  descriptionFont: {
    fontFamily: RUBIK_REGULAR,
    fontSize: BEER_DESCRIPTION_FONT_SIZE,
    color: CARD_FONT_GREY,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  topCircularBorder: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomCircularBorder: {
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default styles;
